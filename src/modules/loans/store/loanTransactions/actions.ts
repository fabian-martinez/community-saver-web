import { ActionTree } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import serverApi from "@/api/serverApi";
import LoanTransactionsState from "../../interfaces/loanTransactionsState";
import { AxiosRequestConfig } from "axios";

const PAGE_SIZE = 15;

const actions: ActionTree<LoanTransactionsState, RootState> = {
  async loadLoanTransactions({ commit, getters }, loan_id) {
    try {
      const requestConfig:AxiosRequestConfig = { 
        headers: {
          Authorization: getters.getToken
        }
      }
      requestConfig.params = { per_page: PAGE_SIZE }
      const loanTransactionsResponse = (await serverApi.get(`loans/${loan_id}/transactions`,requestConfig)).data;
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
  async moveToPageOfLoanTransactions({ commit, getters }, loanPaginated:{loan_id:string, last_page:number}){
    try {
      const requestConfig:AxiosRequestConfig = { 
        headers: {
          Authorization: getters.getToken
        }
      }
      requestConfig.params = { page:loanPaginated.last_page, per_page: PAGE_SIZE }
      const loanTransactionsResponse = (await serverApi.get(`loans/${loanPaginated.loan_id}/transactions`,requestConfig)).data;
      const currentLoanTransactions:LoanTransactionsState = {
        loading:true,
        loan_id:loanPaginated.loan_id,
        total_pages:loanTransactionsResponse.total_pages,
        last_page:loanTransactionsResponse.page,
        transactions:loanTransactionsResponse.records
      }
      commit("setLoanTransactions", currentLoanTransactions)
    } catch (error) {
      console.error(error)
    }
  }
};

export default actions;