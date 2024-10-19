import { ref } from "vue";

export function useFetch(url) {
  const data = ref([]);
  const error = ref(null);
  const loading = ref(true);

  async function fetchData() {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      data.value = result.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }
  fetchData();
  return { data, error, loading };
}
