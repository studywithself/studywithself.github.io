import htmlRoutes from './html.js'

const learningRoutes = {
  path: '/learning',
  name: 'learning',
  component: () => import('@/view/Learning.vue'),
  redirect: '/learning/html',
  children: [
    ...htmlRoutes,
    {
      path: 'css',
      name: 'learning-css',
      component: () => import('@/components/test/Test.vue'),
    },
  ],
}

export default learningRoutes
