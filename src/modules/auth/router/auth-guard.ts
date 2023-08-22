import store from "@/store"
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

 const isAuthenticatedGuard = async(to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext ) => {

    const { ok } = await store.dispatch('auth/checkAuthentication') 
    
    if(ok) next()
    else next({ name:'login'})
  }

  export default isAuthenticatedGuard