

const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    name:'home',
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/contrato_colectivos', component: () => import('pages/C_Colectivo.vue') },
      { path: '/contrato_trabajadores', component: () => import('pages/C_Trabajador.vue') }
    ]
  },
  {
    path:'/',
    component : ()=> import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/P_Login.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }

]

export default routes
