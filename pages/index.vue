<template>
  <h2>Recent recipes</h2>

  <div class="recipe-list">
    <RouterLink v-for="recipe in data" :key="recipe._id" :to="(recipe._path as string)">
      <RecipeCard
        :title="(recipe.title as string)"
        :description="recipe.description"
        :author="recipe.author"
        :tags="recipe.tags"
        :slug="getSlugFromPath(recipe._path as string)"
      />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('recipes', () => queryContent('recipes').limit(6).find());

function getSlugFromPath(path: string) {
  return path.replace('/recipes/', '');
}
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
