import { MutationTree } from "vuex";
import LoansManager from "../../interfaces/loansManager";
import Member from "../../interfaces/memberInterface";

const mutations: MutationTree<LoansManager> = {
  setLoans(state, loansManager:LoansManager) {
    state.member = loansManager.member
    state.total_pages = loansManager.total_pages;
    state.last_page = loansManager.last_page;
    state.loans = loansManager.loans;
    state.loading = false
  },
  cleanLoans(state) {
    const emptyMember:Member = {
      id:'',
      name:''
    }
    state.member = emptyMember
    state.total_pages = 0
    state.last_page = 0
    state.loans = []
    state.loading = false
  }
};

export default mutations;