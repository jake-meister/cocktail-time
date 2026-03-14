<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div class="text-center max-w-2xl">
      <h1 class="text-6xl font-bold text-white mb-6">
        🍸 Cocktail Menus
      </h1>
      <p class="text-xl text-gray-300 mb-8">
        Elegant cocktail party menus for special occasions
      </p>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-200 mb-4">Available Parties:</h2>

        <NuxtLink
          to="/party/nye-2026"
          class="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <h3 class="text-2xl font-bold text-yellow-400 mb-2">New Year's Eve 2026</h3>
          <p class="text-gray-400">December 31, 2026</p>
        </NuxtLink>

        <NuxtLink
          to="/party/summer-bbq"
          class="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <h3 class="text-2xl font-bold text-red-400 mb-2">Summer BBQ Bash</h3>
          <p class="text-gray-400">July 4, 2026</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Cocktail Menus - Party Drink Recipes'
});
</script>
