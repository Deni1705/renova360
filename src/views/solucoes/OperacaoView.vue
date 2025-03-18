<template>
  <div class="operacao">
    <NavegacaoBreadcrumbs current-page="Operação" /><!-- Este é um comentário HTML -->
    
    <section class="intro">
      <h1>Operação</h1>
      <p>
        A área de Operação é responsável por garantir que todos os processos internos de uma empresa funcionem de forma eficiente, desde a produção e logística até o atendimento ao cliente. 
      </p>
      <p>
        Seu objetivo é otimizar recursos, reduzir custos e garantir que os produtos e serviços sejam entregues com qualidade e no prazo certo.
      </p>
      <p>
        No segmento de saúde, beleza e bem-estar, a Operação é crucial, pois lida diretamente com a entrega de experiências que impactam o bem-estar e a satisfação dos clientes.
      </p>
    </section>

    <section class="benefits">
      <h2>Importância da Operação</h2>
      <p>
        É o alicerce que sustenta a eficiência e a qualidade de uma empresa do segmento de saúde, beleza e bem-estar. Com foco na otimização de processos, gestão de qualidade e experiência do cliente, essa área garante que a empresa opere de forma sustentável e entregue resultados excepcionais.
      </p>
    </section>

    <section class="conclusion">
      <p>  
        Em um mercado tão dinâmico e competitivo, a Operação é essencial para transformar desafios em oportunidades e construir uma reputação de excelência.
      </p>
    </section>
    
    <div class="cards-container">
      <div class="card">
        <h3>Dores</h3>
        <ul>
          <li>Processos operacionais ineficientes;</li>
          <li>Problemas com falta de produtos e equipamentos;</li>
          <li>Falta de cultura de melhoria contínua.</li>
          <li>Falta de qualidade na entrega dos serviços</li>
        </ul>
      </div>
      <div class="card-solucoes">
        <h3>Soluções</h3>
        <ul>
          <li>Mapeamento e otimização de processos;</li>
          <li>Automação de processos;</li>
          <li>Controle e Gestão e Estoques;</li>
          <li>Controle de Qualidade nos serviços prestados;</li>
          <li>Programas de melhoria contínua;</li>
          <li>Implantação de ERP e CRM.</li>
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
  name: 'OperacaoView',
  components: {
    NavegacaoBreadcrumbs,
  }
}
</script>

<style scoped lang="scss">
.operacao {
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
  .operacao {
    padding: 1rem;

    .cards-container {
      flex-direction: column;
    }
  }
}
</style>