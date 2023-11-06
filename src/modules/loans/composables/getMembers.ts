import serverApi from '@/api/serverApi';
import { ref, readonly } from 'vue';

export function getMembers() {
  const results = ref(null);
  const error = ref(null);

  const makeRequest = async () => {
    try {
      const request = await serverApi.get('members',{params:{"per_page":20}});
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