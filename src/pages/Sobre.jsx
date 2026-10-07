import { Target, Eye, Award } from 'lucide-react';
import './Sobre.css';

const Sobre = () => {
  return (
    <div className="page animate-fade-in">
      <div className="page-header sobre-header">
        <div className="container">
          <h1 className="title text-white">Sobre Nós</h1>
          <p className="subtitle text-white">“Estruturas que sustentam grandes projetos.”</p>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container">
          <div className="about-content grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-text">
              <h2 className="section-title mb-6">Nossa História</h2>
              <div className="title-underline-left mb-6"></div>
              <p className="text-large mb-4">
                A RRMETAL nasceu com o propósito de transformar o mercado de estruturas metálicas no Brasil. Localizada estrategicamente em Mococa, São Paulo, nossa empresa atende a clientes em todo o território nacional com excelência e dedicação.
              </p>
              <p className="text-large mb-4">
                Somos especialistas na fabricação e montagem de estruturas metálicas para os mais diversos fins: desde galpões industriais até projetos arquitetônicos personalizados. Nosso diferencial está no compromisso inabalável com a qualidade e na capacidade de entregar soluções inovadoras.
              </p>
              <p className="text-large">
                Com uma equipe altamente qualificada e tecnologia de ponta, garantimos que cada peça, cada solda e cada montagem atenda aos mais rigorosos padrões de segurança do setor.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img src="/hero.png" alt="Equipe RRMETAL" className="about-image shadow-lg" loading="lazy" />
              <div className="about-image-accent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title text-center mb-16">
            <h2>Nossa Identidade</h2>
            <div className="title-underline"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="identity-card delay-100">
              <div className="identity-icon-wrapper">
                <Target size={40} className="identity-icon" />
              </div>
              <h3>Missão</h3>
              <p>
                Oferecer soluções em estruturas metálicas com qualidade, segurança e precisão, cumprindo prazos e atendendo às necessidades de cada cliente, construindo parcerias duradouras e entregando serviços confiáveis e eficientes.
              </p>
            </div>

            <div className="identity-card delay-200">
              <div className="identity-icon-wrapper">
                <Eye size={40} className="identity-icon" />
              </div>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como uma empresa de referência em fabricação e montagem de estruturas metálicas, destacando-se pela qualidade, compromisso, segurança e confiança dos nossos clientes e parceiros.
              </p>
            </div>

            <div className="identity-card delay-300">
              <div className="identity-icon-wrapper">
                <Award size={40} className="identity-icon" />
              </div>
              <h3>Valores</h3>
              <ul className="valores-list">
                <li>Qualidade em cada etapa do trabalho</li>
                <li>Compromisso com nossos clientes</li>
                <li>Segurança para a equipe e parceiros</li>
                <li>Cumprimento rigoroso de prazos</li>
                <li>Honestidade e transparência</li>
                <li>Responsabilidade e respeito</li>
                <li>Busca constante por melhoria e excelência</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
