<template>
  <span class="tag" :class="`tag--${color}`">
    <component v-if="iconComponent" :is="iconComponent" />
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TagKey } from '~/utils/tag-list';
import tagList from '~/utils/tag-list';

export type TagColor = 'blue' | 'green' | 'red';

const props = defineProps({
  value: {
    type: String as PropType<TagKey>,
    required: true,
  },
});

const { icon, color, label } = tagList[props.value];

const iconComponent = (await import('@phosphor-icons/vue/compact'))[`Ph${icon}`];
</script>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;

  font-family: var(--title-font-family);
  font-size: 0.875rem;
  font-weight: 700;

  border-radius: 2px;
}

.tag--blue {
  color: var(--blue);
  background-color: var(--light-blue);
}

.tag--green {
  color: var(--green);
  background-color: var(--light-green);
}

.tag--red {
  color: var(--red);
  background-color: var(--light-red);
}
</style>
