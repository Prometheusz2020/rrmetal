import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import './Contato.css';

const Contato = () => {
  const [feedback, setFeedback] = useState(null);
  const feedbackTimeout = useRef(null);

  useEffect(() => () => window.clearTimeout(feedbackTimeout.current), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    window.clearTimeout(feedbackTimeout.current);
    setFeedback(null);
    const payload = {
      name: document.getElementById('name')?.value,
      email: document.getElementById('email')?.value,
      phone: document.getElementById('phone')?.value,
      subject: document.getElementById('subject')?.value,
      message: document.getElementById('message')?.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao enviar mensagem.');
      }

      setFeedback({
        type: 'success',
        message: result.message || 'Mensagem enviada com sucesso!',
      });
      form.reset();
      feedbackTimeout.current = window.setTimeout(() => setFeedback(null), 3000);
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error.message || 'Não foi possível enviar a mensagem.',
      });
    }
  };

  return (
    <div className="page animate-fade-in">
      <div className="page-header contato-header">
        <div className="container">
          <h1 className="title text-white">Entre em Contato</h1>
          <p className="subtitle text-white">Estamos prontos para atender a sua necessidade com a melhor solução em estruturas metálicas.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info & WhatsApp Cards */}
            <div className="contact-info-container">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Endereço</h4>
                      <p className="text-muted">Rua João Duva, 120 - Distrito Industrial, São José do Rio Pardo - SP</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Telefone</h4>
                      <p className="text-muted">(19) 99547-6078</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">E-mail</h4>
                      <p className="text-muted">contato@rrmetal.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Atendimento Direto</h2>
                <div className="whatsapp-cards">
                  <a href="https://wa.me/5519995476078" className="whatsapp-card" target="_blank" rel="noopener noreferrer">
                    <div className="wa-icon">
                      <MessageCircle size={32} />
                    </div>
                    <div className="wa-info">
                      <h4>Comercial / Orçamentos</h4>
                      <p>(19) 99547-6078</p>
                    </div>
                  </a>

                  <a href="https://wa.me/5519992495419" className="whatsapp-card" target="_blank" rel="noopener noreferrer">
                    <div className="wa-icon">
                      <MessageCircle size={32} />
                    </div>
                    <div className="wa-info">
                      <h4>Engenharia / Projetos</h4>
                      <p>(19) 99249-5419</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container glass-card">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                {feedback && (
                  <div
                    className={`form-feedback form-feedback-${feedback.type}`}
                    role={feedback.type === 'error' ? 'alert' : 'status'}
                    aria-live={feedback.type === 'error' ? 'assertive' : 'polite'}
                  >
                    {feedback.message}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input type="text" id="name" placeholder="Seu nome" required />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" placeholder="(19) 99547-6078" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <select id="subject" required>
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="duvida">Dúvida Técnica</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" rows="5" placeholder="Como podemos ajudar?" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full mt-4">
                  Enviar Mensagem <Send size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder visual) */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <MapPin size={48} className="map-pin-icon" />
            <h3>Atendemos todo o Brasil a partir de São José do Rio Pardo - SP</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
