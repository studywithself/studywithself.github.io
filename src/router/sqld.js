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
    {
      path: 'attribute',
      name: 'attribute',
      component: () => import('@/components/sqld/sqldSection/SqldAttribute.vue'),
    },
    {
      path: 'tuple',
      name: 'tuple',
      component: () => import('@/components/sqld/sqldSection/SqldTuple.vue'),
    },
    {
      path: 'null',
      name: 'null',
      component: () => import('@/components/sqld/sqldSection/SqldNull.vue'),
    },
    {
      path: 'key',
      name: 'key',
      component: () => import('@/components/sqld/sqldSection/SqldKey.vue'),
    },
    {
      path: 'normalization',
      name: 'normalization',
      component: () => import('@/components/sqld/sqldSection/SqldNormalization.vue'),
    },
    {
      path: 'normalization2',
      name: 'normalization2',
      component: () => import('@/components/sqld/sqldSection/SqldNormalization2.vue'),
    },
    {
      path: 'schema',
      name: 'schema',
      component: () => import('@/components/sqld/sqldSection/SqldSchema.vue'),
    },
    {
      path: 'relationship',
      name: 'relationship',
      component: () => import('@/components/sqld/sqldSection/SqldRelationship.vue'),
    },
    {
      path: 'modeling',
      name: 'modeling',
      component: () => import('@/components/sqld/sqldSection/SqldModeling.vue'),
    },
    {
      path: 'erd',
      name: 'erd',
      component: () => import('@/components/sqld/sqldSection/SqldERD.vue'),
    },
    {
      path: 'transaction',
      name: 'transaction',
      component: () => import('@/components/sqld/sqldSection/SqldTransaction.vue'),
    },
  ],
}
