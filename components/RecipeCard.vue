<template>
  <div class="recipe-card">
    <div v-if="lastUpdated" class="timestamp" :title="new Date(lastUpdated).toString()">
      <PhClock weight="bold" />
      {{ formatDate(lastUpdated) }}
    </div>

    <h3 class="title">{{ title }}</h3>

    <div class="author-tags">
      <div class="author">
        <PhUserCircle weight="bold" />
        {{ author }}
      </div>
      <div class="tags">
        <RecipeTag v-for="tag in tags" :key="tag" :value="tag" />
      </div>
    </div>

    <p class="description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { PhClock, PhUserCircle } from '@phosphor-icons/vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as PropType<Array<TagKey>>,
    default: () => [],
  },
  description: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.recipe-card {
  padding: 1rem;
  background-color: var(--white);
  border-radius: 0.25rem;
}

.recipe-card:hover {
  filter: brightness(0.99);
}

.recipe-card:active {
  filter: brightness(0.95);
}

.timestamp {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--blue-gray);
}

.title {
  margin-bottom: 0.5rem;
}

.author-tags {
  margin-bottom: 0.5rem;
}

.author {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.author > svg {
  margin-right: 0.25rem;
}

.tags {
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
}

.description {
  color: var(--blue-gray);
  margin-bottom: 0;
}
</style>
