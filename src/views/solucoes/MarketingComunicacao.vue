<template>
  <div class="marketing-e-comunicacao"><!-- Este é um comentário HTML -->
    <NavegacaoBreadcrumbs current-page="Marketing e Comunicação" />
    
    <section class="intro">
      <h1>Marketing e Comunicação</h1>
      <p>
        A área Marketing e Comunicação é responsável por construir e fortalecer a relação entre a empresa e seu público, garantindo que a marca seja reconhecida, valorizada e preferida pelos consumidores.
      </p>
      <p>
        Ela envolve desde a criação de estratégias para atrair e engajar clientes até a gestão da imagem da empresa no mercado.
      </p>
      <p>No segmento de saúde, beleza e bem-estar, essa área é ainda mais relevante, pois lida diretamente com um público que busca não apenas produtos e serviços, mas também experiências e soluções que promovam seu bem-estar.
      </p>
    </section>

    <section class="benefits">
      <h2>Importância do Marketing e Comunicação</h2>
      <p>
        É o coração da conexão entre a empresa e seu público no segmento de saúde, beleza e bem-estar.
      </p>
      <p>
        Com estratégias criativas, análises de mercado e uma comunicação eficiente, essa área garante que a marca seja reconhecida, valorizada e preferida pelos consumidores.
      </p>
    </section>

    <section class="conclusion">
      <p>  
        Em um mercado tão dinâmico e competitivo, o Marketing e Comunicação é essencial para transformar desafios em oportunidades e construir relacionamentos duradouros com os clientes.
      </p>
    </section>
    
    <div class="cards-container">
      <div class="card">
        <h3>Dores</h3>
        <ul>
          <li>Dificuldade em se destacar no mercado;</li>
          <li>Falta de estratégias digitais eficazes;</li>
          <li>Desconhecimento do perfil e comportamento do consumidor.</li>
        </ul>
      </div>
      <div class="card-solucoes">
        <h3>Soluções</h3>
        <ul>
          <li>Criação de estratégias de branding e posicionamento;</li>
          <li>Campanhas digitais personalizadas para engajar o público-alvo;</li>
          <li>Uso de análise de dados para tomar decisões baseadas em evidências;</li>
          <li>Criação de Sites profissionais para o seu negócio</li>
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
  name: 'MarketingComunicacao',
  components: {
    NavegacaoBreadcrumbs,
  }
}
</script>

<style scoped lang="scss">
.marketing-e-comunicacao {
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
  .marketing-e-comunicacao {
    padding: 1rem;

    .cards-container {
      flex-direction: column;
    }
  }
}
</style>