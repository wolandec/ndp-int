export const routes = [
  { path: '/', component: () => import('../pages/BrastwarkListPage.vue'), name: 'BrastwarkList' },
  { path: '/brastwark/:id', component: () => import('../pages/BrastwarkPage.vue'), name: 'BrastwarkFullInfo' },
]
