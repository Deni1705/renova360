<template>
  <div class="renova-eventos">
    <!-- Breadcrumb e título -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/"><strong>Home</strong></router-link></li>
        <li class="breadcrumb-item active" aria-current="page"><strong>Eventos</strong></li>
      </ol>
    </nav>

    <div class="title-container">
      <h1>Eventos</h1>
    </div>

    <!-- Seção de eventos com navegação melhorada -->
    <div class="events-section">
      <div class="events-content" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <!-- Slide 1: Planejamento Estratégico Pessoal -->
        <div class="card-slide">
          <h2>Planejamento Estratégico Pessoal</h2>
          <p>Curso vivencial com ferramentas estratégicas de planejamento para ajudar você a planejar e realizar os seus sonhos.</p>
          <div class="events-grid">
            <div class="event-item">
              <p><strong>Equipe Transformadora</strong></p>
              <div class="image-wrapper">
                <img src="../assets/EquipeTransformadora1.png" alt="Equipe Transformadora" class="event-image">
              </div>
            </div>
            <div class="event-item">
              <p><strong>Equipe Transfomadora</strong></p>
              <div class="image-wrapper">
                <img src="../assets/EquipeTransformadora2.png" alt="Equipe Transformadora" class="event-image">
              </div>
            </div>
            <div class="event-item">
              <p><strong>Atividades</strong></p>
              <div class="image-wrapper">
                <img src="../assets/AtividadesPEP.png" alt="Atividades de Equipe" class="event-image">
              </div>
            </div>
          </div>
        </div>

        <!--
        Slide 2: Workshops (comentado até que haja eventos para divulgar)
        <div class="card-slide">
          <h2>Workshops</h2>
          <p>Workshops práticos para desenvolvimento de habilidades específicas.</p>
          <div class="events-grid">
            <div class="event-item">
              <p><strong>Gestão Estratégica</strong></p>
              <div class="placeholder-image">
                <span>Imagem do Workshop de Gestão Estratégica</span>
              </div>
            </div>
            <div class="event-item">
              <p><strong>Liderança</strong></p>
              <div class="placeholder-image">
                <span>Imagem do Workshop de Liderança</span>
              </div>
            </div>
            <div class="event-item">
              <p><strong>Marketing Digital</strong></p>
              <div class="placeholder-image">
                <span>Imagem do Workshop de Marketing Digital</span>
              </div>
            </div>
          </div>
        </div>
        -->

        <!--
        Slide 3: Palestras (comentado até que haja eventos para divulgar)
        <div class="card-slide">
          <h2>Palestras</h2>
          <p>Palestras inspiradoras com especialistas do setor.</p>
          <div class="events-grid">
            <div class="event-item">
              <p><strong>Inovação em Saúde</strong></p>
              <div class="placeholder-image">
                <span>Imagem da Palestra sobre Inovação em Saúde</span>
              </div>
            </div>
            <div class="event-item">
              <p><strong>Tendências em Beleza</strong></p>
              <div class="placeholder-image">
                <span>Imagem da Palestra sobre Tendências em Beleza</span>
              </div>
            </div>
            <div class="event-item">
              <p><strong>Bem-Estar Corporativo</strong></p>
              <div class="placeholder-image">
                <span>Imagem da Palestra sobre Bem-Estar Corporativo</span>
              </div>
            </div>
          </div>
        </div>
        -->
      </div>

      <!-- Navegação aprimorada -->
      <div class="navigation-controls">
        <button class="nav-arrow prev" @click="prevSlide" :disabled="currentSlide === 0" aria-label="Slide anterior">
          <span class="arrow-icon">←</span>
          <span class="sr-only">Anterior</span>
        </button>

        <div class="nav-indicators">
          <div v-for="(label, index) in slideLabels" :key="index"
            :class="['indicator', { 'active': currentSlide === index }]" @click="goToSlide(index)">
            <span class="indicator-label">{{ label }}</span>
          </div>
        </div>

        <button class="nav-arrow next" @click="nextSlide" :disabled="currentSlide === slideLabels.length - 1"
          aria-label="Próximo slide">
          <span class="arrow-icon">→</span>
          <span class="sr-only">Próximo</span>
        </button>
      </div>
    </div>

    <!-- Seção de depoimentos em vídeo -->
    <div class="video-testimonial-section">
      <h2>Depoimentos em Vídeo</h2>
      <div class="video-grid">
        <div v-for="(video, index) in videoTestimonials" :key="index" class="video-item">
          <div class="video-wrapper">
            <div class="video-container">
              <video controls :src="video.url" class="testimonial-video" preload="metadata"></video>
            </div>
          </div>
          <div class="video-info">
            <h4>{{ video.name }}</h4>
            <p>{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de depoimentos escritos -->
    <div class="written-testimonial-section">
      <h2>Experiências Transformadoras</h2>
      <div class="testimonials-container">
        <div v-for="(testimonial, index) in writtenTestimonials" :key="index" class="testimonial-item">
          <div class="testimonial-image">
            <img src="../assets/Dra_Karol.jpeg" alt="Doutora Karol" class="testimonial-photo">
          </div>
          <div class="testimonial-content">
            <div class="quote-icon">
              "
            </div>
            <div class="testimonial-text-container">
              <p class="testimonial-text">{{ testimonial.text }}</p>
            </div>
            <div class="testimonial-author">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de parceiros -->
    <div class="partners-section">
      <h2>Parceiros</h2>
      <div class="partners-grid">
        <a
          v-for="partner in partners"
          :key="partner.name"
          :href="partner.url"
          
          rel="noopener"
          class="partner-logo-link"
          :aria-label="`Acessar site do parceiro ${partner.name}`"
        >
          <img :src="partner.logo" :alt="`Logo do parceiro ${partner.name}`" class="partner-logo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RenovaEventos',
  data() {
    return {
      currentSlide: 0,
      slideLabels: ['Planejamento Estratégico'],
      videoTestimonials: [
        {
          name: 'Luciane Dalagnoli',
          description: 'Gerente Logística',
          url: '/videos/Depoimento_Luciane.mp4'
        },
        {
          name: 'Karla Comachio',
          description: '2. Analista Pós Venda e Customer Service',
          url: '/videos/Depoimentos_SemNome.mp4'
        }
      ],
      writtenTestimonials: [
        {
          name: 'Dra. Karolina Takeshita',
          role: 'Cirurgiã Dentista',
          text: 'Sou cirurgiã-dentista graduada pela PUC-PR. Em 2019, meu consultório enfrentava problemas de gestão quando a Cleia Goulart me ajudou a organizá-los de forma assertiva. Com sua orientação, pude expandir meus serviços e alavancar meu consultório. Sou grata por ela me ajudar a descobrir meu propósito e alcançar sucesso profissional.'
        },
      ],
      partners: [
        {
          name: "Essenza Você",
          url: "https://essenzavoce.com.br/",
          logo: require("../assets/Parceiro1.png"),
        },
        {
          name: "BeSociall",
          url: "https://besociall.com.br/",
          logo: require("../assets/Parceiro2.png"),
        },
        {
          name: "Kommo",
          url: "https://www.kommo.com/",
          logo: require("../assets/badge_dark.png"),
        },
      ]
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.slideLabels.length - 1) {
        this.currentSlide++;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
}
</script>

<style scoped lang="scss">
.renova-eventos {
  padding: 20px;
  background-image: url('../assets/Img_reuniao.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}

.title-container {
  background: linear-gradient(135deg, rgba(47, 105, 153, 0.2) 0%, rgba(134, 103, 147, 0.2) 100%);
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #ffffff;
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  font-weight: bold;
}

h2 {
  color: #2F6999;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
}

.breadcrumb {
  display: flex;
  list-style: none;
  padding: 10px 0;
  margin-bottom: 20px;
}

.breadcrumb-item {
  font-size: 14px;
}

.breadcrumb-item+.breadcrumb-item::before {
  content: ">";
  padding: 0 5px;
}

.breadcrumb-item a {
  text-decoration: none;
  color: #2F6999;
}

.breadcrumb-item.active {
  color: #866793;
}

/* Estilos para a seção de eventos */
.events-section {
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.events-content {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.card-slide {
  flex: 0 0 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;

  h2 {
    color: #2F6999;
    margin-bottom: 12px;
    text-align: center;
    font-size: 1.6rem;
  }

  p {
    color: #2F6999;
    text-align: center;
    margin-bottom: 15px;
    font-size: 0.95rem;
  }
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  width: 100%;
}

.event-item {
  text-align: center;
  width: 100%;

  p {
    margin-bottom: 8px;
    font-size: 0.9rem;
  }
}

/* Wrapper para imagens para garantir que fiquem contidas */
.image-wrapper {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Placeholders para imagens */
.placeholder-image {
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.85rem;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}

/* Estilos para a navegação aprimorada */
.navigation-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.nav-arrow {
  background-color: #D35F8E;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(#D35F8E, 10%);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .arrow-icon {
    font-size: 1rem;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.nav-indicators {
  display: flex;
  margin: 0 10px;

  .indicator {
    padding: 6px 12px;
    margin: 0 4px;
    background-color: #ecf0f5;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background-color: #2F6999;

      .indicator-label {
        color: white;
      }
    }

    &:hover:not(.active) {
      background-color: darken(#ecf0f5, 10%);
    }

    .indicator-label {
      font-size: 0.85rem;
      color: #2F6999;
      font-weight: 500;
    }
  }
}

/* Estilos para a seção de depoimentos em vídeo */
.video-testimonial-section {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.video-item {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.video-wrapper {
  padding: 15px 15px 0 15px;
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Proporção 16:9 */
  overflow: hidden;
  border-radius: 8px;
  background-color: #000;
  margin-bottom: 12px;
}

.testimonial-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.video-info {
  padding: 0 15px 15px 15px;
  
  h4 {
    color: #866793;
    margin-bottom: 4px;
    font-size: 1rem;
  }

  p {
    color: #2F6999;
    font-size: 0.85rem;
    margin-bottom: 0;
  }
}

/* Estilos para a seção de depoimentos escritos */
.written-testimonial-section {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
}

.testimonials-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.testimonial-item {
  display: flex;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: auto;
  min-height: 150px;
  max-height: 250px;

  &:hover {
    transform: translateY(-5px);
  }
}

.testimonial-image {
  flex: 0 0 150px;
  min-width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
}

.testimonial-photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.testimonial-content {
  flex: 1;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.quote-icon {
  color: #D35F8E;
  font-size: 1.8rem;
  margin-bottom: 8px;
  line-height: 1;
}

.testimonial-text-container {
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding-right: 5px;
}

.testimonial-text {
  color: #2F6999;
  font-style: italic;
  line-height: 1.4;
  font-size: 0.9rem;
  margin: 0;
}

.testimonial-author {
  margin-top: auto;
  
  h4 {
    color: #866793;
    margin-bottom: 3px;
    font-size: 0.95rem;
  }

  p {
    color: #60AA5F;
    font-size: 0.85rem;
    margin: 0;
  }
}

/* Seção de parceiros */
.partners-section {
  background: rgba(255,255,255,0.9);
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.08);
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.partners-section h2 {
  color: #2F6999;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.partners-grid {
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.partner-logo-link {
  display: inline-block;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 8px;
}

.partner-logo-link:hover,
.partner-logo-link:focus {
  transform: scale(1.07);
  box-shadow: 0 2px 8px rgba(47, 105, 153, 0.15);
  background: #f5faff;
}

.partner-logo {
  height: 60px;
  width: auto;
  max-width: 150px;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
  .partners-grid {
    flex-direction: column;
    gap: 24px;
  }
  .testimonial-item {
    flex-direction: column;
    height: auto;
  }
  .testimonial-image {
    height: 150px;
    min-width: 100%;
    width: 100%;
  }
  .testimonial-photo {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .testimonial-content {
    padding: 15px;
    max-height: 200px;
  }
  .nav-indicators {
    .indicator {
      padding: 5px 8px;
      .indicator-label {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
