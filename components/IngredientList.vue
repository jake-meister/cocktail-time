<template>
  <ul class="space-y-1">
    <li
      v-for="(ingredient, index) in ingredients"
      :key="index"
      class="text-gray-300 text-sm flex justify-between"
    >
      <span>{{ ingredient.name }}</span>
      <span class="text-gray-500">{{ ingredient.amount }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Ingredient } from '~/types';

defineProps<{
  ingredients: Ingredient[];
}>();
</script>
