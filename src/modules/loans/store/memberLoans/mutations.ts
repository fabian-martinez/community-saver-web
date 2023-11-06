import { MutationTree } from "vuex";
import LoansManager from "../../interfaces/memberLoansState";

const mutations: MutationTree<LoansManager> = {
  setLoans(state, loansManager:LoansManager) {
    state.member = loansManager.member
    state.total_pages = loansManager.total_pages;
    state.last_page = loansManager.last_page;
    state.loans = loansManager.loans;
    state.loading = false
  }
};

export default mutations;