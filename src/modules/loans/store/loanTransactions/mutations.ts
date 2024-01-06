import { MutationTree } from "vuex";
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const mutations: MutationTree<LoanTransactionsState> = {
  setLoanTransactions(state, loanTransactions:LoanTransactionsState) {
    state.loading=false,
    state.last_page=loanTransactions.last_page
    state.loan_id=loanTransactions.loan_id
    state.total_pages=loanTransactions.total_pages
    state.transactions=loanTransactions.transactions
  },
  cleanLoanTransactions(state) {
    state.loading=true,
    state.last_page=0
    state.loan_id=''
    state.total_pages=0
    state.transactions=[]
  }
};

export default mutations;