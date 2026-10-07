import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

// Using a custom icon for TikTok as it's not currently in lucide-react standard set
const TikTokIcon = ({ size = 24, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const FacebookIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid grid md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Info */}
          <div className="footer-brand">
            <h3 className="footer-title">RRMETAL</h3>
            <p className="footer-slogan">Soluções em Estruturas Metálicas</p>
            <p className="footer-desc">
              Estruturas que sustentam grandes projetos. Oferecemos soluções com qualidade, segurança e precisão para todo o Brasil.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contato</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={20} className="contact-icon" />
                <span>Mococa, São Paulo - Brasil</span>
              </li>
              <li>
                <Phone size={20} className="contact-icon" />
                <span>(16) 99999-9999</span>
              </li>
              <li>
                <Mail size={20} className="contact-icon" />
                <span>contato@rrmetal.com.br</span>
              </li>
            </ul>
          </div>

          {/* Socials & Links */}
          <div className="footer-social">
            <h4 className="footer-subtitle">Redes Sociais</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-link"><FacebookIcon size={24} /></a>
              <a href="#" aria-label="Instagram" className="social-link"><InstagramIcon size={24} /></a>
              <a href="#" aria-label="TikTok" className="social-link"><TikTokIcon size={24} /></a>
              <a href="#" aria-label="LinkedIn" className="social-link"><LinkedinIcon size={24} /></a>
              <a href="#" aria-label="WhatsApp" className="social-link"><MessageCircle size={24} /></a>
            </div>
            
            <div className="quick-links mt-4">
              <Link to="/sobre">Sobre Nós</Link>
              <Link to="/portfolio">Portfólio</Link>
              <Link to="/servicos">Serviços</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Todos os direitos reservados. | CNPJ: 55.555.555/0001-55</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
