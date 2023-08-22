import authApi from "@/api/authApi"
import { ActionContext } from "vuex"
import { RootState, State, User } from "./types"
import axios from "axios"

export const registerUser = async (context:ActionContext<State,RootState>, user:User) => {
    const {name, email, password } = user
    
    try {
        const { data: { idToken, refreshToken } } = await authApi.post(':signUp',  { email, password, returnSecureToken: true })
        await authApi.post(':update', {idToken, displayName:name}) 
        
        context.commit('loginUser', { user, idToken, refreshToken  })
        
        return { ok: true } 
    } catch (error) {
        let errorResponse = {
            ok:false,
            message:'No axios Error'
        }
        if(axios.isAxiosError(error)){
            errorResponse={
                ok:false,
                message:error.message
            }
        }
        return errorResponse
    }

}
export const signInUser = async (context: ActionContext<State,RootState>, user:User) => {
    const { email, password } = user
    
    try {
        const { data: { idToken, refreshToken, displayName } } = await authApi.post(':signInWithPassword',  { email, password, returnSecureToken: true })
        
        user.name = displayName

        context.commit('loginUser', { user, idToken, refreshToken  })
        
        return { ok: true } 
    } catch (error) {
        let errorResponse = {
            ok:false,
            message:'No axios Error'
        }
        if(axios.isAxiosError(error)){
            errorResponse={
                ok:false,
                message:error.message
            }
        }
        return errorResponse
    }

}

export const checkAuthentication = async (context: ActionContext<State,RootState>) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken) {
        context.commit('logout')
        return {ok: false, message:'Token no existe'}
    }

    try {
        const { data } = await authApi.post(':lookup',  { idToken })
        const { email, displayName } = data.users[0]

        const user = {
            name: displayName,
            email
        }
        
        context.commit('loginUser', { user, idToken, refreshToken })
        return { ok: true }
        
    } catch (error) {
        context.commit('logout')
        let errorResponse = {
            ok:false,
            message:'No axios Error'
        }
        if(axios.isAxiosError(error)){
            errorResponse={
                ok:false,
                message:error.message
            }
        }
        return errorResponse
    }
}