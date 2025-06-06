import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoriteStore = defineStore('favorites', () => {
    const favorites = ref<string[]>([]);

    const save = () => {
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    };

    const load = () => {
        const stored = localStorage.getItem('favorites');
        favorites.value = stored ? JSON.parse(stored) : [];
    };

    const toggleFavorite = (url: string) => {
        if (favorites.value.includes(url)) {
            favorites.value = favorites.value.filter((f) => f !== url);
        } else {
            favorites.value.push(url);
        }
        save();
    };
    const isFavorite = (url: string) => favorites.value.includes(url);

    return { favorites, load, toggleFavorite, isFavorite };
});