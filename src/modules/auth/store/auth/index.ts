import { Module } from "vuex";
import { RootState } from "@/store"; // Ajusta la ruta según la ubicación real de tu archivo RootState
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const loansStore: Module<typeof state, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default loansStore;
