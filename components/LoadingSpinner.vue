<template>
  <div class="spinner">
    <PhCircleNotch weight="bold" class="spinner__icon" />
  </div>
</template>

<script setup lang="ts">
import { PhCircleNotch } from '@phosphor-icons/vue';
</script>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
}

.spinner__icon {
  font-size: 2rem;
  color: var(--blue);
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
