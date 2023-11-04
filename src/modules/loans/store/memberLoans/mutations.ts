import { MutationTree } from "vuex";

const mutations: MutationTree<MemberLoansState> = {
  addLoan(state, loan) {
    state.loans.push(loan);
  },
  removeLoan(state, loan) {
    const index = state.loans.indexOf(loan);
    if (index !== -1) {
      state.loans.splice(index, 1);
    }
  },
};

export default mutations;