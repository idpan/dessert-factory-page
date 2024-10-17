import { ref, computed } from "vue";

export function useFilter(menu) {
  const selectedCategory = ref("all");

  const filteredMenu = computed(() => {
    return selectedCategory.value === "all"
      ? menu
      : menu.filter((item) => item.category === selectedCategory.value);
  });

  function setCategory(category) {
    selectedCategory.value = category;
  }

  return { selectedCategory, filteredMenu, setCategory };
}
