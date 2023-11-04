import { GetterTree } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import MemberLoansState from "../../interfaces/memberLoansState";

const getters: GetterTree<MemberLoansState, RootState> = {
  totalLoans: (state) => state.loans.length,
};

export default getters;