<template>
  <div class="gestao-comercial">
    <NavegacaoBreadcrumbs current-page="Gestão Comercial" />
    
    <section class="intro">
      <h1>Gestão Comercial</h1>
      <p>
        Em qualquer segmento, os consumidores estão cada vez mais exigentes, buscando não apenas produtos e serviços de qualidade, mas também experiências memoráveis e soluções que promovam seu bem-estar integral. 
      </p>
      <p>
        A Gestão Comercial atua como uma ponte entre a empresa e o cliente, garantindo que as estratégias de vendas estejam alinhadas com as expectativas do mercado e os valores da empresa.    
      </p>
    </section>

    <section class="benefits">
      <h2>Importância da Gestão Comercial</h2>
      <p>
        Além disso, em um setor marcado pela alta competitividade e pela constante inovação, a Gestão Comercial é essencial para:
      </p>
      <ul>
        <li>Aumentar a receita por meio de estratégias de vendas eficazes;</li>
        <li>Fidelizar clientes com um atendimento diferenciado e programas de relacionamento;</li>
        <li>Antecipar tendências e adaptar-se rapidamente às mudanças do mercado.</li>
      </ul>
    </section>

    <section class="conclusion">
      <p>  
        A Gestão Comercial é o coração das operações de vendas e relacionamento com clientes. Com foco em estratégias eficientes, atendimento de excelência e inovação constante, essa área garante que a empresa não apenas atinja suas metas comerciais, mas também construa uma relação de confiança e valor com seus clientes.
      </p>
    </section>
    
    <div class="cards-container">
      <div class="card">
        <h3>Dores</h3>
        <ul>
          <li>Dificuldade em fechar vendas e converter leads;</li>
          <li>Atendimento ao cliente pouco personalizado ou estratégico;</li>
          <li>Negociações pouco eficientes com fornecedores ou parceiros.</li>
        </ul>
      </div>
      <div class="card-solucoes">
        <h3>Soluções</h3>
        <ul>
          <li>Treinamento de equipes de vendas para abordar as dores específicas dos clientes;</li>
          <li>Desenvolvimento de scripts de atendimento e técnicas de upselling/cross-selling;</li>
          <li>Desenvolvimento de novos parceiros;</li>
          <li>Plano estratégico de vendas;</li>
          <li>Análise de Mercado (SWOT);</li>
          <li>Metodologia de vendas com fluxo definido e automatizado.</li>
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
  name: 'GestaoComercial',
  components: {
    NavegacaoBreadcrumbs,
  }
}
</script>

<style scoped lang="scss">
.gestao-comercial {
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
  .gestao-comercial {
    padding: 1rem;

    .cards-container {
      flex-direction: column;
    }
  }
}
</style>