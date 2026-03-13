<template>
  <div class="bpo-financeiro">
    <NavegacaoBreadcrumbs current-page="BPO Financeiro" />

    <section class="intro-bpo">
      <div class="intro-content-wrapper"> <!-- Novo wrapper para o conteúdo textual -->
        <h1>Conheça a Renova360</h1>
        <p class="subtitle-bpo">
          Consultoria e gestão estratégica focada em apoiar pequenas e médias empresas na organização financeira e crescimento sustentável.
        </p>
        <div class="intro-item">
            <h3>Nosso propósito</h3>
            <p>Transformar a forma como as empresas se relacionam com o financeiro, saindo do modo reativo para uma gestão consciente, organizada e estratégica.</p>
          </div>
          <div class="intro-item">
            <h3>Visão Integrada</h3>
            <p>Conectamos processos, números e estratégia para que o empresário tenha clareza, segurança e previsibilidade.</p>
          </div>
          <div class="intro-item">
            <h3>Parceria Estratégica</h3>
            <p>Mais do que executar rotinas, ajudamos empresas a enxergar o financeiro como ferramenta de crescimento.</p>
          </div>
      </div>
      <!-- floating-badge MOVIDO PARA FORA do intro-content-wrapper -->
      <div class="floating-badge">
        <div class="badge-text">360°</div>
        <div class="badge-subtext">Visão Integrada</div>
      </div>
    </section>

    <section class="o-que-e-bpo">
      <h2>O Que é BPO Financeiro?</h2>
      <h3>Terceirização Inteligente</h3>
      <p class="section-description">
        BPO Financeiro (Business Process Outsourcing) é a terceirização das rotinas financeiras da empresa, realizada por um time especializado. Na prática, a Renova360 atua como o financeiro do seu negócio.
      </p>
      <div class="bpo-servicos-grid">
        <div class="servico-item">
          <i class="fas fa-calculator"></i>
          <h3>Contas a pagar e receber</h3>
        </div>
        <div class="servico-item">
          <i class="fas fa-building"></i>
          <h3>Conciliação bancária</h3>
        </div>
        <div class="servico-item">
          <i class="fas fa-chart-bar"></i>
          <h3>Fluxo de caixa</h3>
        </div>
        <div class="servico-item">
          <i class="fas fa-file-alt"></i>
          <h3>Relatórios gerenciais</h3>
        </div>
        <div class="servico-item">
          <i class="fas fa-cogs"></i>
          <h3>Interface com contabilidade</h3>
        </div>
        <div class="servico-item">
          <i class="fas fa-users"></i>
          <h3>Reuniões de acompanhamento</h3>
        </div>
      </div>
    </section>

    <section class="desafios-pme">
      <h2>Você se identifica com esses desafios?</h2>
      <p class="section-description">
        Estes são os principais problemas que identificamos nas pequenas e médias empresas brasileiras.
      </p>
      <div class="desafios-grid">
        <div class="desafio-card">
          <i class="fas fa-exclamation-circle"></i>
          <h3>Falta de controle do caixa</h3>
          <p>Dificuldade em acompanhar entradas e saídas em tempo real</p>
        </div>
        <div class="desafio-card">
          <i class="fas fa-random"></i>
          <h3>Finanças misturadas</h3>
          <p>Mistura de finanças pessoais e empresariais</p>
        </div>
        <div class="desafio-card">
          <i class="fas fa-calculator"></i>
          <h3>Pagamentos no improviso</h3>
          <p>Falta de planejamento para compromissos financeiros</p>
        </div>
        <div class="desafio-card">
          <i class="fas fa-eye"></i>
          <h3>Visão irreal do lucro</h3>
          <p>Desconhecimento do resultado real do negócio</p>
        </div>
        <div class="desafio-card">
          <i class="fas fa-question-circle"></i>
          <h3>Dependência do contador</h3>
          <p>Dificuldade em entender os próprios números</p>
        </div>
        <div class="desafio-card">
          <i class="fas fa-heart"></i>
          <h3>Decisões no 'feeling'</h3>
          <p>Falta de dados para embasar decisões estratégicas</p>
        </div>
      </div>
    </section>

    <section class="como-ajudamos">
      <h2>Como a Renova360 Ajuda</h2>
      <p class="section-description">
        Oferecemos soluções completas para transformar a gestão financeira da sua empresa.
      </p>
      <div class="ajuda-grid">
        <div class="ajuda-card">
          <i class="fas fa-check-circle"></i>
          <h3>Organização das rotinas financeiras</h3>
          <p>Processos claros e bem definidos para o dia a dia</p>
        </div>
        <div class="ajuda-card">
          <i class="fas fa-file-invoice-dollar"></i>
          <h3>Controle de contas a pagar e receber</h3>
          <p>Visibilidade total dos compromissos financeiros</p>
        </div>
        <div class="ajuda-card">
          <i class="fas fa-chart-line"></i>
          <h3>Fluxo de caixa claro e atualizado</h3>
          <p>Acompanhamento em tempo real das movimentações</p>
        </div>
        <div class="ajuda-card">
          <i class="fas fa-file-alt"></i> 
          <h3>Relatórios simples e objetivos</h3>
          <p>Informações que fazem sentido para o negócio</p>
        </div>
        <div class="ajuda-card">
          <i class="fas fa-book-open"></i>
          <h3>Apoio na leitura dos números</h3>
          <p>Tradução dos dados financeiros em insights</p>
        </div>
        <div class="ajuda-card">
          <i class="fas fa-shield-alt"></i>
          <h3>Base segura para decisões</h3>
          <p>Fundamento sólido para escolhas estratégicas</p>
        </div>
      </div>
    </section>

    <section class="beneficios-bpo">
      <h2>O que você ganha com o BPO Financeiro</h2>
      <div class="beneficios-carousel-wrapper"> <!-- Novo wrapper para o carrossel -->
        <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3000" :breakpoints="carouselBreakpoints">
          <Slide v-for="(beneficio, index) in beneficios" :key="index">
            <div class="beneficio-card carousel-item">
              <i :class="beneficio.icon"></i>
              <h3>{{ beneficio.title }}</h3>
              <p>{{ beneficio.description }}</p>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </section>

    <section class="diferenciais">
      <h2>Nosso Diferencial</h2>
      <p class="section-description">
        Por que nos escolher para a gestão financeira da sua empresa.
      </p>
      <div class="diferenciais-list">
        <div class="diferencial-item">
          <i class="fas fa-eye"></i>
          <h3>Visão estratégica além da operação</h3>
        </div>
        <div class="diferencial-item">
          <i class="fas fa-comments"></i>
          <h3>Linguagem simples e acessível</h3>
        </div>
        <div class="diferencial-item">
          <i class="fas fa-handshake"></i>
          <h3>Atendimento próximo e consultivo</h3>
        </div>
        <div class="diferencial-item">
          <i class="fas fa-tasks"></i> 
          <h3>Processos claros e organizados</h3>
        </div>
        <div class="diferencial-item">
          <i class="fas fa-bullseye"></i>
          <h3>Foco em resultado, não só em tarefas</h3>
        </div>
      </div>
    </section>

    <section class="para-quem-e">
      <h2>A Renova360 é para empresas que:</h2>
      <div class="target-list">
        <div class="target-item">
          <i class="fas fa-check"></i>
          <span>Querem sair do improviso financeiro</span>
        </div>
        <div class="target-item">
          <i class="fas fa-check"></i>
          <span>Precisam de organização e controle</span>
        </div>
        <div class="target-item">
          <i class="fas fa-check"></i>
          <span>Desejam crescer com segurança</span>
        </div>
        <div class="target-item">
          <i class="fas fa-check"></i>
          <span>Buscam um parceiro financeiro estratégico</span>
        </div>
      </div>
    </section>

    <section class="processo-contratacao">
      <h2>Processo de Contratação</h2>
      <div class="processo-grid">
        <div class="processo-step">
          <div class="step-number">01</div>
          <i class="fas fa-clipboard-list"></i>
          <h3>Diagnóstico inicial</h3>
          <p>Análise completa da situação financeira atual</p>
        </div>
        <div class="processo-step">
          <div class="step-number">02</div>
          <i class="fas fa-bullseye"></i>
          <h3>Definição do plano</h3>
          <p>Escolha do plano ideal para suas necessidades</p>
        </div>
        <div class="processo-step">
          <div class="step-number">03</div>
          <i class="fas fa-cogs"></i>
          <h3>Implantação</h3>
          <p>Configuração dos controles e processos</p>
        </div>
        <div class="processo-step">
          <div class="step-number">04</div>
          <i class="fas fa-play-circle"></i>
          <h3>Execução contínua</h3>
          <p>Gestão diária do BPO Financeiro</p>
        </div>
        <div class="processo-step">
          <div class="step-number">05</div>
          <i class="fas fa-chart-line"></i>
          <h3>Acompanhamento</h3>
          <p>Evolução constante dos resultados</p>
        </div>
      </div>
    </section>

    <section class="planos-bpo">
      <h2>Escolha o plano ideal</h2>
      <p class="section-description">
        Oferecemos diferentes níveis de serviço para atender às necessidades específicas do seu negócio.
      </p>
      <div class="planos-grid">
        <div class="plano-card">
          <div class="plano-icon"><i class="fas fa-bolt"></i></div>
          <h3>Essencial</h3>
          <p class="plano-subtitle">Organização e Controle</p>
          <p class="plano-description">Ideal para empresas que precisam colocar o financeiro em ordem.</p>
          <ul class="plano-features">
            <li><i class="fas fa-check"></i> Rotinas financeiras operacionais</li>
            <li><i class="fas fa-check"></i> Fluxo de caixa mensal</li>
            <li><i class="fas fa-check"></i> Relatórios básicos</li>
            <li><i class="fas fa-check"></i> Suporte por email</li>
          </ul>
          <router-link to="/contato" class="cta-button-plano">Saiba Mais</router-link>
        </div>

        <div class="plano-card highlighted">
          <div class="plano-badge">Mais Popular</div>
          <div class="plano-icon"><i class="fas fa-star"></i></div>
          <h3>Gestão</h3>
          <p class="plano-subtitle">Controle + Análise</p>
          <p class="plano-description">Ideal para empresas que precisam melhorar decisões e resultados.</p>
          <ul class="plano-features">
            <li><i class="fas fa-check"></i> Tudo do Essencial</li>
            <li><i class="fas fa-check"></i> DRE gerencial</li>
            <li><i class="fas fa-check"></i> Projeções financeiras</li>
            <li><i class="fas fa-check"></i> Reunião mensal de análise</li>
            <li><i class="fas fa-check"></i> Suporte prioritário</li>
          </ul>
          <router-link to="/contato" class="cta-button-plano">Saiba Mais</router-link>
        </div>

        <div class="plano-card">
          <div class="plano-icon"><i class="fas fa-crown"></i></div>
          <h3>Estratégico</h3>
          <p class="plano-subtitle">Financeiro como Decisão</p>
          <p class="plano-description">Ideal para empresas em crescimento acelerado.</p>
          <ul class="plano-features">
            <li><i class="fas fa-check"></i> Tudo do Gestão</li>
            <li><i class="fas fa-check"></i> Planejamento financeiro</li>
            <li><i class="fas fa-check"></i> Apoio em precificação</li>
            <li><i class="fas fa-check"></i> Suporte para expansão</li>
            <li><i class="fas fa-check"></i> Reuniões estratégicas</li>
          </ul>
          <router-link to="/contato" class="cta-button-plano">Saiba Mais</router-link>
        </div>
      </div>
    </section>

    <div class="cta-section">
      <h2>Vamos conversar?</h2>
      <p>Vamos entender o seu negócio, identificar oportunidades de melhoria e estruturar um financeiro que apoie o crescimento da sua empresa.</p>
      <router-link to="/contato" class="cta-button">Fale Conosco</router-link>
    </div>
  </div>
</template>

<script>
import NavegacaoBreadcrumbs from '@/components/NavegacaoBreadcrumbs.vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'; // Import carousel components
import 'vue3-carousel/dist/carousel.css'; // Import carousel styles

export default {
  name: 'BPOFinanceiro',
  components: {
    NavegacaoBreadcrumbs,
    Carousel, // Registrar os componentes do carrossel
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      beneficios: [ // Dados para o carrossel de benefícios
        { icon: 'fas fa-lightbulb', title: 'Clareza financeira', description: 'Entenda exatamente onde está o dinheiro da sua empresa' },
        { icon: 'fas fa-shield-alt', title: 'Redução de riscos e erros', description: 'Processos estruturados que minimizam falhas' },
        { icon: 'fas fa-chart-line', title: 'Mais controle e previsibilidade', description: 'Antecipe cenários e planeje com segurança' },
        { icon: 'fas fa-database', title: 'Decisões baseadas em dados', description: 'Informações confiáveis para escolhas assertivas' },
        { icon: 'fas fa-rocket', title: 'Tempo para crescer', description: 'Foque no que realmente importa para seu negócio' },
      ],
      carouselBreakpoints: {
        // 0px e acima
        0: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // 768px e acima
        768: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        // 1024px e acima
        1024: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    };
  },
}
</script>

<style scoped lang="scss">
.bpo-financeiro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2F6999; // Cor primária para o texto geral

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #2F6999;
  }

  h2 {
    font-size: 2.2rem;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: #2F6999;
    border-bottom: 2px solid #60AA5F; // Linha verde para destacar
    padding-bottom: 0.5rem;
    display: inline-block; // Para a linha se ajustar ao texto
    width: auto;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .subtitle-bpo, .section-description {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #866793; // Cor secundária para descrições
  }

  // --- Intro BPO Section (com imagem de fundo e efeito marca d'água) ---
  .intro-bpo {
    position: relative; // Necessário para posicionar o pseudo-elemento ::before e o badge
    background-image: url('@/assets/hero-bg.jpg'); // Imagem de fundo
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 500px; // Garante que a imagem de fundo tenha espaço para aparecer
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem; // Padding para o conteúdo dentro da seção
    margin-bottom: 4rem;
    border-radius: 10px; // Borda arredondada para a seção

    &::before { // Pseudo-elemento para o efeito de marca d'água
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      // Gradiente branco com alta opacidade para clarear a imagem de fundo
      background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)); // 85% opaco
      z-index: 1; // Fica abaixo do conteúdo, mas acima da imagem de fundo
    }

    .intro-content-wrapper { // Wrapper para todo o conteúdo textual
      position: relative;
      z-index: 2; // Garante que o conteúdo esteja acima do overlay
      max-width: 900px; // Limita a largura do conteúdo
      margin: 0 auto; // Centraliza o wrapper
      background-color: rgba(255, 255, 255, 0.95); // Fundo quase opaco para o conteúdo, melhorando a legibilidade
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center; // Centraliza o texto dentro do wrapper
    }

    h1, .subtitle-bpo, .intro-text p { // Ajusta a cor do texto para ser legível no fundo claro
      color: #2F6999;
      text-shadow: none; // Remove qualquer sombra de texto que possa ter vindo de estilos globais
    }
    .subtitle-bpo {
      color: #866793; // Mantém a cor secundária para o subtítulo
    }

    .intro-text {
      h2 {
        text-align: center; // Centraliza o h2 dentro do intro-text
        font-size: 1.8rem;
        border-bottom: none; // Remove a borda inferior se houver
        padding-bottom: 0;
        margin-left: auto;
        margin-right: auto;
        max-width: 100%; // Garante que o h2 ocupe a largura total disponível
      }
      p {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
    }

    .floating-badge {
      position: absolute; // Posicionamento absoluto em relação ao .intro-bpo
      top: 1rem; // Ajuste a posição conforme necessário
      right: 1rem; // Ajuste a posição conforme necessário
      background-color: #D35F8E; // Cor de destaque
      color: white;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      z-index: 3; // Garante que o badge fique acima de tudo
      .badge-text {
        font-size: 1.8rem;
        font-weight: bold;
      }
      .badge-subtext {
        font-size: 0.8rem;
      }
    }
  }

  // --- O Que é BPO Section ---
  .o-que-e-bpo {
    margin-bottom: 4rem;
    .bpo-servicos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
      max-width: 900px; // Limita a largura do grid
      margin-left: auto;
      margin-right: auto; // Centraliza o grid

      @media (min-width: 769px) { // A partir de tablets, 3 colunas
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .servico-item {
      background-color: #ecf0f5; // Fundo claro para cards
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.12);
      }
      i {
        font-size: 2.5rem;
        color: #D35F8E; // Cor de destaque para ícones
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1.2rem;
        color: #2F6999;
        margin: 0;
      }
    }
  }

  // --- Desafios PME Section ---
  .desafios-pme {
    background-color: #2F6999; // Cor primária para o fundo
    color: white;
    padding: 3rem 2rem;
    border-radius: 10px;
    margin-bottom: 4rem;

    h2 {
      color: white;
      border-bottom-color: #60AA5F; // Cor verde para a linha
    }
    .section-description {
      color: rgba(255,255,255,0.8);
    }
    .desafios-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .desafio-card {
      background-color: rgba(255,255,255,0.1); // Fundo semi-transparente
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(255,255,255,0.2);
      }
      i {
        font-size: 2.5rem;
        color: #D35F8E; // Cor de destaque para ícones
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1.2rem;
        color: white;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.95rem;
        color: rgba(255,255,255,0.7);
      }
    }
  }

  // --- Como Ajudamos Section ---
  .como-ajudamos {
    margin-bottom: 4rem;
    .ajuda-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
      max-width: 900px; // Limita a largura do grid
      margin-left: auto;
      margin-right: auto; // Centraliza o grid

      @media (min-width: 769px) { // A partir de tablets, 3 colunas
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .ajuda-card {
      background-color: #ecf0f5;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.12);
      }
      i {
        font-size: 2.5rem;
        color: #60AA5F; // Cor verde para ícones
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1.2rem;
        color: #2F6999;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.95rem;
        color: #866793;
      }
    }
  }

  // --- Benefícios BPO Section (AGORA COM CARROSSEL) ---
  .beneficios-bpo {
    margin-bottom: 4rem;
    .beneficios-carousel-wrapper {
      max-width: 1000px; // Limita a largura do carrossel
      margin: 2rem auto; // Centraliza o carrossel
    }
    .beneficio-card.carousel-item {
      margin: 0 10px; // Espaçamento entre os itens do carrossel
      background-color: #edf4ed; // Fundo verde claro
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%; // Garante que todos os cards tenham a mesma altura no carrossel
      display: flex;
      flex-direction: column;
      justify-content: space-between; // Distribui o conteúdo verticalmente

      i {
        font-size: 2.5rem;
        color: #2F6999; // Cor primária para ícones
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1.2rem;
        color: #2F6999;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.95rem;
        color: #866793;
      }
    }

    // Estilos para o vue3-carousel
    .carousel__slide {
      padding: 5px;
    }
    .carousel__viewport {
      perspective: 2000px;
    }
    .carousel__track {
      transform-style: preserve-3d;
    }
    .carousel__slide--sliding {
      transition: 0.5s;
    }
    .carousel__slide--active ~ .carousel__slide {
      transform: rotateY(10deg) scale(0.9);
    }
    .carousel__slide--prev {
      opacity: 0.7;
      transform: rotateY(-10deg) scale(0.9);
    }
    .carousel__slide--next {
      opacity: 0.7;
      transform: rotateY(10deg) scale(0.9);
    }
    .carousel__slide--active {
      opacity: 1;
      transform: rotateY(0) scale(1.05); // Levemente maior para o slide ativo
    }

    // Navegação (setas)
    .carousel__prev, .carousel__next {
      box-sizing: content-box;
      background-color: #D35F8E; // Sua cor de destaque
      color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      transition: opacity 0.3s ease, background-color 0.3s ease;

      &:hover {
        opacity: 1;
        background-color: darken(#D35F8E, 10%);
      }
    }

    // Paginação (pontos)
    .carousel__pagination-button {
      background-color: #866793; // Sua cor secundária
      opacity: 0.5;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      transition: background-color 0.3s ease, opacity 0.3s ease;

      &::after { // O ponto real é um pseudo-elemento
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: transparent; // Esconde o ponto interno padrão
      }

      &.carousel__pagination-button--active {
        background-color: #2F6999; // Sua cor primária para o ponto ativo
        opacity: 1;
      }
    }
  }

  // --- Diferenciais Section ---
  .diferenciais {
    background-color: #f0f8ff; // Fundo azul claro
    padding: 3rem 2rem;
    border-radius: 10px;
    margin-bottom: 4rem;

    h2 {
      color: #2F6999;
      border-bottom-color: #D35F8E; // Cor de destaque para a linha
    }
    .section-description {
      color: #866793;
    }
    .diferenciais-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 700px;
      margin: 2rem auto 0;
    }
    .diferencial-item {
      background-color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.08);
      }
      i {
        font-size: 1.5rem;
        color: #D35F8E; // Cor de destaque para ícones
      }
      h3 {
        font-size: 1.1rem;
        color: #2F6999;
        margin: 0;
        text-align: left;
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }

  // --- Para Quem é Section ---
  .para-quem-e {
    background-color: #866793; // Cor secundária para o fundo
    color: white;
    padding: 3rem 2rem;
    border-radius: 10px;
    margin-bottom: 4rem;

    h2 {
      color: white;
      border-bottom-color: #60AA5F;
    }
    .target-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 600px;
      margin: 2rem auto 0;
    }
    .target-item {
      background-color: rgba(255,255,255,0.15);
      padding: 1rem 1.5rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.1rem;
      color: white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);

      i {
        color: #60AA5F; // Cor verde para o check
        font-size: 1.2rem;
      }
      span {
        font-weight: 500;
      }
    }
  }

  // --- Processo de Contratação Section ---
  .processo-contratacao {
    margin-bottom: 4rem;
    .processo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
      position: relative;
      padding-top: 2rem; // Espaço para a linha de conexão

      &::before {
        content: '';
        position: absolute;
        top: 3.5rem; // Ajustar para o meio dos ícones
        left: 10%;
        right: 10%;
        height: 2px;
        background-color: #D35F8E; // Cor de destaque para a linha
        z-index: 0;
        @media (max-width: 768px) {
          display: none; // Oculta a linha em telas pequenas
        }
      }
    }
    .processo-step {
      background-color: #ecf0f5;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      text-align: center;
      position: relative;
      z-index: 1; // Para ficar acima da linha
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.12);
      }
      .step-number {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2F6999; // Cor primária
        color: white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      }
      i {
        font-size: 2.5rem;
        color: #D35F8E;
        margin-top: 1rem;
        margin-bottom: 0.8rem;
      }
      h3 {
        font-size: 1.2rem;
        color: #2F6999;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.95rem;
        color: #866793;
      }
    }
  }

  // --- Planos BPO Section ---
  .planos-bpo {
    margin-bottom: 4rem;
    .planos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .plano-card {
      background-color: #ecf0f5;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &.highlighted {
        background: linear-gradient(135deg, #2F6999 0%, #866793 100%); // Gradiente da sua paleta
        color: white;
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        .plano-icon i {
          color: white;
        }
        h3, .plano-subtitle, .plano-description, .plano-features li {
          color: white;
        }
        .plano-features li i {
          color: #60AA5F; // Check verde
        }
        .cta-button-plano {
          background-color: white;
          color: #2F6999;
          &:hover {
            background-color: #eee;
          }
        }
      }

      &:hover:not(.highlighted) {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0,0,0,0.15);
      }

      .plano-badge {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #D35F8E; // Cor de destaque
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
      }
      .plano-icon {
        background-color: rgba(47, 105, 153, 0.1); // Fundo sutil para o ícone
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        i {
          font-size: 2rem;
          color: #2F6999; // Cor primária para ícones
        }
      }
      h3 {
        font-size: 1.8rem;
        color: #2F6999;
        margin-bottom: 0.5rem;
        border-bottom: none;
        padding-bottom: 0;
      }
      .plano-subtitle {
        font-size: 1rem;
        color: #D35F8E; // Cor de destaque
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .plano-description {
        font-size: 0.95rem;
        color: #866793;
        min-height: 40px; // Para alinhar cards com descrições de tamanhos diferentes
      }
      .plano-features {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        text-align: left;
        li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
          color: #2F6999;
          i {
            color: #60AA5F; // Cor verde para o check
            font-size: 1rem;
          }
        }
      }
      .cta-button-plano {
        display: inline-block;
        padding: 0.8rem 1.5rem;
        background-color: #2F6999; // Cor primária
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        font-weight: bold;

        &:hover {
          background-color: darken(#2F6999, 10%);
        }
      }
    }
  }

  // --- CTA Section ---
  .cta-section {
    background-color: #f0f8ff;
    padding: 2.5rem;
    border-radius: 10px;
    text-align: center;
    margin-top: 4rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);

    h2 {
      color: #866793;
      border-bottom: none;
      padding-bottom: 0;
      font-size: 2.5rem;
    }
    p {
      margin-bottom: 1.5rem;
      color: #2F6999;
      font-size: 1.1rem;
    }
    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #D35F8E;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease, transform 0.3s ease;
      font-size: 1.2rem;
      font-weight: bold;

      &:hover {
        background-color: darken(#D35F8E, 10%);
        transform: translateY(-3px);
      }
    }
  }

  // --- Responsive adjustments ---
  @media (max-width: 992px) {
    .intro-bpo {
      .floating-badge { // Ajusta o badge para telas menores
        top: auto;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        right: auto;
      }
    }
    .processo-contratacao .processo-grid::before {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.8rem; }
    .subtitle-bpo, .section-description { font-size: 1rem; }

    .o-que-e-bpo .bpo-servicos-grid,
    .desafios-pme .desafios-grid,
    .como-ajudamos .ajuda-grid,
    .beneficios-bpo .beneficios-carousel-wrapper 
    .planos-bpo .planos-grid,
    .processo-contratacao .processo-grid {
      grid-template-columns: 1fr;
    }

    .planos-bpo .plano-card.highlighted {
      transform: none; // Remove translateY em mobile
    }
    .cta-section h2 { font-size: 2rem; }
    .cta-section p { font-size: 1rem; }
    .cta-section .cta-button { font-size: 1rem; padding: 0.8rem 1.5rem; }
  }

  @media (max-width: 480px) {
    h1 { font-size: 1.8rem; }
    h2 { font-size: 1.5rem; }
  }
}
</style>