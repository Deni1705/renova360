<template>
  <div class="gestao-financeira">
    <NavegacaoBreadcrumbs current-page="Gestão Financeira" />
    
    <section class="intro">
      <h1>Gestão Financeira</h1>
      <p>
        A Gestão Financeira é o alicerce que sustenta as operações e o crescimento de uma empresa.
      </p>
      <p>
        Com foco no controle de custos, planejamento estratégico e análise de rentabilidade, essa área garante que a empresa opere de forma eficiente, sustentável e preparada para aproveitar as oportunidades do mercado.
      </p>
      <p>
        Em um setor tão dinâmico e competitivo, a Gestão Financeira é indispensável para transformar desafios em vantagens competitivas.
      </p>
    </section>

    <section class="benefits">
      <h2>Importância da Gestão Financeira</h2>
      <p>
        É uma área essencial dentro de uma empresa, responsável por planejar, controlar e otimizar os recursos financeiros. Seu objetivo é garantir a saúde financeira da organização, permitindo que ela opere de forma sustentável, cresça e alcance seus objetivos estratégicos. 
      </p>
      <p>
        Isso envolve desde o controle de custos e fluxo de caixa até o planejamento de investimentos e a análise de rentabilidade.
      </p>
      <p>
        No segmento de saúde, beleza e bem-estar, a Gestão Financeira é ainda mais crítica, pois o setor envolve altos investimentos em:
      </p>
      <ul>
        <li>Tecnologia;</li>
        <li>Insumos de qualidade e mão-de-obra especializada;</li>
        <li>Além de estar sujeito a flutuações de demanda e regulamentações específicas.</li>
      </ul>
    </section>
    
    <div class="cards-container">
      <div class="card">
        <h3>Dores</h3>
        <ul>
          <li>Falta de controle sobre custos e despesas;</li>
          <li>Dificuldade em manter um fluxo de caixa saudável;</li>
          <li>Planejamento financeiro insuficiente para investimentos ou expansões.</li>
        </ul>
      </div>
      <div class="card-solucoes">
        <h3>Soluções</h3>
        <ul>
          <li>Implementação de sistemas de controle financeiro e indicadores de desempenho;</li>
          <li>Controle Financeiro e Fluxo de Caixa;</li>
          <li>Outsourcing Gestão Financeira;</li>
          <li>Plano Estratégico para redução de custos operacionais e aumento da receita;</li>
          <li>Planejamento financeiro de longo prazo para sustentabilidade e crescimento;</li>
          <li>Conformidade e Regulamentações da área de saúde, beleza e bem estar.</li>
        </ul>
      </div>
    </div>

    <div class="cta-section">
      <h2>Conte com a RENOVA360 para te conduzir nesta jornada!</h2>
      <p>Entre em contato conosco para uma consultoria personalizada.</p>
      <router-link to="/contato" class="cta-button">Solicitar Consultoria</router-link>
    </div>
  </div>
</template>

<script>
import NavegacaoBreadcrumbs from '@/components/NavegacaoBreadcrumbs.vue';

export default {
  name: 'GestaoFinanceira',
  components: {
    NavegacaoBreadcrumbs,
  }
}
</script>

<style scoped lang="scss">
.gestao-financeira {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    color: #2F6999;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: #2F6999;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #2F6999;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
      color: #2F6999;
    }
  }

  .intro, .benefits, .conclusion {
    margin-bottom: 2rem;
  }

  .cards-container {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;

    .card, .card-solucoes {
      flex: 1;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h3 {
        margin-bottom: 0.5rem;
        color: #866793;
        text-align: center;
      }

      ul {
        list-style-type: none;
        padding-left: 0;

        li {
          position: relative;
          padding-left: 1.5em;
          margin-bottom: 0.5rem;
          color: #2F6999;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5em;
            width: 6px;
            height: 6px;
            background-color: #D35F8E;
            border-radius: 50%;
          }
        }
      }
    }

    .card {
      background-color: #f0dff2;
    }

    .card-solucoes {
      background-color: #edf4ed;
    }
  }

  .cta-section {
    background-color: #f0f8ff;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;

    h2 {
      margin-bottom: 1rem;
      color: #866793;
    }

    p {
      margin-bottom: 1.5rem;
      color: #2F6999;
    }

    .cta-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: #D35F8E;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken(#D35F8E, 10%);
      }
    }
  }
}

@media (max-width: 768px) {
  .gestao-financeira {
    padding: 1rem;

    .cards-container {
      flex-direction: column;
    }
  }
}
</style>