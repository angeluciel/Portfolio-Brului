<template>
  <div class="flex justify-start items-center px-5 md:p-0 md:ml-20 w-full h-full max-w-[440px]">
    <div class="flex flex-col gap-14">
     <div class="dark:text-violet-50">Your favorites! :)</div>
     <div class="flex flex-col items-center gap-4 p-4">
      <div v-if="store.favorites.length === 0">No favorites yet</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(url, index) in store.favorites" :key="index">
          <img :src="url" class="gallery-image" />
       </div>
     </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFavoriteStore } from '@/stores/favoriteStore';

const store = useFavoriteStore();

onMounted(() => {
  store.load();
})

</script>

<style scoped></style>
