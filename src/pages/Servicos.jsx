import { Settings, Hammer, Grid, Maximize, TrendingUp, ShieldCheck } from 'lucide-react';
import './Servicos.css';

const Servicos = () => {
  const servicos = [
    {
      id: 1,
      title: "Fabricação de Estruturas",
      desc: "Produzimos estruturas metálicas sob medida com aço de alta qualidade, garantindo resistência e durabilidade para qualquer tipo de projeto.",
      icon: <Hammer size={40} />
    },
    {
      id: 2,
      title: "Montagem Industrial",
      desc: "Equipe especializada em montagem de galpões, mezaninos e coberturas industriais com foco em segurança e agilidade.",
      icon: <Settings size={40} />
    },
    {
      id: 3,
      title: "Projetos Especiais",
      desc: "Desenvolvemos soluções personalizadas que atendem a necessidades arquitetônicas e de engenharia específicas.",
      icon: <Grid size={40} />
    },
    {
      id: 4,
      title: "Reforço Estrutural",
      desc: "Serviços de ampliação e reforço em estruturas existentes para garantir a estabilidade e suportar novas cargas.",
      icon: <Maximize size={40} />
    },
    {
      id: 5,
      title: "Manutenção Preventiva",
      desc: "Inspeções e reparos para prolongar a vida útil das estruturas metálicas e evitar paradas não programadas.",
      icon: <ShieldCheck size={40} />
    },
    {
      id: 6,
      title: "Consultoria em Aço",
      desc: "Apoio técnico para otimização de projetos em aço, visando melhor custo-benefício e eficiência estrutural.",
      icon: <TrendingUp size={40} />
    }
  ];

  return (
    <div className="page animate-fade-in">
      <div className="page-header servicos-header">
        <div className="container">
          <h1 className="title text-white">Nossos Serviços</h1>
          <p className="subtitle text-white">Soluções completas do projeto à montagem.</p>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div 
                key={servico.id} 
                className={`servico-card delay-${(index % 3 + 1) * 100}`}
              >
                <div className="servico-icon">
                  {servico.icon}
                </div>
                <h3 className="servico-title">{servico.title}</h3>
                <p className="servico-desc">{servico.desc}</p>
                <div className="servico-footer">
                  <span className="servico-link">Saiba Mais &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
