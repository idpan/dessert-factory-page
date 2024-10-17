<script setup>
import CardMenu from "./components/CardMenu.vue";
import mockMenu from "./assets/mockMenu.json";
</script>

<template>
  <div class="menu">
    <div class="menu-filter">some filter menu nav</div>

    <div class="menu-container">
      <CardMenu v-for="menu in mockMenu" :key="menu.title" :menu="menu" />
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 30px;
}
</style>
