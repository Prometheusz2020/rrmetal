import { Play } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const images = [
    { id: 1, src: "/imgs/projeto-1.jpeg", alt: "Estrutura Metálica 1" },
    { id: 2, src: "/imgs/projeto-2.jpeg", alt: "Solda Industrial" },
    { id: 3, src: "/imgs/projeto-3.jpeg", alt: "Galpão Metálico" },
    { id: 4, src: "/imgs/projeto-4.jpeg", alt: "Estrutura Metálica 2" },
    { id: 5, src: "/imgs/projeto-5.jpeg", alt: "Projeto Especial" },
    { id: 6, src: "/imgs/projeto-6.jpeg", alt: "Montagem Industrial" },
    { id: 7, src: "/imgs/projeto-7.jpeg", alt: "Reforço Estrutural" },
    { id: 8, src: "/imgs/projeto-8.jpeg", alt: "Galpão Metálico 2" }
  ];

  const videos = [
    { id: 1, thumb: "/imgs/projeto-9.jpeg", title: "Montagem de Galpão" },
    { id: 2, thumb: "/imgs/projeto-10.jpeg", title: "Processo de Soldagem" },
    { id: 3, thumb: "/imgs/projeto-11.jpeg", title: "Estrutura de Grande Porte" },
    { id: 4, thumb: "/imgs/projeto-12.jpeg", title: "Finalização de Obra" }
  ];

  return (
    <div className="page animate-fade-in">
      <div className="page-header portfolio-header">
        <div className="container">
          <h1 className="title text-white">Nosso Portfólio</h1>
          <p className="subtitle text-white">Conheça alguns dos nossos principais projetos executados.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title text-center mb-16">
            <h2>Galeria de Fotos</h2>
            <div className="title-underline"></div>
          </div>

          <div className="portfolio-grid grid md:grid-cols-2 gap-8">
            {images.map((img, index) => (
              <div key={img.id} className={`portfolio-item delay-${(index % 4) * 100}`}>
                <div className="portfolio-img-wrapper image-card">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="portfolio-overlay">
                    <span>Ver Detalhes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="section-title text-center mb-16">
            <h2>Vídeos de Obras</h2>
            <div className="title-underline"></div>
            <p className="mt-4 text-muted">Acompanhe nossos processos e montagens (480x640)</p>
          </div>

          <div className="video-grid">
            {videos.map((vid, index) => (
              <div key={vid.id} className={`portfolio-item video-card delay-${(index % 4) * 100}`}>
                <div className="video-thumb-wrapper">
                  <img src={vid.thumb} alt={vid.title} className="video-thumb" loading="lazy" />
                  <div className="play-button-overlay">
                    <button className="play-btn" aria-label="Play video">
                      <Play size={36} fill="currentColor" />
                    </button>
                  </div>
                </div>
                <div className="video-info">
                  <h4>{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
