import { MutationTree } from "vuex";
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const mutations: MutationTree<LoanTransactionsState> = {
  setLoanTransactions(state, loanTransactions:LoanTransactionsState) {
    state.loading=false,
    state.last_page=loanTransactions.last_page
    state.loan_id=loanTransactions.loan_id
    state.total_pages=loanTransactions.total_pages
    state.transactions=loanTransactions.transactions
  }
};

export default mutations;