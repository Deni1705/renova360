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

    <!-- Bloco Reconecta com movimento -->
    <section class="reconecta-hero">
      <div class="reconecta-glass">
        <div class="reconecta-anim">
          <!-- Animação CSS: círculos pulsantes -->
          <div class="pulse-circle circle1"></div>
          <div class="pulse-circle circle2"></div>
          <div class="pulse-circle circle3"></div>
          <img src="../assets/reconecta-icon.png" alt="Reconecta Ícone" class="reconecta-icon" />
        </div>
        <div class="reconecta-text">
          <h2>
            <span class="highlight">Programa Reconecta</span>
          </h2>
          <p class="subtitle">
            Uma jornada sensorial e imersiva, focada nos <b>6 sentidos</b>, que coloca o seu time no centro do autocuidado, mostrando que a sua empresa se preocupa com a saúde mental dos seus colaboradores.
          </p>
          <ul>
            <li>Melhoria do bem-estar</li>
            <li>Engajamento e motivação</li>
            <li>Diferenciação no mercado</li>
            <li>Cultura de cuidado</li>
          </ul>
          <button class="reconecta-cta" @click="navigateToReconecta">Quero saber mais</button>
        </div>
      </div>
    </section>
    <!-- Fim do bloco Reconecta -->

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
    navigateToReconecta() {
      this.$router.push('/reconecta');
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

  /* Bloco Reconecta com movimento */
  .reconecta-hero {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    background: none;
    animation: fadeIn 1s;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px);}
    to { opacity: 1; transform: none;}
  }

  .reconecta-glass {
    display: flex;
    align-items: center;
    gap: 32px;
    background: rgba(255,255,255,0.25);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    padding: 36px 48px;
    border: 1px solid rgba(255,255,255,0.18);
    animation: glassIn 1.2s;
  }

  @keyframes glassIn {
    from { opacity: 0; transform: scale(0.95);}
    to { opacity: 1; transform: scale(1);}
  }

  .reconecta-anim {
    position: relative;
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pulse-circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    animation: pulse 2.5s infinite;
  }
  .circle1 {
    width: 120px; height: 120px;
    background: #D35F8E;
    left: 10px; top: 10px;
    animation-delay: 0s;
  }
  .circle2 {
    width: 80px; height: 80px;
    background: #2F6999;
    left: 30px; top: 30px;
    animation-delay: 0.8s;
  }
  .circle3 {
    width: 50px; height: 50px;
    background: #60AA5F;
    left: 45px; top: 45px;
    animation-delay: 1.6s;
  }
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.6;}
    70% { transform: scale(1.15); opacity: 0.15;}
    100% { transform: scale(0.95); opacity: 0.6;}
  }
  .reconecta-icon {
    position: relative;
    width: 60px;
    height: 60px;
    z-index: 2;
    border-radius: 50%;
    background: #fff;
    padding: 8px;
    box-shadow: 0 2px 8px rgba(47,105,153,0.08);
    object-fit: contain;
  }

  .reconecta-text {
    max-width: 440px;
    text-align: left;
  }

  .reconecta-text h2 {
    font-size: 2.3rem;
    color: #2F6999;
    margin-bottom: 0.5rem;
  }

  .reconecta-text .highlight {
    background: linear-gradient(90deg, #D35F8E 40%, #2F6999 100%);
    color: #fff;
    padding: 0.2em 0.6em;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(211,95,142,0.08);
  }

  .reconecta-text .subtitle {
    color: #866793;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .reconecta-text ul {
    margin: 0 0 1.2rem 0;
    padding: 0;
    list-style: none;
  }
  .reconecta-text ul li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #2F6999;
    font-weight: 500;
    position: relative;
    padding-left: 22px;
  }
  .reconecta-text ul li::before {
    content: "✔";
    color: #60AA5F;
    position: absolute;
    left: 0;
    font-size: 1.1em;
  }

  .reconecta-cta {
    background: linear-gradient(90deg, #2F6999 60%, #D35F8E 100%);
    color: #fff;
    border: none;
    border-radius: 30px;
    padding: 12px 32px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(47,105,153,0.08);
    transition: transform 0.15s, box-shadow 0.15s;
    animation: pulseBtn 1.5s infinite;
  }
  @keyframes pulseBtn {
    0% { box-shadow: 0 0 0 0 rgba(211,95,142,0.15);}
    70% { box-shadow: 0 0 0 12px rgba(211,95,142,0);}
    100% { box-shadow: 0 0 0 0 rgba(211,95,142,0);}
  }
  .reconecta-cta:hover {
    transform: scale(1.05);
    background: linear-gradient(90deg, #D35F8E 60%, #2F6999 100%);
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
  .reconecta-glass {
    flex-direction: column;
    gap: 16px;
    padding: 24px 12px;
    text-align: center;
  }
  .reconecta-text {
    text-align: center;
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
