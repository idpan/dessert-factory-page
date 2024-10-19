<script setup>
// import { defineProps } from "vue";

defineProps({
  menu: {
    type: Object,
    required: true,
  },
});

const baseImageUrl = "/assets/images/";
</script>

<template>
  <div class="menu-card">
    <div class="menu-card__image">
      <img :src="baseImageUrl + menu.image" :alt="menu.image" />
    </div>
    <p class="menu-card__title">{{ menu.title }}</p>
    <p class="menu-card__price">
      {{ "Rp " + Intl.NumberFormat("id-ID").format(menu.price) }}
    </p>
  </div>
</template>

<style scoped>
.menu-card {
  width: 150px;
}
.menu-card__image {
  height: fit-content;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.menu-card__image img {
  display: block;
  max-width: 100%;
}
.menu-card__title {
  margin-top: 0.5rem;
  font-family: var(--f-family);
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.05rem;
  color: var(--f-color--dark);
}
.menu-card__price {
  margin-top: 0.5rem;
  color: var(--f-color--dark);
  font-size: 0.95rem;
}

@media screen and (min-width: 780px) {
  .menu-card {
    width: 300px;
  }
  .menu-card__title {
    font-size: 1.2rem;
  }
  .menu-card__price {
    font-size: 1rem;
  }
}
</style>
