<template>
  <header class="text-center mb-16 pt-4">
    <!-- Decorative line -->
    <div
      class="w-16 h-px mx-auto mb-8"
      :style="{ backgroundColor: theme.primaryColor }"
    />

    <h1
      class="text-5xl md:text-7xl font-bold tracking-tight mb-4"
      :style="{ color: theme.primaryColor }"
    >
      {{ name }}
    </h1>

    <p v-if="date" class="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
      {{ date }}
    </p>

    <p v-if="description" class="text-base text-gray-400 max-w-xl mx-auto italic">
      {{ description }}
    </p>

    <!-- Decorative line -->
    <div
      class="w-16 h-px mx-auto mt-8"
      :style="{ backgroundColor: theme.primaryColor }"
    />
  </header>
</template>

<script setup lang="ts">
import type { PartyTheme } from '~/types';

defineProps<{
  name: string;
  date: string;
  description: string;
  theme: PartyTheme;
}>();
</script>
