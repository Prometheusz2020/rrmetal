import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Método não permitido.' });
  }

  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      ok: false,
      message: 'Preencha nome, e-mail, assunto e mensagem.'
    });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.SMTP_TO || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return res.status(500).json({
      ok: false,
      message: 'Configuração de e-mail ausente no servidor.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `Contato via site - ${subject}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone || 'Não informado'}`,
        `Assunto: ${subject}`,
        '',
        'Mensagem:',
        message
      ].join('\n')
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({
      ok: false,
      message: 'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.'
    });
  }
}
