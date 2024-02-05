<template>
  <header>
    <NuxtLink to="/" class="logo">
      <h1></h1>
    </NuxtLink>
    <div class="search">
      <HeaderSearch />
    </div>
    <div class="submit">
      <NuxtLink to="/submit" class="button browser">Submit recipe</NuxtLink>
      <NuxtLink to="/submit" class="button button--square mobile">
        <PhUploadSimple weight="bold" />
      </NuxtLink>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    Created & maintained by
    <NuxtLink :to="footerHref" target="_blank" class="footer-link">joao</NuxtLink>
  </footer>
</template>

<script setup lang="ts">
import { PhUploadSimple } from '@phosphor-icons/vue';

import { footerHref } from '../config.json';
</script>

<style>
body {
  --content-width: 46rem; /* 736px */
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
}

.logo {
  color: var(--dark-blue);
  padding-left: 2rem;
  margin-right: auto;
}

.logo > h1::after {
  content: 'Receita';
}

.search {
  width: var(--content-width);
}

.submit {
  flex-shrink: 0;
  margin-left: auto;
  padding-right: 2rem;
  text-align: right;
}

.button.mobile {
  display: none;
}

h1 {
  font-family: var(--title-font-family);
  font-size: 2.5rem;
  font-weight: 700;
}

main {
  max-width: var(--content-width);
  margin: auto;
  padding: 2rem 1rem;
}

/* Mobile */
@media (width <= 768px) {
  header {
    gap: 1rem;
    padding: 1rem 0;
  }

  .logo {
    padding-left: 1rem;
  }

  .logo > h1::after {
    content: 'R';
  }

  .submit {
    padding-right: 1rem;
  }

  .button.browser {
    display: none;
  }

  .button.mobile {
    display: inline-flex;
  }
}

footer {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-size: 0.75rem;
}

.footer-link {
  color: var(--red);
  font-weight: 700;
}
</style>
