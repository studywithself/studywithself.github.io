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
      component: () => import('@/components/sqld/sqldSection/database.vue'),
    },
    {
      path: 'datamodeling',
      name: 'datamodeling',
      component: () => import('@/components/sqld/sqldSection/datamodeling.vue'),
    },
    {
      path: 'schema',
      name: 'schema',
      component: () => import('@/components/sqld/sqldSection/schema.vue'),
    },
  ],
}
