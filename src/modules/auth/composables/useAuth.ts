import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import User from "@/modules/auth/interfaces/UserInterface"; // Ajusta la ruta según la ubicación real de tus tipos

const useAuth = () => {
  const store = useStore();

  const registerUser = async (user: User) => {
    const resp = await store.dispatch('registerUser', user);
    return resp;
  };

  const signInUser = async (user: User) => {
    const resp = await store.dispatch('signInUser', user);
    return resp;
  };

  const checkAuthentication = async () => {
    const resp = await store.dispatch('checkAuthentication');
    return resp;
  };

  const logout = async () => {
    await store.commit('cleanLoans');
    await store.commit('cleanLoanTransactions');
    await store.dispatch('signOutUser')
  };

  return {
    checkAuthentication,
    registerUser,
    signInUser,
    logout,

    authStatus: computed(() => store.getters['auth/currentState']) as ComputedRef<string>,
    username: computed(() => store.getters['auth/username']) as ComputedRef<string>,
  };
};

export default useAuth;
