import { GetterTree } from "vuex";
import { RootState } from "@/store";
import Session from "../../interfaces/SessionInterface";



const getters: GetterTree<Session, RootState> = {
  currentState: (state: Session) => {
    return state.status;
  },
  username: (state: Session) => {
    return state.user?.name || '';
  },
  getToken: (state: Session) => {
    return state.token || ''
  }
};

export default getters
