export default {
  path: '/sqld',
  component: () => import('@/components/sqld/sqldHome.vue'),
  children: [
    {
      path: '',
      redirect: '/sqld/overview',
    },
    {
      path: 'overview',
      name: 'SqldOverview',
      component: () => import('@/components/sqld/sqldSection/SqldOverview.vue'),
    },
    {
      path: 'database',
      name: 'database',
      component: () => import('@/components/sqld/sqldSection/SqldDatabase.vue'),
    },
    {
      path: 'entity',
      name: 'entity',
      component: () => import('@/components/sqld/sqldSection/SqldEntity.vue'),
    },
  ],
}
