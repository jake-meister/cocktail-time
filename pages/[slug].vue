<template>
  <div
    class="min-h-screen relative"
    :style="view === 'recipe' ? { backgroundColor: partyData?.theme.secondaryColor || '#0d0d0d' } : { backgroundColor: '#fff' }"
  >
    <!-- View toggle -->
    <div
      v-if="partyData"
      class="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium tracking-wide"
      :class="view === 'recipe' ? 'bg-white/10 text-white/60' : 'bg-black/5 text-gray-400'"
    >
      <button
        :class="view === 'menu' ? 'font-semibold text-gray-900' : 'text-gray-400'"
        @click="view = 'menu'"
      >
        Menu
      </button>
      <span class="opacity-30">·</span>
      <button
        :class="view === 'recipe' ? 'font-semibold text-white' : 'text-white/40'"
        @click="view = 'recipe'"
      >
        Recipe
      </button>
    </div>

    <!-- Guest menu view -->
    <GuestMenu
      v-if="partyData && view === 'menu'"
      :cocktails="partyData.cocktails"
      :date="partyData.date"
    />

    <!-- Bartender recipe view -->
    <div v-else-if="partyData && view === 'recipe'" class="max-w-6xl mx-auto px-4 py-16">
      <PartyHeader
        :name="partyData.name"
        :date="partyData.date"
        :description="partyData.description"
        :theme="partyData.theme"
      />
      <CocktailGrid
        :cocktails="partyData.cocktails"
        :theme="partyData.theme"
      />
    </div>

    <!-- Not found -->
    <div v-else-if="error" class="text-center text-white py-20">
      <h1 class="text-4xl font-bold mb-4">Party Not Found</h1>
      <p class="text-gray-500">The party menu you're looking for doesn't exist.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: partyData, error } = await usePartyData(slug);

const view = ref<'menu' | 'recipe'>('menu');

useHead({
  title: partyData.value ? `${partyData.value.name} - Cocktail Menu` : 'Party Not Found',
  meta: [
    { name: 'description', content: partyData.value?.description || '' }
  ]
});
</script>
