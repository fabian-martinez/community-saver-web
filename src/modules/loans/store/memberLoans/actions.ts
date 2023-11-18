import { ActionTree } from "vuex";
import { RootState } from "@/store";
import serverApi from "@/api/serverApi";
import LoansManager from "../../interfaces/loansManager";
import Member from "../../interfaces/memberInterface";
import Loan from "../../interfaces/loanInterface";

const actions: ActionTree<LoansManager, RootState> = {

  
  async loadMembers({ commit }, member:Member) {
    function transformLoan(loan: Loan): Loan {
      loan.next_interest_payment = loan.updated_amount * loan.interest_rate;
      loan.next_total_payment = Number(loan.next_interest_payment) + Number(loan.monthly_payment);
      
      return loan
    }
    try {
      const response = (await serverApi.get("loans",{params:{filter:`member_id:eq:${member.id}`}})).data; 
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
  },
};


export default actions;