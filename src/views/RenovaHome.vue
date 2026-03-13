<template>
  <div class="renova-home">
    <header>
      <title>Renova360 - Consultoria e Treinamento em Saúde, Beleza e Bem Estar</title>
      <meta name="description" content="Consultoria empresarial, treinamentos e programas de inovação para clínicas, salões de beleza e empresas de bem-estar em Curitiba e todo o Brasil.">
      <meta name="keywords" content="consultoria, treinamento, saúde, beleza, bem estar, gestão empresarial, inovação, Renova360">
    </header>
    <section class="hero">
      <div class="hero-content">
        <h1>Transforme Desafios em Resultados</h1>
        <p>Consultoria estratégica e treinamento especializado para pequenas e médias empresas.</p>
        <button @click="contact" class="cta-button">Entre em Contato</button>
      </div>
    </section>

    <!-- Nova Seção de Destaque para BPO Financeiro -->
    <section class="bpo-hero">
      <div class="bpo-hero-content">
        <h1>BPO Financeiro para PME <span class="highlight-bpo"></span></h1>
        <p>Transforme a gestão financeira da sua empresa com a Renova360.<br> Clareza, controle e decisões baseadas em dados.</p>
        <div class="bpo-cta-buttons">
          <button @click="navigateToBPO" class="cta-button-bpo primary">Conhecer Mais</button>
          <button @click="contact" class="cta-button-bpo secondary">Fale Conosco</button>
        </div>
      </div>
    </section>
    <!-- Fim da Nova Seção de Destaque -->

    <section class="about-brief">
      <h2>Sobre Nós</h2>
      <p>Somos uma empresa de Consultoria Empresarial, Treinamento e Desenvolvimento de Pessoas.
        Com sede em Curitiba, Paraná, somos dedicados a oferecer soluções completas para a gestão da sua empresa.
        Através de uma abordagem integrada, humanizada e personalizada, auxiliamos pequenas e micro empresas a 
        alcançarem excelência operacional e competitividade no mercado.</p>
    </section>

    <section class="solutions-highlight">
      <h2>Nossas Soluções</h2>
      <div class="solutions-grid">
        <div class="solution-card" @click="navigateToSolution('gestao-comercial')">
          <h3>Gestão Comercial</h3>
          <p>Otimize suas operações de vendas e relacionamento com clientes.</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('gestao-financeira')">
          <h3>Gestão Financeira</h3>
          <p>Maximize seus resultados financeiros e tome decisões informadas.</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('gestao-de-pessoas')">
          <h3>Gestão de Pessoas</h3>
          <p>Desenvolva e gerencie talentos para impulsionar o sucesso.</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('gestao-estrategica')">
          <h3>Gestão Estratégica</h3>
          <p>Alinhe sua visão de longo prazo com ações efetivas.</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('marketing-e-comunicacao')">
          <h3>Marketing e Comunicação</h3>
          <p>Soluções para fortalecer a marca e atrair clientes.</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('operacao')">
          <h3>Operação</h3>
          <p>Otimize processos e aumente a eficiência operacional.</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('sustentabilidade-esg')">
          <h3>Sustentabilidade e ESG</h3>
          <p>Integre práticas sustentáveis e responsáveis ao seu negócio.</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('erpcompleto')">
          <h3>ERP Renova360</h3>
          <p>Gestão eficiente para todas as áreas da sua empresa</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('inteligencia-artificial')">
          <h3>IA - Agentes Personalizados Renova360</h3>
          <p>CRM automatizado e Agentes personalizados</p>
        </div>
        <div class="solution-card" @click="navigateToSolution('kommo')">
          <h3>Parceria Kommo</h3>
          <p>CRM - Agentes Personalizados Kommo</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RenovaHome',
  methods: {
    contact() {
      this.$router.push('/contato')
    },
    navigateToSolution(solution) {
      this.$router.push(`/solucoes/${solution}`);
    },
    navigateToBPO() {
      this.$router.push('/solucoes/bpo-financeiro'); // Esta rota será criada no próximo passo
    }
  }
}
</script>

<style scoped lang="scss">
.renova-home {
  .hero {
    background-image: url('../assets/Img_grafico.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(47, 105, 153, 0.7), rgba(134, 103, 147, 0.7));
    }

    .hero-content {
      max-width: 800px;
      padding: 2rem;
      position: relative;
      z-index: 1;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;

      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        color: #fff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }

      .cta-button {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        background-color: #D35F8E;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: darken(#D35F8E, 10%);
        }
      }
    }
  }

  .about-brief,
  .solutions-highlight {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    text-align: center;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #2F6999;
    }
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    .solution-card {
      background-color: #ecf0f5;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #866793;
      }
    }
  }
}

@media (max-width: 900px) {
  /* Não há mais .reconecta-glass, então esta media query pode ser removida ou adaptada se houver outros elementos */
  /* .reconecta-glass {
    flex-direction: column;
    gap: 16px;
    padding: 24px 12px;
    text-align: center;
  }
  .reconecta-text {
    text-align: center;
  } */
}
@media (max-width: 768px) {
  .renova-home {
    .hero {
      .hero-content {
        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }

    .solutions-grid {
      grid-template-columns: 1fr;
    }
  }
}

/* Estilos para a Nova Seção de Destaque BPO Financeiro - AJUSTADO PARA FUNDO NORMAL */
.bpo-hero {
  // REMOVIDO: background-image: url('../assets/Img_grafico.jpg');
  background-color: #f8f9fa; // Fundo claro, similar ao rodapé e outras seções
  // REMOVIDO: background-size: cover;
  // REMOVIDO: background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #2F6999; // Cor do texto ajustada para fundo claro
  position: relative;
  margin-bottom: 4rem;

  // REMOVIDO: &::before (o overlay escuro)

  .bpo-hero-content {
    max-width: 900px;
    padding: 2rem;
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.9); // Fundo mais opaco para o conteúdo, destacando-o
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #2F6999; // Cor do título ajustada para fundo claro
    text-shadow: none; // Removido sombra do texto
  }

  .highlight-bpo {
    color: #D35F8E; // Cor de destaque da sua paleta
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #2F6999; // Cor do parágrafo ajustada para fundo claro
    text-shadow: none; // Removido sombra do texto
  }

  .bpo-cta-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;

    .cta-button-bpo {
      padding: 1rem 2.5rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &.primary {
        background-color: #D35F8E; // Cor de destaque
        color: #ffffff;
        &:hover {
          background-color: darken(#D35F8E, 10%);
          transform: translateY(-3px);
        }
      }

      &.secondary {
        background-color: transparent;
        border: 2px solid #2F6999; // Borda ajustada para a cor primária
        color: #2F6999; // Texto ajustado para a cor primária
        &:hover {
          background-color: rgba(47, 105, 153, 0.1); // Usar a cor primária com transparência no hover
          transform: translateY(-3px);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .bpo-hero {
    height: auto;
    min-height: 50vh;
    .bpo-hero-content {
      h1 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1rem;
      }
      .bpo-cta-buttons {
        flex-direction: column;
        .cta-button-bpo {
          width: 100%;
        }
      }
    }
  }
}
</style>
