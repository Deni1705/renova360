<template>
  <div class="renova-eventos">
    <header>
      <title>Eventos e Treinamentos - Renova360</title>
      <meta name="description" content="Participe dos eventos e treinamentos da Renova360. Aprimore suas habilidades em gestão, liderança e inovação para os setores de Saúde, Beleza e Bem Estar.">
      <meta name="keywords" content="eventos, treinamentos, workshops, palestras, gestão, liderança, inovação, saúde, beleza, bem estar">
    </header>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/"><strong>Home</strong></router-link></li>
        <li class="breadcrumb-item active" aria-current="page"><strong>Eventos</strong></li>
      </ol>
    </nav>

    <div class="title-container">
      <h1>Eventos</h1>
    </div>

    <div class="events-card">
      <div class="event-content" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="card-slide">
          <h2>Planejamento Estratégico Pessoal</h2>
          <p>Curso vivencial com ferramentas estratégicas de planejamento para ajudar você a planejar e realizar os seus sonhos.</p>
          <div class="events-content">
            <div class="event-item">
              <p><strong>Equipe Transformadora</strong></p>
              <img src="../assets/EquipeTransformadora1.png" alt="Equipe Transformadora" class="event-image">
            </div>
            <div class="event-item">
              <p><strong>Equipe Transfomadora</strong></p>
              <img src="../assets/EquipeTransformadora2.png" alt="Equipe Transformadora" class="event-image">
            </div>
            <div class="event-item">
              <p><strong>Atividades</strong></p>
              <img src="../assets/AtividadesPEP.png" alt="Atividades de Equipe" class="event-image">
            </div>
          </div>
        </div>
        <!-- Adicione mais slides aqui no futuro, se necessário -->
      </div>
      <div class="card-dots">
        <span 
          v-for="n in numberOfSlides" 
          :key="n" 
          :class="{'active': currentSlide === n-1}"
          @click="setSlide(n-1)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RenovaEventosView',
  data() {
    return {
      currentSlide: 0,
      numberOfSlides: 1 // Ajuste este número quando adicionar mais slides
    }
  },
  methods: {
    setSlide(index) {
      this.currentSlide = index;
    }
  }
}
</script>

<style scoped lang="scss">
.renova-eventos {
  padding: 20px;
  background-image: url('@/assets/Img_reuniao.jpg');
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

.breadcrumb {
  display: flex;
  list-style: none;
  padding: 10px 0;
  margin-bottom: 20px;
}

.breadcrumb-item {
  font-size: 14px;
}

.breadcrumb-item + .breadcrumb-item::before {
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

p {
  text-align: center;
}

h2 {
  color: #2F6999;
  margin-bottom: 15px;
  border-bottom: 2px solid #60AA5F;
  padding-bottom: 10px;
}

h3 {
  color: #866793;
  margin-top: 15px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 5px;
}

.events-card {
  max-width: 800px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
}

.event-content {
  display: flex;
  transition: transform 0.5s ease;
}

.event-image {
  width: 100%;
  height: auto;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.card-slide {
  flex: 0 0 100%;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}

.events-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.event-item {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
}

.card-dots {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.card-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-dots span.active {
  background-color: #60AA5F;
}

@media (max-width: 768px) {
  .event-item {
    flex-basis: 100%;
  }
}
</style>