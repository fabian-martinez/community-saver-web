import { ActionTree } from "vuex";
import { RootState } from "@/store";
import serverApi from "@/api/serverApi";
import MemberLoansState from "../../interfaces/memberLoansState";

const actions: ActionTree<MemberLoansState, RootState> = {
  async fetchLoans({ commit }) {
    // Realiza una solicitud de API para obtener los préstamos y luego llama a las mutaciones correspondientes
    try {
      const response = await serverApi.get("/api/v1/loans"); // Reemplaza con tu lógica de servicio
      commit("addLoan", response.data);
    } catch (error) {
      // Manejo de errores
    }
  },
};

export default actions;