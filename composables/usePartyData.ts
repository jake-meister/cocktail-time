import type { PartyMenu } from '~/types';

export const usePartyData = async (slug: string) => {
  const partyData = ref<PartyMenu | null>(null);
  const error = ref<Error | null>(null);

  try {
    // Import JSON file dynamically
    const data = await import(`~/data/parties/${slug}.json`);
    partyData.value = data.default || data;
  } catch (e) {
    error.value = e as Error;
    console.error(`Failed to load party data for slug: ${slug}`, e);
  }

  return {
    data: readonly(partyData),
    error: readonly(error)
  };
};
