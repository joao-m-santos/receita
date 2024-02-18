<template>
  <div class="ingredients-column">
    <h4 v-if="title">{{ title }}</h4>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style>
.ingredients-column > ul {
  list-style-type: none;
  padding-left: 0.5rem;
}
</style>
