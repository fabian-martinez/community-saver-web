import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import authRouter from '../modules/auth/router'
import dashboardRouter from '../modules/dashboard/router'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    // se llama al router del componente daybook
    path: '/dashboard',
    beforeEnter: [ isAuthenticatedGuard ],
    ...dashboardRouter
  },
  {
    // se llama al router del componente daybook
    path: '/auth',
    ...authRouter 
  },
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
