const htmlRoutes = [
  {
    path: 'html',
    name: 'learning-html',
    component: () => import('@/components/html/Html.vue'),
    redirect: '/learning/html/2',
    children: [
      {
        path: '2',
        name: 'learning-html-2',
        component: () => import('@/components/html/Html2.vue'),
      },
      {
        path: '3',
        name: 'learning-html-3',
        component: () => import('@/components/html/Html3.vue'),
      },
    ],
  },
]

export default htmlRoutes
