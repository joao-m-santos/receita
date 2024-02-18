<template>
  <header>
    <NuxtLink to="/" class="logo">
      <h1></h1>
    </NuxtLink>
    <div class="search">
      <HeaderSearch />
    </div>
    <div class="submit">
      <NuxtLink to="/submit" class="button browser">
        <PhUploadSimple weight="bold" />
        Submit recipe
      </NuxtLink>
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
import { PhUploadSimple } from '@phosphor-icons/vue/compact';

import { footerHref } from '../config.json';
</script>

<style>
body {
  --content-width: 50rem; /* 800px */
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
}

.logo {
  color: var(--dark-blue);
  padding: 1rem;
  margin-left: 1rem;
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
  min-height: calc(100vh - 7.75rem - 3.125rem);
  margin: auto;
  padding: 2rem 1rem;
}

/* Mobile */
@media (width <= 768px) {
  header {
    gap: 0;
    padding: 0;
  }

  main {
    min-height: calc(100vh - 5.75rem - 3.125rem);
  }

  .logo {
    margin-left: 0;
  }

  .logo > h1::after {
    content: 'R';
  }

  .search {
    margin-right: 1rem;
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
  padding: 1rem;
  background-color: var(--light-gray);
  font-size: 0.75rem;
  border-radius: 0.25rem;
}

.footer-link {
  color: var(--red);
  font-weight: 700;
}
</style>
