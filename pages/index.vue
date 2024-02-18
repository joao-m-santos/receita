<template>
  <h2>Recent recipes</h2>

  <div class="recipe-list">
    <RouterLink
      v-if="computedData"
      v-for="recipe in computedData"
      :key="recipe._id"
      :to="(recipe._path as string)"
    >
      <RecipeCard
        :title="(recipe.title as string)"
        :description="recipe.description"
        :author="recipe.author"
        :tags="recipe.tags"
        :last-updated="recipe.lastUpdated"
      />
    </RouterLink>
    <LoadingSpinner v-else />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('recipes', () => queryContent('recipes').limit(6).find());

const computedData = ref(null);

function getSlugFromPath(path: string) {
  return path.replace('/recipes/', '');
}

async function computeData() {
  if (!data.value) return;

  computedData.value = (
    await Promise.all(
      data.value.map(async (recipe) => {
        recipe.lastUpdated = await getLastUpdated(getSlugFromPath(recipe._path as string));
        return recipe;
      })
    )
  ).sort(sortByLastUpdated);

  console.log(computedData.value);
}

watch(() => data.value, computeData, { immediate: true });
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
