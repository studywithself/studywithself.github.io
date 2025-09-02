import { createRouter, createWebHashHistory } from 'vue-router'
import learningRoutes from './learning/learning.js'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/Home.vue'),
    },
    learningRoutes,
    {
      path: '/stack',
      name: 'stack',
      component: () => import('@/view/Stack.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/view/Projects.vue'),
    },
  ],
})

export default router
