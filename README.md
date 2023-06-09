# Receita

A simple recipe database website with mine & friends' delicious recipes!

This website is built with [Astro](https://astro.build/).

## Submitting recipes

To submit a new recipe, create a new [MDX](https://mdxjs.com/) file under `src/content/recipes/`. The filename will be the URL for the recipe. Additionally, you must add a cover image to `src/assets/` with the same filename as the recipe file.

You can use the template file `src/recipe.template.mdx` as a base for your new recipe.

Finally, submit a PR with your recipe files.

## To-do

- [x] ~~Responsiveness~~
- [ ] Allow more image formats (.jpeg, etc.)
- [x] Search
  - [ ] Improve matching algorithm (find by ingredients, close matches, etc.)
- [ ] Add more tags
- [ ] Automatic timestamps

---

Built with ❤ by [Joao](https://joaosantos.dev/)
