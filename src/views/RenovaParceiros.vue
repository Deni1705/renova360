<template>
    <div class="parceiros">
      <!-- Breadcrumb e título -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/"><strong>Home</strong></router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <strong>Parceiros</strong>
          </li>
        </ol>
      </nav>
  
      <div class="title-container">
        <h1>Nossos Parceiros</h1>
      </div>
  
      <!-- Seção de parceiros -->
      <div class="partners-section">
        <h2>Conheça nossos parceiros estratégicos</h2>
        <p class="partners-description">
          Trabalhamos em conjunto com empresas que compartilham nossos valores e 
          compromisso com a excelência e transformação.
        </p>
        
        <div class="partners-grid">
          <a
            v-for="partner in partners"
            :key="partner.name"
            :href="partner.url"
            
            rel="noopener noreferrer"
            class="partner-logo-link"
            :aria-label="`Acessar site do parceiro ${partner.name}`"
            @click="trackPartnerClick(partner.name)"
          >
            <div class="partner-card">
              <img 
                :src="partner.logo" 
                :alt="`Logo do parceiro ${partner.name}`" 
                class="partner-logo" 
              />
              <div class="partner-overlay">
                <span class="partner-name">{{ partner.name }}</span>
                <span class="visit-text">Visitar site</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RenovaParceiros',
    data() {
      return {
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
      trackPartnerClick(partnerName) {
        // Método para rastrear cliques nos parceiros (opcional)
        console.log(`Clique no parceiro: ${partnerName}`);
        // Aqui você pode adicionar analytics se necessário
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .parceiros {
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
    margin-bottom: 1rem;
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
  
  /* Seção de parceiros */
  .partners-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
  
  .partners-description {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
  
  .partner-logo-link {
    display: block;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 12px;
  }
  
  .partner-card {
    position: relative;
    background: #ffffff;
    border-radius: 12px;
    padding: 30px 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    overflow: hidden;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .partner-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(47, 105, 153, 0.15);
  }
  
  .partner-logo {
    height: 80px;
    width: auto;
    max-width: 200px;
    object-fit: contain;
    transition: transform 0.3s ease;
    margin-bottom: 15px;
  }
  
  .partner-overlay {
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
  }
  
  .partner-card:hover .partner-overlay {
    opacity: 1;
  }
  
  .partner-card:hover .partner-logo {
    transform: scale(1.05);
  }
  
  .partner-name {
    display: block;
    color: #2F6999;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  .visit-text {
    display: block;
    color: #866793;
    font-size: 0.9rem;
    font-style: italic;
  }
  
  /* Estilos responsivos */
  @media (max-width: 768px) {
    .parceiros {
      padding: 15px;
    }
  
    .partners-section {
      padding: 25px 20px;
    }
  
    .partners-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  
    .partner-card {
      padding: 25px 15px;
      min-height: 120px;
    }
  
    .partner-logo {
      height: 60px;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    .partners-description {
      font-size: 1rem;
      margin-bottom: 30px;
    }
  }
  
  @media (max-width: 480px) {
    .title-container {
      padding: 15px;
    }
  
    .partners-section {
      padding: 20px 15px;
    }
  
    .partner-card {
      padding: 20px 10px;
    }
  
    .partner-logo {
      height: 50px;
    }
  }
  </style>
  