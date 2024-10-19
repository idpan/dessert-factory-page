<script setup>
import { computed } from "vue";
import capitalize from "../helper/capitalize";
import { useFetch } from "@/hooks/useFetch";

const { data: fetchedCategories } = useFetch(
  "https://idpan.github.io/dessert-factory-api/categories.json"
);

const categories = computed(() => {
  if (fetchedCategories.value[0]) return ["all", ...fetchedCategories.value];
});
const emit = defineEmits(["filter"]);

defineProps(["selectedCategory"]);

function filterByCategory(category) {
  emit("filter", category);
}
</script>

<template>
  <div class="filter-menu">
    <a
      v-for="category in categories"
      :key="category"
      href="#"
      @click.prevent="filterByCategory(category)"
      :class="
        selectedCategory === category ? 'filter-nav active' : 'filter-nav'
      "
    >
      {{ capitalize(category) }}
    </a>
  </div>
</template>

<style scoped>
.filter-menu {
  padding: 30px;
  text-align: center;
}
.filter-nav {
  color: var(--f-color--dark);
  text-decoration: none;
  text-transform: capitalize;
}
.filter-nav:not(:last-child) {
  margin-right: 20px;
}
.filter-nav.active {
  color: var(--f-color--accent);
  font-weight: 900;
  border-bottom: 2px solid var(--f-color--accent);
}
</style>
