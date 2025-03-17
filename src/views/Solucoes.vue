<template>
  <div class="solutions">
    <header>
      <title>Soluções de Consultoria e Treinamento - Renova360</title>
      <meta name="description" content="Descubra as soluções personalizadas da Renova360 em gestão comercial, financeira, estratégica, de pessoas, marketing, operações e sustentabilidade para o seu negócio.">
      <meta name="keywords" content="soluções, consultoria, treinamento, gestão comercial, gestão financeira, gestão estratégica, gestão de pessoas, marketing, operações, sustentabilidade, ESG">
    </header>
    <h1>Nossas Soluções</h1>
    <p class="solutions-intro">
      Oferecemos soluções em consultoria para empresas que desejam aprimorar sua gestão e alcançar resultados
      expressivos. Analisamos o mercado, identificamos oportunidades e implementamos estratégias personalizadas.
    </p>
    <div class="solutions-grid">
      <div v-for="solution in solutions" :key="solution.id" class="solution-card">
        <h2>{{ solution.title }}</h2>
        <p>{{ solution.description }}</p>
        <router-link :to="solution.link" class="learn-more">Saiba mais</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionsPage',
  data() {
    return {
      solutions: [
        {
          id: 1,
          title: 'Gestão Comercial',
          description: 'Otimize suas operações de vendas e relacionamento com clientes para impulsionar o crescimento.',
          link: '/solucoes/gestao-comercial'
        },
        {
          id: 2,
          title: 'Gestão de Pessoas',
          description: 'Desenvolva e gerencie talentos para criar uma cultura organizacional de alto desempenho.',
          link: '/solucoes/gestao-de-pessoas'
        },
        {
          id: 3,
          title: 'Gestão Estratégica',
          description: 'Alinhe sua visão de longo prazo com ações efetivas para garantir o sucesso sustentável.',
          link: '/solucoes/gestao-estrategica'
        },
        {
          id: 4,
          title: 'Gestão Financeira',
          description: 'Maximize seus resultados financeiros e tome decisões informadas para o sucesso do seu negócio.',
          link: '/solucoes/gestao-financeira'
        },
        {
          id: 5,
          title: 'Marketing e Comunicação',
          description: 'Estratégias inovadoras para fortalecer sua marca e ampliar seu alcance no mercado.',
          link: '/solucoes/marketing-e-comunicacao'
        },
        {
          id: 6,
          title: 'Operação',
          description: 'Otimize processos e aumente a eficiência operacional para melhorar a produtividade.',
          link: '/solucoes/operacao'
        },
        {
          id: 7,
          title: 'Sustentabilidade e ESG',
          description: 'Integre práticas sustentáveis e responsáveis ao seu negócio para um impacto positivo.',
          link: '/solucoes/sustentabilidade-esg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.solutions {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #2F6999; // Cor primária para o título principal
  }

  .solutions-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #2F6999; // Cor primária para o texto de introdução
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .solution-card {
    background-color: #ecf0f5;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #866793; // Cor secundária para títulos dos cards
    }

    p {
      margin-bottom: 1rem;
      color: #2F6999; // Cor primária para o texto dos cards
    }

    .learn-more {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #D35F8E; // Cor de destaque para botões
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
  .solutions {
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    .solutions-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>