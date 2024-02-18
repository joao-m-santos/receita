<template>
  <code ref="code" class="code">
    <slot />

    <button class="button button--square code__button" @click="copyToClipboard">
      <PhClipboard weight="bold" />
    </button>

    <span v-if="showTooltip" class="code__alert" role="status">Copied to clipboard</span>
  </code>
</template>

<script setup lang="ts">
import { PhClipboard } from '@phosphor-icons/vue';

const code = ref<HTMLElement | null>(null);
const showTooltip = ref(false);

async function copyToClipboard() {
  if (!code.value) return;

  await navigator.clipboard.writeText(code.value.textContent as string);

  showTooltip.value = true;

  setTimeout(() => {
    showTooltip.value = false;
  }, 1000);
}
</script>

<style scoped>
.code {
  position: relative;
  display: block;
  margin-top: 0.5rem;
  padding: 1.125rem 1rem;
  background-color: var(--dark-blue);
  font-size: 0.875rem;
  color: var(--white);
  border-radius: 0.25rem;
  overflow-x: auto;
}

.code__button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--red);
  opacity: 0;
  transition: all 0.1s ease-in-out;
}

.code__button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.code:hover .code__button {
  opacity: 1;
}

.code__alert {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 0.25rem;
  background-color: var(--white);
  color: var(--dark-blue);
  font-size: 0.75rem;
  border-radius: 0.25rem;
  animation: alert 0.99s ease-out forwards;
}

@keyframes alert {
  0% {
    opacity: 1;
    right: 0.5rem;
  }

  50% {
    opacity: 1;
  }

  100% {
    right: 4rem;
    opacity: 0;
  }
}
</style>
