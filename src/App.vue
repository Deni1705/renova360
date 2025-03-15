<template>
  <div id="app">
    <RenovaNavegacao />
    <router-view></router-view>
    <RenovaRodape />
    <WhatsAppButton />
  </div>
</template>

<script>
import RenovaNavegacao from './components/RenovaNavegacao.vue';
import RenovaRodape from './components/RenovaRodape.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';

export default {
  name: 'App',
  components: {
    RenovaNavegacao,
    RenovaRodape,
    WhatsAppButton
  }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';

#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2F6999; // Atualizado para a cor primária
}
</style>
