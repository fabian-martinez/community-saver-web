import { GetterTree } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const getters: GetterTree<LoanTransactionsState, RootState> = {
  getTransactions: (state) => state.transactions,
  getPagination: (state) => {
    const response:{loan_id:string,last_page:number,total_pages:number} = {
      loan_id:state.loan_id, 
      last_page:state.last_page, 
      total_pages:state.total_pages}
    return response
  }
};

export default getters;