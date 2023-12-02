import isReloadLoanPage from '@/router/redirectRoot'

export default {
    // todas las rutas de daybook se registran aca
    name: 'loans-manager',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/loans/layouts/loansManagerLayout.vue'),
     children: [
         {
            path: '',
            name: 'no-loans',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/loans/views/noLoansView.vue')
         },
         {
            path: ':id',
            name: 'loan',
            component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/loans/views/LoanView.vue'),
            props: ( router: { params: { id: string } } ) => {
               return { id: router.params.id } 
            },
            beforeEnter: [isReloadLoanPage]
         },
     ]
}