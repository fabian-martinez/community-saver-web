import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import loanRouter from '@/modules/loans/router'
import authRouter from '@/modules/auth/router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
    children:[
      {
        path: '/loans',
        ...loanRouter
      },    
    ]
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
