import { ActionTree } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import serverApi from "@/api/serverApi";
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const actions: ActionTree<LoanTransactionsState, RootState> = {
  async fetchLoans({ commit }) {
    // Realiza una solicitud de API para obtener los préstamos y luego llama a las mutaciones correspondientes
    try {
      const response = await serverApi.get("/api/v1/loans/id_loan/transactions"); // Reemplaza con tu lógica de servicio
      commit("addLoan", response.data);
    } catch (error) {
      // Manejo de errores
    }
  },
};

export default actions;