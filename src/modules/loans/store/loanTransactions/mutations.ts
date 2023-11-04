import { MutationTree } from "vuex";
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const mutations: MutationTree<LoanTransactionsState> = {
  addLoan(state, loan) {
    state.transactions.push(loan);
  },
  removeLoan(state, loan) {
    const index = state.transactions.indexOf(loan);
    if (index !== -1) {
      state.transactions.splice(index, 1);
    }
  },
};

export default mutations;