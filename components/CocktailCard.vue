<template>
  <div
    class="rounded-lg overflow-hidden flex flex-col border border-white/10 bg-white/5 backdrop-blur-sm"
    :style="{ borderTopColor: theme.primaryColor, borderTopWidth: '2px' }"
  >
    <!-- Optional Image -->
    <div
      v-if="cocktail.imageUrl"
      class="h-48 bg-cover bg-center"
      :style="{ backgroundImage: `url(${cocktail.imageUrl})` }"
    />

    <div class="p-6 flex flex-col flex-1">
      <!-- Name -->
      <h3
        class="text-xl font-bold tracking-wide uppercase mb-1"
        :style="{ color: theme.primaryColor }"
      >
        {{ cocktail.name }}
      </h3>

      <!-- Description -->
      <p v-if="cocktail.description" class="text-gray-400 text-sm mb-4 italic">
        {{ cocktail.description }}
      </p>

      <!-- Divider -->
      <div class="border-t border-white/10 my-3" />

      <!-- Ingredients -->
      <div class="flex-1">
        <ul class="space-y-2">
          <li
            v-for="(ingredient, index) in cocktail.ingredients"
            :key="index"
            class="flex justify-between items-baseline gap-4 text-sm"
          >
            <span class="text-gray-200">{{ ingredient.name }}</span>
            <span class="text-gray-500 shrink-0 tabular-nums">{{ ingredient.amount }}</span>
          </li>
        </ul>
      </div>

      <!-- Instructions -->
      <div v-if="cocktail.instructions?.length" class="mt-4">
        <div class="border-t border-white/10 mb-3" />
        <ol class="list-decimal list-inside text-gray-400 text-sm space-y-1">
          <li v-for="(step, index) in cocktail.instructions" :key="index">
            {{ step }}
          </li>
        </ol>
      </div>

      <!-- Footer: Glassware & Tags -->
      <div class="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/10">
        <span class="text-xs text-gray-500 uppercase tracking-wider">
          {{ cocktail.glassware }}
        </span>
        <span class="text-gray-700">·</span>
        <span
          v-for="tag in cocktail.tags"
          :key="tag"
          class="text-xs uppercase tracking-wider"
          :style="{ color: theme.primaryColor + 'aa' }"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cocktail, PartyTheme } from '~/types';

defineProps<{
  cocktail: Cocktail;
  theme: PartyTheme;
}>();
</script>
