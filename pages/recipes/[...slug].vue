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

      <div class="photo">
        <div v-if="isImgLoading" class="photo__skeleton">
          <PhImageSquare class="photo__icon" />
        </div>
        <NuxtImg
          class="photo__img"
          format="webp"
          :src="`/images/${$route.params.slug}.png`"
          width="376"
          height="222"
          :alt="doc.title"
          @load="isImgLoading = false"
        />
      </div>

      <ContentRenderer class="content" :value="doc" />

      <!-- <template #not-found>
        <p>No content found.</p>
      </template> -->

      <div v-if="lastUpdated" class="footnote">Last updated: {{ formatDate(lastUpdated) }}</div>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
import { PhImageSquare, PhUserCircle } from '@phosphor-icons/vue/compact';

const route = useRoute();
const lastUpdated = await getLastUpdated(route.params.slug as string);

const isImgLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    // After 5 seconds, hide photo skeleton anyways
    isImgLoading.value = false;
  }, 5000);
});
</script>

<style scoped>
article {
  display: grid;
  gap: 1rem;
  grid-template-areas: 'header photo' 'content content' 'footer footer';
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

.photo {
  position: relative;
  grid-area: photo;
  border-radius: 0.25rem;
  overflow: hidden;
}

.photo__img {
  aspect-ratio: 16/9;
  height: 100%;
  object-fit: cover;
}

.photo__skeleton {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, var(--white) 25%, var(--light-gray) 50%, var(--white) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.photo__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: var(--gray);
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
