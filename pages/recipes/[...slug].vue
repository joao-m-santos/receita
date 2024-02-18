<template>
  <article>
    <ContentDoc :path="`/recipes/${$route.params.slug}`" v-slot="{ doc }">
      <div class="header">
        <h1>{{ doc.title }}</h1>
        <h2>{{ doc.description }}</h2>
        <div class="header__footer">
          <div class="footer__author">
            <PhUserCircle weight="bold" />
            {{ doc.author }}
          </div>
          <div class="footer__tags">
            <RecipeTag v-for="tag in doc.tags" :key="tag" :value="tag" />
          </div>
        </div>
      </div>

      <NuxtImg
        format="webp"
        :src="`/images/${$route.params.slug}.png`"
        width="720"
        height="540"
        alt=""
      />

      <ContentRenderer class="content" :value="doc" />

      <!-- <template #not-found>
        <p>No content found.</p>
      </template> -->

      <div v-if="lastUpdated" class="footnote">Last updated: {{ formatDate(lastUpdated) }}</div>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
import { PhUserCircle } from '@phosphor-icons/vue';

const route = useRoute();
const lastUpdated = await getLastUpdated(route.params.slug as string);
</script>

<style scoped>
article {
  display: grid;
  gap: 1rem;
  grid-template-areas: 'header photo' 'header photo' 'content content' 'footer footer';
  grid-template-columns: 1fr 1fr;
}

article > .header {
  grid-area: header;
}

article > .header > h1 {
  font-size: 2rem;
}

article > .header > h2 {
  margin: 1rem 0;
  padding-left: 1rem;
  border-left: 0.25rem solid var(--light-blue);

  font-family: var(--body-font-family);
  font-weight: 400;
  font-size: 1.125rem;
  font-style: italic;
  color: var(--blue-gray);
}

.footer__author {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.footer__author > svg {
  margin-right: 0.25rem;
}

.footer__tags {
  display: flex;
  gap: 0.5rem;
}

article > img {
  aspect-ratio: 16/9;
  grid-area: photo;
  height: 100%;
  border-radius: 0.25rem;

  object-fit: cover;
}

article > .content {
  grid-area: content;
}

.ingredients {
  grid-area: ingredients;
}

.footnote {
  grid-area: footer;

  margin-top: 2rem;
  margin-bottom: 4rem;

  font-size: 0.75rem;
  text-align: center;
}

/* Mobile */
@media (width <= 768px) {
  article {
    grid-template-areas: 'header' 'photo' 'content' 'footer';
    grid-template-columns: 1fr;
  }
}
</style>

<style>
.content > ol {
  margin-top: 2rem;
  margin-left: 0;
  padding-left: 0;

  counter-reset: item;
}

.content > ol > li {
  position: relative;
  display: block;
  min-height: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  padding-left: 1rem;
}

.content > ol > li::before {
  position: absolute;
  display: block;
  top: -0.75rem;
  left: -1rem;
  width: 3rem;
  margin-left: -2rem;

  font-family: var(--title-font-family);
  font-weight: 700;
  font-size: 2rem;
  color: var(--blue);
  text-align: end;

  content: counter(item) '.';
  counter-increment: item;
}
</style>
