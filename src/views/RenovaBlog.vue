<template>
  <div class="renova-blog">
    <header>
      <title>Blog Renova360 - Insights e Tendências em Gestão e Inovação</title>
      <meta name="description" content="Explore artigos, dicas e análises sobre gestão, inovação e tendências nos setores de Saúde, Beleza e Bem Estar no blog da Renova360.">
      <meta name="keywords" content="blog, artigos, gestão, inovação, tendências, saúde, beleza, bem estar, consultoria, treinamento">
    </header>
    <h1 class="blog-title">
      Renova<span class="accent">360</span> Insights
    </h1>
    
    <!-- Lista de Posts -->
    <div class="blog-posts">
      <article v-for="post in posts" :key="post.id" class="blog-post">
        <img :src="post.imageUrl" :alt="post.title" class="post-image">
        <div class="post-content">
          <span class="post-category">{{ post.category }}</span>
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-date">{{ formatDate(post.date) }}</p>
          <div class="post-full-content" v-html="post.content"></div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import imgAcordo from '../assets/img_acordo.jpg';

export default {
  name: 'RenovaBlog',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Revolucionando o Mercado: Inovação em Consultoria Empresarial para Saúde e Beleza',
          content: `<p>No dinâmico universo da saúde e beleza, a inovação não é apenas uma opção – é uma necessidade.</p>

          <p>As empresas que buscam se destacar nesse mercado altamente competitivo estão descobrindo um poderoso aliado: a consultoria empresarial inovadora.
          Imagine transformar seu negócio com estratégias que não apenas acompanham, mas antecipam as tendências do setor. É exatamente isso que as consultorias 
          de ponta estão oferecendo hoje. Utilizando análise de dados avançada e inteligência artificial, essas consultorias estão capacitando clínicas, spas e salões 
          a entenderem profundamente o comportamento do consumidor moderno.</p>

          <p>Mas a verdadeira revolução está na personalização. As novas abordagens de consultoria permitem que cada negócio desenvolva uma identidade única, 
          alinhada com as expectativas de seus clientes. Desde a criação de experiências imersivas em realidade aumentada para visualização de tratamentos, 
          até a implementação de sistemas de gestão que otimizam cada aspecto da operação.</p>

          <p>A sustentabilidade também ganha destaque. Consultorias inovadoras estão ajudando empresas a adotarem práticas eco-friendly, não apenas por responsabilidade 
          ambiental, mas como um poderoso diferencial de mercado. Produtos naturais, embalagens biodegradáveis e processos de baixo impacto ambiental são agora parte 
          integral das estratégias de negócio.</p>

          <p>E quanto ao futuro? As consultorias mais avançadas já estão preparando seus clientes para a próxima onda de inovações. Wearables que monitoram a saúde da pele, 
          tratamentos personalizados baseados em DNA, e plataformas de telemedicina estética são apenas algumas das tendências que estão moldando o amanhã do setor.</p>

          <p>Em um mundo onde a beleza e o bem-estar são cada vez mais valorizados, a consultoria empresarial inovadora não é apenas um serviço – é o catalisador que 
          impulsiona negócios do comum ao extraordinário. Está pronto para elevar seu empreendimento a novos patamares de sucesso?</p>
          
          Lucia Cleia Goulart Marques - Idealizadora e Fundadora da Renova360`,

          imageUrl: imgAcordo,
          date: new Date().toISOString().split('T')[0],
          category: 'Consultoria'
        },
        // Adicione mais posts aqui
      ]
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR')
    }
  }
}
</script>

<style scoped lang="scss">
.renova-blog {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;

  .blog-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 300;
    color: #2F6999;

    .accent {
      font-weight: 700;
      color: #D35F8E;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #D35F8E;
      }
    }
  }

  .blog-posts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .blog-post {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .post-image {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }

    .post-content {
      padding: 1rem;
    }

    .post-category {
      display: inline-block;
      background-color: #e9ecef;
      color: #866793;
      padding: 0.25rem 0.5rem;
      border-radius: 15px;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }

    .post-title {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: #2F6999;
    }

    .post-date {
      color: #6c757d;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .post-full-content {
      color: #495057;
      line-height: 1.6;

      p {
        margin-bottom: 1rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .blog-posts {
    grid-template-columns: 1fr;
  }
}
</style>