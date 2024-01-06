import {auth} from "@/api/authApi";
import { ActionTree, Commit } from "vuex";
import User from "@/modules/auth/interfaces/UserInterface"; // Ajusta la ruta según la ubicación real de tus tipos
import { RootState } from "@/store";
import Session from "../../interfaces/SessionInterface";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const actions: ActionTree<Session, RootState> = {
  async registerUser ({ commit }: { commit: Commit }, user: User) {
    const { name, email, secret } = user;
    try {
      if(!name || !email || !secret){
        return {
          ok: false,
          message: 'Invalid Parameter'
        };
      }
      const {user:userSigned}  = await createUserWithEmailAndPassword(auth,email,secret);
      await updateProfile(userSigned,{displayName:name})
      const token = await userSigned.getIdToken()
      
      commit('loginUser', { 
          user:{name:userSigned.displayName,email:userSigned.email},
          token:token,
          refreshToken:userSigned.refreshToken
      });
      return { ok: true };
    } catch (error) {
      if (error instanceof Error) {
          return {
            ok: false,
            message: error.message || "Error desconocido al registrar usuario",
          };
        } else {
          return {
            ok: false,
          }; // Re-lanzar para mantener la información de tipo
        }
    }
  },
  async signInUser ({ commit }: { commit: Commit }, user: User) {
    const { email, secret } = user;
    try {
      if( !email || !secret ){
        throw new Error("Invalid parameter");
      }
      const {user:userSigned}  = await signInWithEmailAndPassword(auth,email,secret);
      const token = await userSigned.getIdToken()
      commit('loginUser', {
          user:{name:userSigned.displayName,email:userSigned.email},
          token:token,
          refreshToken:userSigned.refreshToken
       });      
  
      return { ok: true };
    } catch (error) {
      if (error instanceof Error) {
          return {
              ok: false,
              message: error?.message || "Error desconocido al iniciar sesión",
          };
      } else {
          throw error; // Re-lanzar para mantener la información de tipo
      }
    }
  },
  async signOutUser ({ commit }: { commit: Commit }) {
    try {
      await signOut(auth)
      commit('logout');
      return { ok: true };
    } catch (error) {
      if (error instanceof Error) {
          return {
              ok: false,
              message: error?.message || "Error desconocido al cerrar sesión",
          };
      } else {
          throw error; // Re-lanzar para mantener la información de tipo
      }
    }
  },
  async checkAuthentication ({ commit }: { commit: Commit }) {
    try {
      
      const userSigned = auth.currentUser 
      const tokenValidated = await userSigned?.getIdTokenResult()

      if (!tokenValidated) {
        throw new Error("Unauthorized");
      }

  
      commit('loginUser', { userSigned, token:tokenValidated.token, refreshToken:userSigned?.refreshToken });
      return { ok: true };
    } catch (error) {
      commit('logout');
      if (error instanceof Error) {
          return {
              ok: false,
              message: error?.message || "Error desconocido al verificar la autenticación",
          };
      } else {
          throw error; // Re-lanzar para mantener la información de tipo
      }
    }
  }
}

export default actions;
