<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Global meta tags
useHead({
  titleTemplate: '%s | Cocktail Menus',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Elegant cocktail menus for your parties' }
  ]
});
</script>
