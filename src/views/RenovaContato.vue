<template>
  <div class="contato-page">
    <h1>Entre em Contato</h1>
    <div class="contact-content">
      <div class="contact-form">
        <h2>Envie-nos uma mensagem</h2>
        <form @submit.prevent="submitForm" action="https://formspree.io/f/mrbpzawq" method="POST">
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" v-model="form.email" required @blur="validateEmail">
            <span class="error-message" v-if="emailError">{{ emailError }}</span>
          </div>
          <div class="form-group">
            <label for="phone">Telefone (com DDD)</label>
            <input type="tel" id="phone" name="phone" v-model="form.phone" @input="maskPhone"
              placeholder="(00) 00000-0000">
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea id="message" name="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting || !isFormValid">
            {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
          </button>
        </form>
      </div>
      <div class="contact-info">
        <h2>Informações de Contato</h2>
        <p><i class="fas fa-map-marker-alt"></i> Curitiba, Paraná</p>
        <p><i class="fas fa-phone"></i> (41) 99204-0360</p>
        <p><a href="mailto:atendimento@renova360.com.br"><i class="fas fa-envelope"></i>atendimento@renova360.com.br</a>
        </p>
        <p><a href="mailto:renova360@renova360.com.br"><i class="fas fa-envelope"></i>renova360@renova360.com.br</a></p>
        <div class="social-links">
          <a href="https://www.linkedin.com/company/renova360-desenvolvimento-estrat%C3%A9gico/?viewAsMember=true"
            rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/share/1BUZ5f2F36/?mibextid=wwXIfr" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/renova360consultoria" rel="noopener noreferrer"><i
              class="fab fa-instagram"></i></a>
        </div>
        <a :href="whatsappLink" class="whatsapp-btn" rel="noopener noreferrer">
          <i class="fab fa-whatsapp"></i> Fale conosco no WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RenovaContato',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      whatsappLink: 'https://wa.me/5541992040360',
      isSubmitting: false,
      emailError: ''
    }
  },
  computed: {
    isFormValid() {
      return this.form.name && this.form.email && !this.emailError && this.form.message;
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        this.emailError = 'Por favor, insira um e-mail válido.';
      } else {
        this.emailError = '';
      }
    },
    maskPhone(event) {
      let value = event.target.value.replace(/\D/g, '');

      if (value.length > 11) {
        value = value.slice(0, 11);
      }

      let maskedValue = '';
      if (value.length > 0) {
        maskedValue += `(${value.slice(0, 2)}`;
      }
      if (value.length > 2) {
        maskedValue += `) ${value.slice(2, 7)}`;
      }
      if (value.length > 7) {
        maskedValue += `-${value.slice(7, 11)}`;
      }

      this.form.phone = maskedValue;
    },
    async submitForm() {
      if (!this.isFormValid) return;

      this.isSubmitting = true;
      try {
        const response = await fetch('https://formspree.io/f/mrbpzawq', {
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          alert('Mensagem enviada com sucesso!');
          this.form = { name: '', email: '', phone: '', message: '' };
        } else {
          throw new Error('Falha ao enviar o formulário');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contato-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #2F6999; // Cor primária para o título
  }

  .contact-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .contact-form,
  .contact-info {
    flex-basis: 48%;
  }

  .form-group {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2F6999; // Cor primária para labels
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #866793; // Cor secundária para bordas
      border-radius: 4px;
    }

    input[type="tel"] {
      font-family: monospace; // Ajuda a alinhar os caracteres da máscara
    }

    textarea {
      height: 150px;
    }
  }

  .submit-btn,
  .whatsapp-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #D35F8E; // Cor de destaque para botões
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken(#D35F8E, 10%);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .whatsapp-btn {
    background-color: #60AA5F; // Cor verde para WhatsApp
    margin-top: 1rem;

    &:hover {
      background-color: darken(#60AA5F, 10%);
    }
  }

  .social-links {
    margin-top: 1rem;

    a {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: #866793; // Cor secundária para ícones sociais

      &:hover {
        color: #D35F8E; // Cor de destaque para hover
      }
    }
  }

  .error-message {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
  }

  .form-group input.invalid,
  .form-group textarea.invalid {
    border-color: #dc3545;
  }

  a[href^="mailto:"] {
    color: inherit;
    /* Mantém a cor do texto original */
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  a[href^="mailto:"]:hover {
    text-decoration: underline;
  }

  a[href^="mailto:"] i {
    margin-right: 5px;
    /* Adiciona um pequeno espaço entre o ícone e o texto */
  }
}

@media (max-width: 768px) {

  .contact-form,
  .contact-info {
    flex-basis: 100%;
  }
}
</style>