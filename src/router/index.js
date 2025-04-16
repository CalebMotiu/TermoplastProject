import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import Balustrade from '../pages/BalustradePage.vue'
import ProdusBalustrada from '../pages/ProdusBalustrada.vue'
import FerestrePage from '../pages/FerestrePage.vue'
import ProdusFereastra from '../pages/ProdusFereastra.vue'
import RoletePage from '../pages/RoletePage.vue'
import ProdusRoleta from '../pages/ProdusRoleta.vue'
import UsiPage from '../pages/UsiPage.vue'
import ProdusUsi from '../pages/ProdusUsi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produse',
      name: 'produse',
      component: ProductsPage,
    },
    {
      path: '/servicii',
      name: 'servicii',
      component: ServicesPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/balustrade',
      name: 'balustrade',
      component: Balustrade,
    },
    {
      path: '/balustrada',
      name: 'balustrada',
      component: ProdusBalustrada,
    },
    {
      path: '/ferestre',
      name: 'ferestre',
      component: FerestrePage,
    }, 
    {
      path: '/fereastra',
      name: 'fereastra',
      component: ProdusFereastra,
    },
    {
      path: '/rolete',
      name: 'rolete',
      component: RoletePage,
    },
    {
      path: '/roleta',
      name: 'roleta',
      component: ProdusRoleta,
    },
    {
      path: '/usi',
      name: 'usi',
      component: UsiPage,
    },  
    {
      path: '/usa',
      name: 'usa',
      component: ProdusUsi,
    },    
  ],
})

export default router
