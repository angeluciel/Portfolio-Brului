<template>
  <div class="mobile-card sm:!min-w-auto sm:h-auto">
    <!-- T I T L E -->
    <div class="flex flex-col items-start text-charcoal">
      <h1 class="text-4xl !font-abril">Complete Piece</h1>
      <h2 class="text-2xl !font-abril">(Full body)</h2>
    </div>
    <!-- M I D   S E C T I O N -->
    <div class="flex gap-3 items-center">
      <!-- left -->
      <div class="flex flex-col">
        <!-- TITLE -->
        <div
          class="flex justify-center items-center gap-4 !px-3 !py-1 bg-[#BF953D] rounded-t-xl"
        >
          <h3 class="!font-abril text-white text-xl text-nowrap">
            Premium Package
          </h3>
          <Icon
            icon="ri:star-line"
            width="24"
            height="24"
            style="color: #ffffff"
          />
        </div>

        <img
          class="border-2 border-[#BF953D] rounded-b-xl md:w-[300px]"
          src="/images/last-last.jpg"
          alt="fullbody"
        />
      </div>
      <!-- right -->
      <div class="hidden md:flex flex-col max-w-28 items-start !pt-5">
        <img src="/images/discount.png" alt="discount" class="" />
      </div>
    </div>
    <!--B O T T O M -->
    <div class="flex w-full justify-between items-center">
      <!-- text -->
      <div class="flex flex-wrap gap-1 items-end justify-start w-full">
        <span class="text-base text-charcoal font-bold">From R$120.00 for</span>
        <span class="text-2xl text-[#BF953D] font-bold">R$100</span>
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
</script>

<style scoped></style>
