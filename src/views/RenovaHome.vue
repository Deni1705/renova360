<template>
  <div class="renova-home">
    <header>
      <title>Renova360 - Consultoria e Treinamento em Saúde, Beleza e Bem Estar</title>
      <meta name="description" content="Renova360 oferece consultoria e treinamento especializado em Saúde, Beleza e Bem Estar para inovar a gestão da sua empresa. Transforme desafios em resultados com nossas soluções personalizadas.">
      <meta name="keywords" content="consultoria, treinamento, saúde, beleza, bem estar, gestão empresarial, inovação, Renova360">
    </header>
    <section class="hero">
      <div class="hero-content">
        <h1>Transforme Desafios em Resultados</h1>
        <p>Consultoria e Treinamento especializado em Saúde, Beleza e Bem Estar para inovar a gestão da sua empresa.</p>
        <button @click="contact" class="cta-button">Entre em Contato</button>
      </div>
    </section>

    <section class="about-brief">
      <h2>Sobre Nós</h2>
      <p>Somos uma empresa de Consultoria Empresarial, Treinamento e Desenvolvimento de Pessoas.
        Com sede em Curitiba, Paraná, somos dedicados a oferecer soluções completas para a gestão da sua empresa.
        Através de uma abordagem integrada, humanizada e personalizada, auxiliamos organizações dos setores de Saúde,
        Beleza e Bem Estar a alcançarem excelência operacional e competitividade no mercado.</p>
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
        background-color: #D35F8E; // Atualizado para a cor de destaque
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
      color: #2F6999; // Cor primária para títulos
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
        color: #866793; // Cor secundária para títulos dos cards
      }
    }
  }
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
</style>
