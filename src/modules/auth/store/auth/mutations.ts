import { MutationTree } from "vuex";
import Session from "../../interfaces/SessionInterface";


const mutations: MutationTree<Session> = {
  loginUser(state, session:Session) {
    if ( session.token ) {
      localStorage.setItem('idToken', session.token),
      state.token = session.token
    }
    if (session.refreshToken) {
      localStorage.setItem('refreshToken', session.refreshToken)
      state.refreshToken = session.refreshToken 
    }
    state.user = session.user
    state.status = 'authenticated'
  },
  logout(state) {
    state.user = {}
    state.refreshToken = undefined
    state.status = 'no-authenticated'

    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
  }
};

export default mutations;

