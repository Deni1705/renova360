<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Links Rápidos</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/sobre-nos">Sobre Nós</router-link></li>
          <li><router-link to="/solucoes">Soluções</router-link></li>
          <li><router-link to="/eventos">Eventos</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/contato">Contato</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contato</h3>
        <p>Telefone: (41) 99204-0360</p>
        <h3>E-mail</h3>
        <ul>
          <li><a href="mailto:atendimento@renova360.com.br">atendimento@renova360.com.br</a></li>
          <li><a href="mailto:renova360@renova360.com.br">renova360@renova360.com.br</a></li>
        </ul>  
      </div>
      <div class="footer-section">
        <h3>Redes Sociais</h3>  
        <div class="social-links">
          <a href="https://www.linkedin.com/company/renova360-desenvolvimento-estrat%C3%A9gico/?viewAsMember=true"  rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/share/1BUZ5f2F36/?mibextid=wwXIfr"  rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/renova360consultoria"  rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 RENOVA360 - Todos os direitos reservados.</p>
      <p>
        <router-link to="/politica-de-privacidade">Política de Privacidade</router-link> | 
        <router-link to="/termos-de-uso">Termos de Uso</router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'RenovaRodape'
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
  color: #2F6999; // Atualizado para a cor primária

  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-section {
    margin-bottom: 1rem;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #866793; // Cor secundária para títulos
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
      }
    }

    a {
      color: #2F6999; // Cor primária para links
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #D35F8E; // Cor de destaque para hover
      }
    }
  }

  .social-links {
    a {
      margin-right: 10px;
      color: #866793; // Cor secundária para ícones sociais

      &:hover {
        color: #D35F8E; // Cor de destaque para hover
      }
    }
    .separator {
      color: #ccc;
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;

    p {
      margin: 0.5rem 0;
    }

    a {
      color: #2F6999; // Cor primária para links
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #D35F8E; // Cor de destaque para hover
      }
    }
  }
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>