import { ActionTree } from "vuex";
import { RootState } from "@/store";
import serverApi from "@/api/serverApi";
import LoansManager from "../../interfaces/memberLoansState";
import Member from "../../interfaces/memberInterface";

const actions: ActionTree<LoansManager, RootState> = {
  async loadMembers({ commit }, member:Member) {
    try {
      const response = await serverApi.get("loans",{params:{filter:`member_id:eq:${member.id}`}}); 
      const currentLoansByMember:LoansManager = {
        loading:true,
        member:member,
        total_pages:response.data.total_pages,
        last_page:response.data.page,
        loans:response.data.items
      }
      commit("setLoans", currentLoansByMember);
    } catch (error) {
      console.error(error)
    }
  },
};

export default actions;