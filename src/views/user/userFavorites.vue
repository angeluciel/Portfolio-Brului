<template>
  <div class="flex justify-start items-center px-5 md:p-0 md:ml-20 w-full h-full max-w-[440px]">
    <div class="flex flex-col gap-14">
      <div class="dark:text-violet-50">Your favorites! :)</div>

      <div class="flex flex-col items-center gap-4 p-4">
        <!-- Loading state -->
        <div v-if="isLoading" class="flex items-center gap-2">
          <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-violet-500"></div>
          <span class="dark:text-violet-50">Loading your favorites...</span>
        </div>

        <!-- No favorites state -->
        <div v-else-if="favoriteArtworks.length === 0" class="text-center">
          <div class="dark:text-violet-50 mb-4">No favorites yet</div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Start adding some artworks to your favorites in the gallery!
          </p>
        </div>

        <!-- Favorites grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div
              v-for="artwork in favoriteArtworks"
              :key="artwork.id"
              class="relative group"
          >
            <!-- Remove from favorites button -->
            <button
                @click="removeFavorite(artwork.id)"
                class="absolute top-2 right-2 z-20 bg-white/80 backdrop-blur-md p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove from favorites"
            >
              <Icon
                  icon="ri:heart-fill"
                  class="text-red-500"
                  width="20"
                  height="20"
              />
            </button>

            <!-- Artwork image -->
            <img
                :src="artwork.image_url || artwork.url"
                :alt="artwork.title"
                class="gallery-image w-full h-auto rounded-lg cursor-pointer"
                @click="openArtwork(artwork)"
                @error="handleImageError(artwork)"
            />

            <!-- Artwork title -->
            <div class="mt-2 text-sm dark:text-violet-50 text-center">
              {{ artwork.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useFavoriteStore } from '@/stores/favoriteStore';
import { useAuthStore } from '@/stores/authStore';
import { supabase } from '@/lib/supabase';
import { Icon } from '@iconify/vue';

const store = useFavoriteStore();
const auth = useAuthStore();

const favoriteArtworks = ref([]);
const isLoading = ref(false);

async function loadFavoriteArtworks() {
  isLoading.value = true;

  try {
    await store.loadFavorites(auth.user.id);

    if (store.favorites.length === 0) {
      favoriteArtworks.value = [];
      return;
    }

    const { data: artworks, error } = await supabase
        .from('artworks')
        .select('*')
        .in('id', store.favorites)
        .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching favorite artworks:', error);
      return;
    }

    favoriteArtworks.value = artworks || [];
    console.log(`Loaded ${favoriteArtworks.value.length} favorite artworks`);

  } catch (error) {
    console.error('Error loading favorites:', error);
  } finally {
    isLoading.value = false;
  }
}

async function removeFavorite(artworkId: string) {
  if (!auth.user?.id) return;

  await store.toggleFavorite(artworkId, auth.user.id);

  favoriteArtworks.value = favoriteArtworks.value.filter(
      artwork => artwork.id !== artworkId
  );
}

function openArtwork(artwork) {
  console.log('Clicked artwork:', artwork);
}

function handleImageError(artwork) {
  console.error('Failed to load image for artwork:', artwork.title);
}

async function migrateOldFavorites() {
  if (!auth.user?.id) return;

  const oldFavorites = localStorage.getItem('favorites');
  if (!oldFavorites) return;

  try {
    const urlFavorites = JSON.parse(oldFavorites);
    if (!Array.isArray(urlFavorites) || urlFavorites.length === 0) return;

    console.log('Found old favorites to migrate:', urlFavorites.length);

    const { data: artworks, error } = await supabase
        .from('artworks')
        .select('id, image_url')
        .in('image_url', urlFavorites);

    if (error || !artworks) {
      console.error('Error fetching artworks for migration:', error);
      return;
    }

    for (const artwork of artworks) {
      await store.toggleFavorite(artwork.id, auth.user.id);
    }

    localStorage.removeItem('favorites');
    console.log('Successfully migrated old favorites');

    await loadFavoriteArtworks();

  } catch (error) {
    console.error('Error migrating old favorites:', error);
  }
}

onMounted(async () => {
  await auth.fetchCurrentUser();

  if (auth.user?.id) {
    await migrateOldFavorites();

    await loadFavoriteArtworks();
  } else {
    console.log('User not logged in, cannot load favorites');
  }
});
</script>

<style scoped>
.gallery-image {
  @apply transition-transform hover:scale-105;
}
</style>