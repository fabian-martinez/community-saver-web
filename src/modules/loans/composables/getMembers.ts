import serverApi from '@/api/serverApi';
import store from '@/store';
import { AxiosRequestConfig } from 'axios';
import { ref, readonly } from 'vue';

export function getMembers() {
  const results = ref(null);
  const error = ref(null);

  const requestConfig:AxiosRequestConfig = { 
    params: {params:{"per_page":20}},
    headers: {
      Authorization: store.getters.getToken
    }
  }

  const makeRequest = async () => {
    try {
      const request = await serverApi.get('members',requestConfig);
      results.value = request.data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    makeRequest,
    results: readonly(results),
    error,
  };
}