<template>
  <div class="mobile-card sm:!min-w-[300px] sm:h-auto w-[320px]">
    <!-- T I T L E -->
    <div class="flex flex-col items-start text-charcoal w-full">
      <h1 class="text-3xl !font-abril">{{ title }}</h1>
      <h2 class="text-xl !font-abril">{{ subtitle }}</h2>
    </div>
    <!-- M I D   S E C T I O N -->
    <!--TODO: MAKE IT SMALLER, MOBILE CANT SEE THE CARD WHEN THEY OPEN THE VIEW-->
    <div
      class="flex gap-3 justify-between items-center max-h-[320px] sm:max-h-[320px] w-full"
    >
      <!-- left -->
      <div class="flex flex-col w-full items-start max-h-[280px]">
        <!-- container that aligns image + title -->
        <div class="flex flex-col w-[200px] h-fit">
          <!-- TITLE -->
          <div
            class="flex justify-center sm:full items-center gap-2 !px-3 !py-1 bg-[#BF953D] rounded-t-xl w-full"
          >
            <h3 class="text-white text-base font-semibold text-nowrap">
              {{ packageTitle }}
            </h3>
            <Icon
              icon="ri:star-line"
              width="16"
              height="16"
              style="color: #ffffff"
            />
          </div>

          <img
            class="border-2 border-[#BF953D] rounded-b-xl w-full h-[240px] object-cover object-[100%_0%]"
            :src="imageSrc"
            alt="fullbody"
          />
        </div>
      </div>
    </div>
    <!--B O T T O M -->
    <div class="flex w-full gap-8 justify-between items-center">
      <!-- text -->
      <div class="flex flex-col gap-1 items-start justify-start w-fit">
        <span class="text-sm text-gray-600 font-bold"
          >From R${{ oldPrice }} /piece</span
        >
        <span class="text-base text-charcoal font-bold"
          >for R${{ actualPrice }}</span
        >
      </div>
      <!-- button -->
      <router-link
        to="/prices/newComission"
        class="flex justify-end bg-amber-950 rounded-2xl !p-3 w-auto"
      >
        <span class="text-[#F5C1C0] font-bold text-nowrap">Get Yours</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  title: string;
  subtitle: string;
  packageTitle: string;
  imageSrc: string;
  oldPrice: string;
  actualPrice: string;
}>();
</script>

<style scoped></style>
