export default {
    // todas las rjutas de daybook se registran aca
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/dashboard/layouts/DashboardLayout.vue'),
     children: [
      {
         path: '',
         name: 'dashboard-home',
         component: () => import(/* webpackChunkName: "login" */ '@/modules/dashboard/views/DashboardView.vue')
      }
     ]
}