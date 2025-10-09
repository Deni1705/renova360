<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="logo">
        <img src="../assets/logo.png" alt="Renova360 Logo">
      </router-link>
      <div class="navbar-burger" @click="toggleMenu" :class="{ 'is-active': isMenuActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <router-link to="/" class="navbar-item" @click="closeMenu"><strong>Home</strong></router-link>
      <router-link to="/sobre-nos" class="navbar-item" @click="closeMenu"><strong>Sobre Nós</strong></router-link>
      <div class="navbar-item has-dropdown" @mouseover="showDropdown" @mouseout="hideDropdown">
        <a class="navbar-link" @click="toggleDropdown"><strong>Soluções</strong></a>
        <div class="navbar-dropdown" :class="{ 'is-active': isDropdownActive }">
          <router-link to="/solucoes/gestao-comercial" class="navbar-item" @click="closeMenu">Gestão Comercial</router-link>
          <router-link to="/solucoes/gestao-de-pessoas" class="navbar-item" @click="closeMenu">Gestão de Pessoas</router-link>
          <router-link to="/solucoes/gestao-estrategica" class="navbar-item" @click="closeMenu">Gestão Estratégica</router-link>
          <router-link to="/solucoes/gestao-financeira" class="navbar-item" @click="closeMenu">Gestão Financeira</router-link>
          <router-link to="/solucoes/marketing-e-comunicacao" class="navbar-item" @click="closeMenu">Marketing e Comunicação</router-link>
          <router-link to="/solucoes/operacao" class="navbar-item" @click="closeMenu">Operação</router-link>
          <router-link to="/solucoes/sustentabilidade-esg" class="navbar-item" @click="closeMenu">Sustentabilidade e ESG</router-link>
        </div>
      </div>
      <router-link to="/eventos" class="navbar-item" @click="closeMenu"><strong>Eventos</strong></router-link>
      <router-link to="/blog" class="navbar-item" @click="closeMenu"><strong>Blog/Artigos</strong></router-link>
      <router-link to="/contato" class="navbar-item" @click="closeMenu"><strong>Contato</strong></router-link>
      <router-link to="/parceiros" class="navbar-item" @click="closeMenu"><strong>Parceiros</strong></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'RenovaNavegacao',
  data() {
    return {
      isMenuActive: false,
      isDropdownActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      if (!this.isMenuActive) {
        this.isDropdownActive = false;
      }
    },
    toggleDropdown(event) {
      event.preventDefault();
      this.isDropdownActive = !this.isDropdownActive;
    },
    closeMenu() {
      this.isMenuActive = false;
      this.isDropdownActive = false;
    },
    showDropdown() {
      if (window.innerWidth > 1023) {
        this.isDropdownActive = true;
      }
    },
    hideDropdown() {
      if (window.innerWidth > 1023) {
        this.isDropdownActive = false;
      }
    }
  }
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .logo {
      display: inline-block;

      img {
        height: 80px;
        width: auto;
        transition: all 0.3s ease;
      }
    }

    .navbar-burger {
      display: none;
      cursor: pointer;
      height: 3.25rem;
      width: 3.25rem;
      position: relative;

      span {
        background-color: #2F6999;
        display: block;
        height: 1px;
        left: calc(50% - 8px);
        position: absolute;
        transform-origin: center;
        transition-duration: 0.2s;
        transition-property: background-color, opacity, transform;
        transition-timing-function: ease-out;
        width: 16px;

        &:nth-child(1) {
          top: calc(50% - 6px);
        }

        &:nth-child(2) {
          top: calc(50% - 1px);
        }

        &:nth-child(3) {
          top: calc(50% + 4px);
        }
      }

      &.is-active {
        span {
          &:nth-child(1) {
            transform: translateY(5px) rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            transform: translateY(-5px) rotate(-45deg);
          }
        }
      }
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
      color: #2F6999;
      text-decoration: none;
      padding: 0 1rem;
      transition: color 0.3s ease;
      white-space: nowrap;

      &:hover {
        color: #D35F8E;
      }
    }

    .has-dropdown {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;

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

        &.is-active {
          display: block;
        }

        .navbar-item {
          display: block;
          width: 100%;
          padding: 0.5rem 1rem;
          white-space: nowrap;

          &:hover {
            background-color: rgba(134, 103, 147, 0.1);
          }
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 0.5rem 1rem;

    .navbar-brand {
      .logo img {
        height: 60px;
      }

      .navbar-burger {
        display: block;
      }
    }

    .navbar-menu {
      display: none;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      padding-top: 1rem;

      &.is-active {
        display: flex;
      }

      .navbar-item {
        width: 100%;
        padding: 0.5rem 0;
      }

      .has-dropdown {
        width: 100%;

        .navbar-link {
          width: 100%;
          justify-content: space-between;

          &::after {
            content: '\25BC';
            font-size: 0.8em;
            margin-left: 0.5em;
          }
        }

        .navbar-dropdown {
          position: static;
          display: none;
          width: 100%;
          padding-left: 1rem;

          &.is-active {
            display: block;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .navbar {
    .navbar-menu {
      .has-dropdown {
        .navbar-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #f8f9fa;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 1000;

          &.is-active {
            display: block;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1215px) {
  .navbar {
    .navbar-menu {
      .navbar-item {
        padding: 0 0.5rem;
        font-size: 0.9rem;
      }
    }
  }
}
</style>