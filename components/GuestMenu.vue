<template>
  <div class="min-h-screen bg-white flex flex-col items-center px-8 py-8">
    <!-- Logo -->
    <img
      src="/images/rabbit-hutch-logo.png"
      alt="The Rabbit Hutch"
      class="w-72 mb-6 select-none"
    />

    <!-- Party subtitle -->
    <p v-if="date" class="uppercase tracking-[0.25em] text-gray-400 text-xs mb-8">
      {{ date }}
    </p>

    <!-- Cocktail list -->
    <div class="flex flex-col items-center gap-10 max-w-lg w-full">
      <div
        v-for="cocktail in cocktails"
        :key="cocktail.id"
        class="text-center"
      >
        <h3
          class="font-semibold uppercase tracking-[0.2em] text-base mb-1.5"
          :style="goldStyle"
        >
          {{ cocktail.name }}
        </h3>
        <p class="italic text-gray-400 text-sm leading-relaxed">
          {{ cocktail.ingredients.map(i => i.name).join(' | ') }}
        </p>
      </div>
    </div>

    <!-- Bottom rule -->
    <div class="w-28 h-px mt-16" :style="{ background: ruleStyle }" />
  </div>
</template>

<script setup lang="ts">
import type { Cocktail } from '~/types';

defineProps<{
  cocktails: Cocktail[];
  date: string;
}>();

const scrollProgress = ref(0);

const onScroll = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
};

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

// Highlight position sweeps left→right as user scrolls
const highlightPos = computed(() => Math.min(scrollProgress.value * 1.75 - 80, 150));

const goldStyle = computed(() => ({
  background: `linear-gradient(
    90deg,
    #4a2e08 ${highlightPos.value - 75}%,
    #7a5311 ${highlightPos.value - 25}%,
    #c9a84c ${highlightPos.value - 10}%,
    #f5d98e ${highlightPos.value}%,
    #fffbe8 ${highlightPos.value + 5}%,
    #f5d98e ${highlightPos.value + 10}%,
    #c9a84c ${highlightPos.value + 20}%,
    #7a5311 ${highlightPos.value + 28}%,
    #c9a84c 88%,
    #9a6e22 94%,
    #4a2e08 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const ruleStyle = computed(() =>
  `linear-gradient(90deg, transparent, #c9a84c 35%, #f5d98e ${highlightPos.value + 5}%, #fffbe8 ${highlightPos.value + 10}%, #c9a84c 60%, transparent)`
);
</script>
