<template>
  <div class="sustentabilidade-esg"><!-- Este é um comentário HTML -->
    <NavegacaoBreadcrumbs current-page="Sustentabilidade e ESG" />
    
    <section class="intro">
      <h1>Sustentabilidade e ESG</h1>
      <p>
        A área de Sustentabilidade e ESG (Environmental Social Governance) é responsável por integrar práticas ambientais, sociais e de governança corporativa nas operações de uma empresa.
      </p>
      <p>
        Seu objetivo é garantir que o negócio opere de forma responsável, ética e sustentável, gerando impacto positivo para o meio ambiente, a sociedade e os stakeholders.
      </p>
    </section>

    <section class="benefits">
      <h2>Importância da Sustentabilidade e ESG</h2>
      <p>
        É essencial para empresas que desejam operar de forma responsável e sustentável. Com foco em práticas ambientais, sociais e de governança, essa área garante que a empresa não apenas cumpra suas obrigações, mas também gere impacto positivo para o meio ambiente, a sociedade e seus stakeholders. 
      </p>
    </section>

    <section class="conclusion">
      <p>  
        A Sustentabilidade e ESG são pilares fundamentais para construir uma marca forte, ética e alinhada com as demandas do futuro.
      </p>
    </section>
    
    <div class="cards-container">
      <div class="card">
        <h3>Dores</h3>
        <ul>
          <li>Falta de processos e procedimentos padronizados;</li>
          <li>Falta de cumprimento de normas e regulamentações da área;</li>
          <li>Falta de práticas sustentáveis.</li>
          <li>Falta de propósito vinculado ao ambiente e responsabilidade social</li>
        </ul>
      </div>
      <div class="card-solucoes">
        <h3>Soluções</h3>
        <ul>
          <li>Processo de Governança;</li>
          <li>Implementação de práticas sustentáveis;</li>
          <li>Implementar cultura ESG;</li>
          <li>Criação Marca Sustentável;</li>
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
  name: 'SustentabilidadeESG',
  components: {
    NavegacaoBreadcrumbs,
  }
}
</script>

<style scoped lang="scss">
.sustentabilidade-esg {
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
  .sustentabilidade_esg {
    padding: 1rem;

    .cards-container {
      flex-direction: column;
    }
  }
}
</style>