import { createRouter, createWebHashHistory } from 'vue-router'
import sqldRoutes from './sqld.js'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue'),
    },
    sqldRoutes,
  ],
})

export default router
