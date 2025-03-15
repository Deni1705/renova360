import { createRouter, createWebHistory } from 'vue-router'
import RenovaBlog from '@/views/RenovaBlog.vue'

const routes = [
  {
    path: '/',
    name: 'RenovaHome',
    component: () => import('@/views/RenovaHome.vue')
  },
  {
    path: '/sobre-nos',
    name: 'RenovaSobreNos',
    component: () => import('@/views/RenovaSobreNos.vue')
  },
  {
    path: '/eventos',
    name: 'RenovaEventosView',
    component: () => import('@/views/RenovaEventosView.vue')
  },
  {
    path: '/blog',
    name: 'RenovaBlog',
    component: RenovaBlog
  },
  {
    path: '/contato',
    name: 'RenovaContato',
    component: () => import('@/views/RenovaContato.vue')
  },
  {
    path: '/solucoes',
    name: 'Solucoes',
    component: () => import('@/views/Solucoes.vue')
  },
  {
    path: '/solucoes/marketing-e-comunicacao',
    name: 'MarketingComunicacao',
    component: () => import('@/views/solucoes/MarketingComunicacao.vue')
  },
  {
    path: '/solucoes/gestao-comercial',
    name: 'GestaoComercial',
    component: () => import('@/views/solucoes/GestaoComercial.vue')
  },
  {
    path: '/solucoes/gestao-financeira',
    name: 'GestaoFinanceira',
    component: () => import('@/views/solucoes/GestaoFinanceira.vue')
  },
  {
    path: '/solucoes/gestao-de-pessoas',
    name: 'GestaoDePessoas',
    component: () => import('@/views/solucoes/GestaoDePessoas.vue')
  },
  {
    path: '/solucoes/gestao-estrategica',
    name: 'GestaoEstrategica',
    component: () => import('@/views/solucoes/GestaoEstrategica.vue')
  },
  {
    path: '/solucoes/operacao',
    name: 'OperacaoView',
    component: () => import('@/views/solucoes/OperacaoView.vue')
  },
  {
    path: '/solucoes/sustentabilidade-esg',
    name: 'SustentabilidadeESG',
    component: () => import('@/views/solucoes/SustentabilidadeESG.vue')
  },
  {
    path: '/termos-de-uso',
    name: 'TermosDeUso',
    component: () => import('@/components/RenovaTermosDeUso.vue')
  },
  {
    path: '/politica-de-privacidade',
    name: 'PoliticaPrivacidade',
    component: () => import('@/components/RenovaPoliticaPrivacidade.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router