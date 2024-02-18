import type { IRecipe } from '~/types';

export default function (a: IRecipe, b: IRecipe) {
  return new Date(a.lastUpdated as string) > new Date(b.lastUpdated as string) ? -1 : 1;
}
