import { GetterTree } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import LoanTransactionsState from "../../interfaces/loanTransactionsState";

const getters: GetterTree<LoanTransactionsState, RootState> = {
  totalLoans: (state) => state.transactions.length,
};

export default getters;