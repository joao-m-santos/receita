<template>
  <NuxtLayout>
    <h2>Uh-oh, looks like there was a problem...</h2>
    <div v-if="error" class="error">
      <h1 v-if="error.statusCode" class="error__code">{{ error.statusCode }}</h1>
      <h2 v-if="error.statusMessage">{{ error.statusMessage }}</h2>
    </div>
    <div class="center">
      <NuxtLink to="/" class="button">Back to homepage</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error: Object as () => NuxtError,
});
</script>

<style scoped>
.error {
  .error__code {
    color: var(--red);
  }
}
</style>
