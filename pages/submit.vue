<template>
  <h2>Submit a recipe</h2>

  <p>Recipes are fetched from the website's code repo.</p>

  <p>
    To submit a new recipe, you must push a Pull Request. Create a new
    <NuxtLink to="https://mdxjs.com/" target="_blank" class="link">MDX</NuxtLink> file under
    <code>src/content/recipes/</code>. The filename will be the URL for the recipe. Additionally,
    you must add a cover image file to <code>src/assets/</code> with the same filename as the recipe
    file.
  </p>
  <p>
    You can use the template file <code>src/recipe.template.mdx</code> as a base for your new
    recipe.
  </p>

  <p class="button-wrapper">
    <NuxtLink :to="repoUrl" target="_blank" class="button">
      <PhArrowSquareOut weight="bold" />
      Go to GitHub repository
    </NuxtLink>
  </p>

  <p class="button-wrapper">
    <span id="show-step-by-step" class="link" @click="isStepByStepVisible = !isStepByStepVisible">
      {{ isStepByStepVisible ? 'Hide step-by-step' : 'Show step-by-step' }}
    </span>
  </p>

  <div v-show="isStepByStepVisible" id="step-by-step">
    <ol class="step-list">
      <li>
        Clone the repository
        <pre><CodeBlock>git clone git@github.com:joao-m-santos/receita.git</CodeBlock></pre>
      </li>
      <li>
        Create a new branch and switch to it
        <pre><CodeBlock>git checkout -b my-new-recipe</CodeBlock></pre>
      </li>
      <li>
        Copy the recipe template and rename it to your recipe
        <pre><CodeBlock>cp src/recipe.template.mdx src/content/recipes/my-new-recipe.mdx</CodeBlock></pre>
      </li>
      <li>Edit the file with your recipe ingredients and steps, keeping the template structure</li>
      <li>Add a picture with the same name as your recipe to the <code>src/assets</code> folder</li>
      <li>
        Stage your files
        <pre><CodeBlock>git add src/assets/my-new-recipe.png src/content/recipes/my-new-recipe.mdx</CodeBlock></pre>
      </li>
      <li>
        Commit your files
        <pre><CodeBlock>git commit -m "New recipe: My new recipe"</CodeBlock></pre>
      </li>
      <li>
        Push your branch
        <pre><CodeBlock>git push -u origin my-new-recipe</CodeBlock></pre>
      </li>
      <li>
        Create a PR for your recipe
        <br />
        (Windows)
        <pre><CodeBlock>start https://github.com/joao-m-santos/receita/pull/new/my-new-recipe</CodeBlock></pre>
        (MacOS)
        <pre><CodeBlock>open https://github.com/joao-m-santos/receita/pull/new/my-new-recipe</CodeBlock></pre>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { PhArrowSquareOut } from '@phosphor-icons/vue/compact';

import { repoUrl } from '~/config.json';

const isStepByStepVisible = ref(false);
</script>

<style scoped>
.button-wrapper {
  text-align: center;
  margin-top: 3rem;
}

span.link {
  font-size: 0.75rem;
}

.step-list > li {
  margin-bottom: 1rem;
}
</style>
