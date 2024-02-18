import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface IRecipe extends ParsedContent {
  title: string;
  description: string;
  author: string;
  tags: Array<TagKey>;
  lastUpdated?: string;
}
