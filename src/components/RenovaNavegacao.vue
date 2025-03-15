<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="logo">
        <img src="../assets/logo.png" alt="Renova360 Logo">
      </router-link>
    </div>
    <div class="navbar-menu">
      <router-link to="/" class="navbar-item"><strong>Home</strong></router-link>
      <router-link to="/sobre-nos" class="navbar-item"><strong>Sobre Nós</strong></router-link>
      <div class="navbar-item has-dropdown">
        <a class="navbar-link"><strong>Soluções</strong></a>
        <div class="navbar-dropdown">
          <router-link to="/solucoes/gestao-comercial" class="navbar-item">Gestão Comercial</router-link>
          <router-link to="/solucoes/gestao-de-pessoas" class="navbar-item">Gestão de Pessoas</router-link>
          <router-link to="/solucoes/gestao-estrategica" class="navbar-item">Gestão Estratégica</router-link>
          <router-link to="/solucoes/gestao-financeira" class="navbar-item">Gestão Financeira</router-link>
          <router-link to="/solucoes/marketing-e-comunicacao" class="navbar-item">Marketing e Comunicação</router-link>
          <router-link to="/solucoes/operacao" class="navbar-item">Operação</router-link>
          <router-link to="/solucoes/sustentabilidade-esg" class="navbar-item">Sustentabilidade e ESG</router-link>
        </div>
      </div>
      <router-link to="/eventos" class="navbar-item"><strong>Eventos</strong></router-link>
      <router-link to="/blog" class="navbar-item"><strong>Blog/Artigos</strong></router-link>
      <router-link to="/contato" class="navbar-item"><strong>Contato</strong></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'RenovaNavegacao'
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(47,105,153,0.1);
  height: 90px;

  .navbar-brand {
    .logo {
      display: inline-block;
    }

    .logo img {
      height: 100px;
      width: auto;
      transition: all 0.3s ease;
    }
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    height: 100%;

    .navbar-item {
      height: 100%;
      display: flex;
      align-items: center;
      color: #2F6999; // Mantido a cor original
      text-decoration: none;
      padding: 0 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: #D35F8E; // Mantido a cor original do hover
      }
    }

    .has-dropdown {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;

      &:hover .navbar-dropdown {
        display: block;
      }

      .navbar-link {
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
      }

      .navbar-dropdown {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #f8f9fa;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        z-index: 1000;

        .navbar-item {
          display: block;
          width: 100%;
          padding: 0.5rem 1rem;
          white-space: nowrap;

          &:hover {
            background-color: rgba(134, 103, 147, 0.1); // Cor do hover do dropdown atualizada
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 0.5rem 1rem;

    .navbar-brand {
      .logo img {
        height: 50px;
      }
    }

    .navbar-menu {
      flex-direction: column;
      width: 100%;
      align-items: flex-start;

      .navbar-item {
        width: 100%;
        padding: 0.5rem 0;
      }

      .has-dropdown {
        width: 100%;

        .navbar-dropdown {
          position: static;
          display: none;
          width: 100%;
        }

        &:hover .navbar-dropdown {
          display: block;
        }
      }
    }
  }
}
</style>