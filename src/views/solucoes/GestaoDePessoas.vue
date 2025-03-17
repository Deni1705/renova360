<template>
  <div class="gestao-pessoas">
    <NavegacaoBreadcrumbs current-page="Gestão Pessoas" />
    
    <section class="intro">
      <h1>Gestão de Pessoas</h1>
      <p>
        A Gestão de Pessoas é o pilar que sustenta o capital humano de uma empresa do segmento de saúde, beleza e bem-estar.
      </p>
      <p>
        Com foco no desenvolvimento, engajamento e bem-estar dos colaboradores, essa área garante que a empresa entregue experiências excepcionais aos clientes e se mantenha competitiva no mercado.     
      </p>
      <p>
        Em um setor onde o atendimento personalizado e a expertise são diferenciais, a Gestão de Pessoas é essencial para transformar talentos em resultados.
      </p>
    </section>

    <section class="benefits">
      <h2>Importância da Gestão de Pessoas</h2>
      <p>
        E a área responsável por cuidar do capital humano de uma empresa, garantindo que os colaboradores estejam engajados, capacitados e alinhados com os objetivos organizacionais.
      </p>
      <p>
        Seu papel vai além da administração de folha de pagamento e benefícios; ela envolve a criação de um ambiente de trabalho positivo, o desenvolvimento de talentos e a promoção de uma cultura organizacional forte.
      </p>
      <p>
        No segmento de saúde, beleza e bem-estar, a Gestão de Pessoas é ainda mais crucial, pois o sucesso da empresa depende diretamente da:
      </p>
      <ul>
        <li>Qualidade do atendimento ao cliente;</li>
        <li>Expertise dos profissionais; e</li>
        <li>Do clima organizacional.</li>
      </ul>
    </section>

    <section class="conclusion">
      <p>  
        Afinal, colaboradores motivados e bem preparados são essenciais para entregar experiências memoráveis e resultados excepcionais.
      </p>
    </section>
    
    <div class="cards-container">
      <div class="card">
        <h3>Dores</h3>
        <ul>
          <li>Falta de liderança eficaz e engajamento da equipe;</li>
          <li>Comunicação ineficiente entre departamentos;</li>
          <li>Clima organizacional desfavorável, impactando a produtividade.</li>
          <li>Equipe despreparada para atender o cliente</li>
        </ul>
      </div>
      <div class="card-solucoes">
        <h3>Soluções</h3>
        <ul>
          <li>Programas de desenvolvimento de liderança e soft skills;</li>
          <li>Treinamentos em comunicação assertiva e feedback;</li>
          <li>Pesquisa de clima organizacional com plano de ação estruturado para melhorar o resultado;</li>
          <li>Eventos corporativos personalizados com temas de acordo com a necessidade da empresa;</li>
          <li>Cursos e Workshops: Conteúdo prático e aplicado, com foco na resolução de problemas reais;</li>
          <li>Palestras e Seminários: Atualizações e tendências do mercado, apresentadas por especialistas.</li>
          <li>Coaching e Mentoria: Desenvolvimento individual e de equipes para aprimoramento de competências</li>
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
  name: 'GestaoDePessoas',
  components: {
    NavegacaoBreadcrumbs,
  }
}
</script>

<style scoped lang="scss">
.gestao-pessoas {
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
  .gestao-pessoas {
    padding: 1rem;

    .cards-container {
      flex-direction: column;
    }
  }
}
</style>