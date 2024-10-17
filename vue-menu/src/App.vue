<script setup>
import { useFilter } from "./hooks/useFilter";
import mockMenu from "./assets/mockMenu.json";
import CardMenu from "./components/CardMenu.vue";
import FilterMenu from "./components/FilterMenu.vue";

const { selectedCategory, filteredMenu, setCategory } = useFilter(mockMenu);
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
