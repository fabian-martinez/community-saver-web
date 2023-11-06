import { createStore, Store } from "vuex";
import loansStore from "@/modules/loans/store/memberLoans"; // Importa el módulo moduleName
import loanTransactionsStore from "@/modules/loans/store/loanTransactions"; // Importa el módulo moduleName

export interface RootState {
  isLoggedIn: boolean;
  appVersion: string;
}

const store: Store<RootState> = createStore({
  modules: {
    loansStore,loanTransactionsStore
  },
});

export default store;