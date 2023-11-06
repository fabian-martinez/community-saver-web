import { ActionTree } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import serverApi from "@/api/serverApi";
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const actions: ActionTree<LoanTransactionsState, RootState> = {
  async loadLoanTransactions({ commit }, loan_id) {
    try {
      const loanTransactionsResponse = (await serverApi.get(`loans/${loan_id}/transactions`)).data;
      const currentLoanTransactions:LoanTransactionsState = {
        loading:true,
        loan_id:loan_id,
        total_pages:loanTransactionsResponse.total_pages,
        last_page:loanTransactionsResponse.page,
        transactions:loanTransactionsResponse.records
      }
      commit("setLoanTransactions", currentLoanTransactions);
    } catch (error) {
      // Manejo de errores
    }
  },
};

export default actions;