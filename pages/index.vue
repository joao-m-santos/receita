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
        :title="recipe.title"
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
import type { IRecipe } from '~/types';

const search = useSearch();

const { data } = await useAsyncData('recipes', () =>
  queryContent<IRecipe>('recipes').where(getDataQuery(search.value)).limit(6).find()
);

const computedData = ref<Array<IRecipe> | null>(null);

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
  ).toSorted(sortByLastUpdated);
}

async function handleSearch(value: string) {
  updateRouteQuery('q', value);
  data.value = await queryContent<IRecipe>('recipes').where(getDataQuery(value)).find();
}

watch(() => data.value, computeData, { immediate: true });
watch(() => search.value, debounce(handleSearch, 500));
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
