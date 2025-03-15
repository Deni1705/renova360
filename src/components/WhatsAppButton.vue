<template>
    <a :href="whatsappLink" class="whatsapp-float"  rel="noopener noreferrer">
      <i class="fab fa-whatsapp"></i>
    </a>
  </template>
  
  <script>
  export default {
    name: 'WhatsAppButton',
    data() {
      return {
        whatsappLink: 'https://wa.me/5541992040360'
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .whatsapp-float {
    position: fixed !important;
    width: 60px !important;
    height: 60px !important;
    bottom: 40px !important;
    right: 40px !important;
    background-color: #60AA5F; // Atualizado para a cor verde da paleta
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 9999 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .whatsapp-float:hover {
    background-color: darken(#60AA5F, 10%); 
  }
  </style>