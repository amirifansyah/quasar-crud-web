
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'inputdatabuku', component: () => import('pages/admin/home/InputDataBuku.vue') },
      { path: 'transaksi', component: () => import('pages/admin/transaksi/DataTransaksi') }
    ]
  },
  {
    path: '/pembeli',
    meta: {
      auth: true
    },
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Pembeli/DataBuku/DataBuku.vue') },
      { path: 'transaksi', component: () => import('src/pages/Pembeli/Transaksi/DataTransaksi.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
