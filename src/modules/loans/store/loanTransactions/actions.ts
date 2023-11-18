import { ActionTree } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import serverApi from "@/api/serverApi";
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const actions: ActionTree<LoanTransactionsState, RootState> = {
  async loadLoanTransactions({ commit }, loan_id) {
    try {
      const queryParams = { params: { per_page: 30 } }
      const loanTransactionsResponse = (await serverApi.get(`loans/${loan_id}/transactions`,queryParams)).data;
      const currentLoanTransactions:LoanTransactionsState = {
        loading:true,
        loan_id:loan_id,
        total_pages:loanTransactionsResponse.total_pages,
        last_page:loanTransactionsResponse.page,
        transactions:loanTransactionsResponse.records
      }
      commit("setLoanTransactions", currentLoanTransactions);
    } catch (error) {
      console.error(error)
    }
  },
};

export default actions;