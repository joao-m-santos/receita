<template>
  <form id="form" @submit.prevent="onSubmit">
    <input
      v-model="search"
      id="search"
      type="search"
      placeholder="Search for recipes, ingredients, anything..."
    />
  </form>
</template>

<script setup lang="ts">
const search = useSearch();

function onSubmit() {
  if (!search.value) return;
  navigateTo({ path: '/', query: { q: search.value } });
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--white);
  border: 0;
  border-radius: 0.25rem;
}
</style>
