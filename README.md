# Receita

A simple recipe database website with mine & friends' delicious recipes!

This website was originally built with [Astro](https://astro.build/). This is a rebuilt version, with [Nuxt 3](https://nuxt.com/).

## Submitting recipes

To submit a new recipe, create a new [MDC](https://content.nuxt.com/usage/markdown) file under `content/recipes/`. The filename will be the URL for the recipe. Additionally, you must add a cover image to `public/images/` with the same filename as the recipe file.

You can use the template file `recipe.template.md` as a base for your new recipe.

Finally, submit a PR with your recipe files.

## To-do

- [x] ~~Responsiveness~~
- [ ] Allow more image formats (.jpeg, etc.)
- [ ] Search
  - [ ] Improve matching algorithm (find by ingredients, close matches, etc.)
- [ ] Add more tags
- [x] Automatic timestamps

## Development

### Setup

Make sure to install the dependencies:

```bash
bun install
```

### Dev server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

### Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

---

Built with ❤ by [Joao](https://joaosantos.dev/)
