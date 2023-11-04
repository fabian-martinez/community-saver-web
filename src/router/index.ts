import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import loanRouter from '@/modules/loans/router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue')
  },
  {
    path: '/loans',
    ...loanRouter
  },
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
