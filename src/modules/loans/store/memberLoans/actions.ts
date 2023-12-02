import { ActionTree } from "vuex";
import { RootState } from "@/store";
import serverApi from "@/api/serverApi";
import LoansManager from "../../interfaces/loansManager";
import Member from "../../interfaces/memberInterface";
import Loan from "../../interfaces/loanInterface";
import { AxiosRequestConfig } from "axios";

const actions: ActionTree<LoansManager, RootState> = {

  
  async loadMembers({ commit, getters }, member:Member) {
    try {

      const requestConfig:AxiosRequestConfig = { 
          params: {filter:`member_id:eq:${member.id}`},
          headers: {
            Authorization: getters.getToken
          }
      }

      const response = (await serverApi.get("loans",requestConfig)).data; 
      const loansArray = response.items.map(transformLoan);
      const currentLoansByMember:LoansManager = {
        loading:true,
        member:member,
        total_pages:response.total_pages,
        last_page:response.page,
        loans:loansArray
      }
      commit("setLoans", currentLoansByMember);
    } catch (error) {
      console.error(error)
    }
    function transformLoan(loan: Loan): Loan {
      loan.next_interest_payment = loan.updated_amount * loan.interest_rate;
      loan.next_total_payment = Number(loan.next_interest_payment) + Number(loan.monthly_payment);
      
      return loan
    }
  },
};


export default actions;