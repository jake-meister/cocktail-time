<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <CocktailCard
      v-for="cocktail in cocktails"
      :key="cocktail.id"
      :cocktail="cocktail"
      :theme="theme"
    />
  </div>
</template>

<script setup lang="ts">
import type { Cocktail, PartyTheme } from '~/types';

defineProps<{
  cocktails: Cocktail[];
  theme: PartyTheme;
}>();
</script>
