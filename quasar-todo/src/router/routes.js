
const routes = [
  {
    path: '/',
    // component: () => import('layouts/BlankLayout.vue'),
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth',
    // component: () => import('layouts/BlankLayout.vue'),
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/LoginPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
