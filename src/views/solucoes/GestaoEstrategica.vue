<template>
  <div class="gestao-estrategica"><!-- Este é um comentário HTML -->
    <NavegacaoBreadcrumbs current-page="Gestão Estratégica" />
    
    <section class="intro">
      <h1>Gestão Estratégica</h1>
      <p>
        A Gestão Estratégica é o coração do planejamento e da execução de uma empresa. . Com foco em análise de mercado, definição de metas e inovação, essa área garante que a empresa não apenas sobreviva, mas prospere em um mercado dinâmico e competitivo.
      </p>
      <p>
        Em um setor onde as expectativas dos consumidores e as tendências do mercado estão em constante evolução, a Gestão Estratégica é a chave para o sucesso sustentável.
      </p>
    </section>

    <section class="benefits">
      <h2>Importância da Gestão Estratégica</h2>
      <p>
        É a área responsável por definir o rumo de uma empresa, garantindo que todas as ações e decisões estejam alinhadas com seus objetivos de longo prazo.
      </p>
      <p>
        Ela envolve a análise do ambiente interno e externo, a definição de metas claras e a criação de planos para alcançá-las. Em resumo, é a bússola que guia a empresa em direção ao sucesso sustentável.
      </p>
    </section>

    <section class="conclusion">
      <p>  
        Uma estratégia bem definida ajuda a empresa a se adaptar rapidamente e a se destacar em um mercado competitivo.
      </p>
    </section>
    
    <div class="cards-container">
      <div class="card">
        <h3>Dores</h3>
        <ul>
          <li>Falta de direcionamento claro para o crescimento;</li>
          <li>Falta de missão, visão e valores da empresa;</li>
          <li>Dificuldade em competir em um mercado saturado.</li>
          <li>Desconhecimento de oportunidades de inovação ou expansão do negócio</li>
        </ul>
      </div>
      <div class="card-solucoes">
        <h3>Soluções</h3>
        <ul>
          <li>Definição de metas SMART (específicas, mensuráveis, alcançáveis, relevantes e temporais);</li>
          <li>Análise SWOT e benchmarking para identificar vantagens competitivas;</li>
          <li>Desenvolvimento de modelos de negócio inovadores, como assinaturas ou marketplaces;</li>
          <li>Planejamento Estratégico da empresa;</li>
          <li>Gestão de Riscos;</li>
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
  name: 'GestaoEstrategica',
  components: {
    NavegacaoBreadcrumbs,
  }
}
</script>

<style scoped lang="scss">
.gestao-estrategica {
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
  .gestao-estrategica {
    padding: 1rem;

    .cards-container {
      flex-direction: column;
    }
  }
}
</style>