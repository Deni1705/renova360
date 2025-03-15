<template>
    <nav class="navegacao-breadcrumbs">
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <router-link to="/solucoes">Solucoes</router-link>
      <span class="separator">/</span>
      <span class="current">{{ currentPage }}</span>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavegacaoBreadcrumbs',
    props: {
      currentPage: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .navegacao-breadcrumbs {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  
    a {
      color: #007bff;
      text-decoration: none;
  
      &:hover {
        text-decoration: underline;
      }
    }
  
    .separator {
      margin: 0 0.5rem;
      color: #6c757d;
    }
  
    .current {
      color: #6c757d;
    }
  }
  </style>