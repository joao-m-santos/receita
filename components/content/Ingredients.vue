<template>
  <section class="ingredients">
    <h3>Ingredients</h3>
    <div class="ingredients__content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.ingredients {
  padding: 1rem;
  background-color: var(--white);
  border-radius: 0.25rem;
}

.ingredients > h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
}

.ingredients__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}
</style>
