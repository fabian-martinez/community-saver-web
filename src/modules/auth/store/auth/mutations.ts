import { MutationTree } from "vuex";
import Session from "../../interfaces/SessionInterface";


const mutations: MutationTree<Session> = {
  loginUser(state, session:Session) {
    if ( session.token ) {
      state.token = session.token
    }
    if (session.refreshToken) {
      state.refreshToken = session.refreshToken 
    }
    state.user = session.user
    state.status = 'authenticated'
  },
  logout(state) {
    state.user = {}
    state.refreshToken = undefined
    state.status = 'no-authenticated'
  }
};

export default mutations;

