<script setup>
import CardMenu from "./components/CardMenu.vue";
import FilterMenu from "./components/FilterMenu.vue";
import { useFetch } from "./hooks/useFetch";
import { ref, computed } from "vue";

const selectedCategory = ref("all");

const { data: fetchedMenu } = useFetch(
  "https://idpan.github.io/dessert-factory-api/menu.json"
);
const filteredMenu = computed(() => {
  if (!fetchedMenu.value.length) return [];
  if (selectedCategory.value === "all") return fetchedMenu.value;
  return fetchedMenu.value.filter((item) => item.category === selectedCategory);
});

function setCategory(category) {
  selectedCategory.value = category;
}
</script>

<template>
  <div class="menu">
    <FilterMenu :selectedCategory="selectedCategory" @filter="setCategory" />

    <div class="menu-container">
      <CardMenu v-for="menu in filteredMenu" :key="menu.title" :menu="menu" />
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  margin-top: 20px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 30px;
}
</style>
