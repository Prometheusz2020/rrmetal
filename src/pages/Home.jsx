import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text glass">
            <h1 className="hero-title">
              Estruturas que <span className="highlight">sustentam</span> grandes projetos.
            </h1>
            <p className="hero-subtitle">
              Qualidade, segurança e precisão em fabricação e montagem de estruturas metálicas para todo o Brasil.
            </p>
            <div className="hero-cta">
              <Link to="/contato" className="btn btn-primary">
                Solicite um Orçamento <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                Ver Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="title">Por que escolher a RRMETAL?</h2>
            <p className="subtitle">Compromisso com a excelência em cada etapa do seu projeto.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <CheckCircle size={32} className="feature-icon" />
              </div>
              <h3>Qualidade</h3>
              <p>Utilizamos os melhores materiais e técnicas avançadas para garantir durabilidade.</p>
            </div>
            
            <div className="feature-card delay-100">
              <div className="feature-icon-wrapper">
                <Shield size={32} className="feature-icon" />
              </div>
              <h3>Segurança</h3>
              <p>Nossa equipe segue rigorosos padrões de segurança para proteger todos os envolvidos.</p>
            </div>

            <div className="feature-card delay-200">
              <div className="feature-icon-wrapper">
                <Clock size={32} className="feature-icon" />
              </div>
              <h3>Pontualidade</h3>
              <p>Cumprimos rigorosamente os prazos estabelecidos, sem comprometer a qualidade.</p>
            </div>

            <div className="feature-card delay-300">
              <div className="feature-icon-wrapper">
                <TrendingUp size={32} className="feature-icon" />
              </div>
              <h3>Inovação</h3>
              <p>Buscamos constantemente melhorias e excelência nos processos de fabricação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <div className="about-cta-content glass">
            <h2>Nossa Missão</h2>
            <p>
              Oferecer soluções em estruturas metálicas com qualidade, segurança e precisão, cumprindo prazos e atendendo às necessidades de cada cliente, construindo parcerias duradouras e entregando serviços confiáveis e eficientes.
            </p>
            <Link to="/sobre" className="btn btn-primary mt-4">
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
