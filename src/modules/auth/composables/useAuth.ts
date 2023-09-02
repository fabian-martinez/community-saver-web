import { computed } from "vue"
import { useStore } from "vuex"
import { User } from "../store/auth/types"

const useAuth = () => {
    
    const store = useStore()

    const registerUser = async( user:User ) => {
        
        const resp = await store.dispatch('auth/registerUser', user)
        return resp
    }
    
    const signInUser = async( userToLogin:{email:string,password:string} ) => {
        
        const resp = await store.dispatch('auth/signInUser', userToLogin)
        return resp
    }
    
    const checkAuthentication = async( ) => {
        
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = async( ) => {
        store.commit('auth/logout')
        store.commit('journal/cleareEntries')
    }
    
    
    return{
        checkAuthentication,
        registerUser,
        signInUser, 
        logout,

        authStatus: computed(() => store.getters['auth/currentState']),
        username: computed(() => store.getters['auth/username']),
    }
}

export default useAuth