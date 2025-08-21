export default {
  path: '/sqld',
  component: () => import('@/components/sqld/sqldHome.vue'),
  children: [
    // 1과목
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
    // 2과목
    {
      path: 'relation',
      name: 'relation',
      component: () => import('@/components/sqld/sqldSection2/SqldRelation.vue'),
    },
    {
      path: 'integrity',
      name: 'integrity',
      component: () => import('@/components/sqld/sqldSection2/SqldIntegrity.vue'),
    },
    {
      path: 'sql',
      name: 'sql',
      component: () => import('@/components/sqld/sqldSection2/SqldSQL.vue'),
    },
    {
      path: 'select',
      name: 'select',
      component: () => import('@/components/sqld/sqldSection2/SqldSelect.vue'),
    },
    {
      path: 'alias',
      name: 'alias',
      component: () => import('@/components/sqld/sqldSection2/SqldAlias.vue'),
    },
    {
      path: 'from',
      name: 'from',
      component: () => import('@/components/sqld/sqldSection2/SqldFrom.vue'),
    },
    {
      path: 'function',
      name: 'function',
      component: () => import('@/components/sqld/sqldSection2/SqldFunction.vue'),
    },
    {
      path: 'where',
      name: 'where',
      component: () => import('@/components/sqld/sqldSection2/SqldWhere.vue'),
    },
    {
      path: 'groupby',
      name: 'groupby',
      component: () => import('@/components/sqld/sqldSection2/SqldGroupby.vue'),
    },
    {
      path: 'having',
      name: 'having',
      component: () => import('@/components/sqld/sqldSection2/SqldHaving.vue'),
    },
    {
      path: 'orderby',
      name: 'orderby',
      component: () => import('@/components/sqld/sqldSection2/SqldOrderby.vue'),
    },
    {
      path: 'join',
      name: 'join',
      component: () => import('@/components/sqld/sqldSection2/SqldJoin.vue'),
    },
  ],
}
