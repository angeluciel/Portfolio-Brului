import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';

export const useFavoriteStore = defineStore('favorites', () => {
    const favorites = ref<string[]>([]);
    const isLoading = ref(false);

    const loadFavorites = async (userId: string) => {
        if (!userId) return;

        isLoading.value = true;
        try {
            const { data, error } = await supabase
                .from('favorites')
                .select('artwork_id')
                .eq('user_id', userId);

            if (error) {
                console.error('Error loading favorites:', error);
                return;
            }

            favorites.value = data.map(fav => fav.artwork_id);
        } catch (error) {
            console.error('Error loading favorites:', error);
        } finally {
            isLoading.value = false;
        }
    };

    const toggleFavorite = async (artworkId: string, userId: string) => {
        if (!userId || !artworkId) return;

        try {
            const isFav = favorites.value.includes(artworkId);

            if (isFav) {
                const { error } = await supabase
                    .from('favorites')
                    .delete()
                    .eq('user_id', userId)
                    .eq('artwork_id', artworkId);

                if (!error) {
                    favorites.value = favorites.value.filter(id => id !== artworkId);
                }
            } else {
                const { error } = await supabase
                    .from('favorites')
                    .insert({ user_id: userId, artwork_id: artworkId });

                if (!error) {
                    favorites.value.push(artworkId);
                }
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    const isFavorite = (artworkId: string) => favorites.value.includes(artworkId);

    const migrateFavoritesToDatabase = async (userId: string) => {
        const storedUrls = localStorage.getItem('favorites');
        if (!storedUrls || !userId) return;

        try {
            const urlFavorites = JSON.parse(storedUrls);
            if (!Array.isArray(urlFavorites) || urlFavorites.length === 0) return;

            const { data: artworks, error } = await supabase
                .from('artworks')
                .select('id, image_url')
                .in('image_url', urlFavorites);

            if (error || !artworks) return;

            const favoritesToInsert = artworks.map(artwork => ({
                user_id: userId,
                artwork_id: artwork.id
            }));

            const { error: insertError } = await supabase
                .from('favorites')
                .upsert(favoritesToInsert, { onConflict: 'user_id,artwork_id' });

            if (!insertError) {
                localStorage.removeItem('favorites');
                console.log('Successfully migrated favorites to database');
            }
        } catch (error) {
            console.error('Error migrating favorites:', error);
        }
    };

    return {
        favorites,
        isLoading,
        loadFavorites,
        toggleFavorite,
        isFavorite,
        migrateFavoritesToDatabase
    };
});