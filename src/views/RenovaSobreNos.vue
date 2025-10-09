<template>
  <div class="renova-sobre-nos">
    <header>
      <title>Sobre Nós - Renova360 | Consultoria e Treinamento Especializado</title>
      <meta name="description" content="Conheça a Renova360: nossa história, missão, visão e valores. Especialistas em consultoria e treinamento para os setores de Saúde, Beleza e Bem Estar.">
      <meta name="keywords" content="Renova360, sobre nós, consultoria, treinamento, saúde, beleza, bem estar, missão, visão, valores">
    </header>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/"><strong>Home</strong></router-link></li>
        <li class="breadcrumb-item active" aria-current="page"><strong>Sobre Nós</strong></li>
      </ol>
    </nav>

    <div class="title-container">
      <h1>Sobre Nós</h1>
    </div>

    <div class="sobre-nos-card">
      <div class="card-content" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="card-slide">
          <h2>Nossa História</h2>
          <p>Fundada em Curitiba, nossa missão é transformar desafios em resultados através de soluções inovadoras em Consultoria e Treinamento. Contamos com uma equipe multidisciplinar, especializada nas áreas comercial, financeira, estratégica, gestão de pessoas, marketing e operação, sempre focada na excelência e na adaptação às necessidades do pequeno e micro empresário.</p>
        </div>
        <div class="card-slide">
          <h2>Missão, Visão e Valores</h2>
          <div class="mvv-content">
            <div class="mvv-item">
              <h3>Missão</h3>
              <p>Ser o seu melhor parceiro estratégico para capacitação e desenvolvimento do seu time. Construir soluções personalizadas para a sua empresa, promovendo excelência operacional, crescimento sustentável e inovação tecnológica em um mercado em constante transformação.</p>
            </div>
            <div class="mvv-item">
              <h3>Visão</h3>
              <p>Ser referência nacional em consultoria e inovação, contribuindo para a evolução do pequeno e micro empresário.</p>
            </div>
            <div class="mvv-item">
              <h3>Valores</h3>
              <ul>
                <li>Inovação</li>
                <li>Excelência</li>
                <li>Ética</li>
                <li>Comprometimento</li>
                <li>Humanização</li>
                <li>Identidade</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-slide">
          <h2>Nossa Equipe</h2>
          <div class="team-members">
            <div class="team-member">
              <img src="../assets/foto_Cleia0810.jpg" alt="Lucia Cleia Goulart Marques" class="team-photo">
              <div class="team-info">
                <h3>LUCIA CLEIA GOULART MARQUES</h3>
                <p>Administradora especializada em gestão de projetos, gestão de pessoas e estratégia empresarial. Fundadora da Renova360, ela alia visão estratégica e 
                  liderança exemplar para impulsionar projetos que promovem crescimento sustentável e inovação. Sua habilidade em coordenar equipes e desenvolver soluções 
                  eficazes posiciona a Renova360 como uma referência no mercado. Comprometida com a excelência e a transformação organizacional, é movida pela paixão em criar 
                  resultados que fazem a diferença.</p>
              </div>
            </div>
            <div class="team-member">
              <img src="../assets/foto_Jessica0810.jpg" alt="Jessica Bernart" class="team-photo">
              <div class="team-info">
                <h3>JESSICA BERNART</h3>
                <p>Administradora especializada em gestão de clínicas de estética e Social Media Manager. Com uma visão estratégica e uma combinação rara de habilidades 
                  administrativas e expertise em marketing digital, ela desenvolve soluções integradas que impulsionam tanto a eficiência operacional quanto a presença digital. 
                  Seu trabalho se traduz em maior visibilidade, engajamento e fidelização de clientes, sempre com compromisso com a excelência e inovação.</p>
              </div>
            </div>
            <div class="team-member">
              <img src="../assets/foto3.jpeg" alt="Waldenize Rodrigues" class="team-photo">
              <div class="team-info">
                <h3>WALDENIZE RODRIGUES</h3>
                <p>Administradora, coach pessoal e profissional, especialista em Programação Neurolinguística e desenvolvimento de grupos, além de psicóloga em formação. 
                  Com uma abordagem integrativa e focada no desenvolvimento humano, ela combina habilidades em gestão e técnicas avançadas de coaching para promover transformação 
                  pessoal e coletiva. Sua expertise permite alinhar objetivos individuais e organizacionais, sempre com foco no bem-estar, na excelência e em resultados impactantes. 
                  Dedicada à evolução contínua, é uma profissional movida pela paixão em inspirar e transformar vidas.</p>
              </div>
            </div>
            <div class="team-member">
              <img src="../assets/foto_henrique0810.png" alt="Luiz Henrique Goulart Filho" class="team-photo">
              <div class="team-info">
                <h3>LUIZ HENRIQUE GOULART FILHO</h3>
                <p>Engenheiro Agrônomo com especialização em Inteligência Artificial, Arquiteto em formação e talentoso desenhista de caricaturas. Sua combinação única de 
                  conhecimento técnico, criatividade artística e abordagem interdisciplinar se traduz em soluções inovadoras e versáteis para projetos complexos. Um profissional 
                  comprometido com a excelência, capaz de alinhar precisão científica à sensibilidade estética, enriquecendo nossa equipe e contribuindo para o desenvolvimento de 
                  ideias fora do comum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-dots">
        <span 
          v-for="n in 3" 
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
  name: 'RenovaSobreNos',
  data() {
    return {
      currentSlide: 0
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
.renova-sobre-nos {
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

.sobre-nos-card {
  max-width: 800px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
}

.card-content {
  display: flex;
  transition: transform 0.5s ease;
}

.card-slide {
  flex: 0 0 100%;
  padding: 30px;
  box-sizing: border-box;
}

.mvv-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.mvv-item {
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

.team-members {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.team-member {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.team-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.team-info {
  flex: 1;
}

.team-info h3 {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .mvv-item {
    flex-basis: 100%;
  }

  .team-member {
    flex-direction: column;
    text-align: center;
  }

  .team-photo {
    margin-bottom: 1rem;
  }
}
</style>