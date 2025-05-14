<script setup lang="ts">
import CardTemplateVue from "@/components/base/CardTemplate.vue";
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const scrollEl = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (scrollEl.value)
    scrollEl.value.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = () => {
  if (scrollEl.value)
    scrollEl.value.scrollBy({ left: 300, behavior: "smooth" });
};

const cards = [
  {
    title: "Complete Piece",
    subtitle: "(Full Body)",
    packageTitle: "Premium Package",
    imageSrc: "/images/last-last.jpg",
    oldPrice: "120.00",
    actualPrice: "100.00",
  },
  {
    title: "Complete Piece",
    subtitle: "(Half Body)",
    packageTitle: "Premium Package",
    imageSrc: "/images/first-second.jpg",
    oldPrice: "75.00",
    actualPrice: "64.99",
  },
  {
    title: "Complete Piece",
    subtitle: "(Face)",
    packageTitle: "Premium Package",
    imageSrc: "/images/third-second.jpg",
    oldPrice: "60.00",
    actualPrice: "45.99",
  },
  {
    title: "Lineart & Colors",
    subtitle: "(Full Body)",
    packageTitle: "Best Price",
    imageSrc: "/images/OC_big.jpg",
    oldPrice: "60.00",
    actualPrice: "45.99",
  },
  {
    title: "Lineart & Colors",
    subtitle: "(Half Body)",
    packageTitle: "Best Price",
    imageSrc: "/images/Sage.jpg",
    oldPrice: "60.00",
    actualPrice: "45.99",
  },
  {
    title: "Lineart & Colors",
    subtitle: "(Face)",
    packageTitle: "Best Price",
    imageSrc: "/images/foto.png",
    oldPrice: "60.00",
    actualPrice: "45.99",
  },
];

const showButtons = ref(false);
</script>

<template>
  <HeaderBar_mobile />

  <div
    class="flex flex-col gap-4 w-full !py-24 md:!py-32 h-fit md:h-auto bg-violet-50 dark:bg-zinc-900 overflow-x-hidden"
  >
    <div
      class="relative flex flex-col justify-between gap-4 items-center w-full !pl-6 sm:!px-24"
    >
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-violet-50 dark:from-zinc-900 to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-violet-50 dark:from-zinc-900 to-transparent"
      ></div>

      <div
        class="flex flex-col sm:flex-row gap-8 sm:justify-between justify-center w-full"
      >
        <h1
          class="!font-abril !text-4xl text-zinc-900 dark:text-zinc-300 sm:!text-5xl"
        >
          Place your Order
        </h1>
        <div class="flex flex-col items-start">
          <span class="text-zinc-900 dark:text-zinc-400"
            >Need something that's not on the menu?</span
          >
          <div class="flex text-gold-500">
            <span>Let me know how I can help!</span>
            <Icon icon="ri:arrow-right-up-line" width="24" height="24" />
          </div>
        </div>
      </div>

      <div
        class="flex justify-around w-full [&>*]:w-full text-center overflow-x-scroll no-scrollbar gap-12 sm:gap-0"
      >
        <div class="prices-list">All Prices</div>
        <div class="prices-list">Complete Render</div>
        <div class="prices-list">Lineart + Base Color</div>
        <div class="prices-list">Emotes</div>
        <div class="prices-list">Background</div>
      </div>
    </div>

    <div
      class="relative flex-col w-screen h-fit"
      @mouseenter="showButtons = true"
      @mouseleave="showButtons = false"
    >
      <div class="flex w-full !pl-6 sm:!pl-24 gap-2">
        <span class="!font-abril text-2xl text-zinc-950 dark:text-gray-200"
          >All Services.</span
        >
        <span class="!font-abril text-2xl text-gray-500 dark:text-zinc-400"
          >Choose Yours!</span
        >
      </div>
      <div class="w-screen">
        <div
          class="flex justify-start w-full !p-6 sm:!px-24 gap-8 overflow-auto no-scrollbar touch-pan-x overscroll-contain snap-x snap-mandatory"
          ref="scrollEl"
        >
          <CardTemplateVue
            class="snap-center shrink-0 w-[250px]"
            v-for="(card, index) in cards"
            :key="index"
            v-bind="card"
          />
        </div>

        <!-- Mova os botões aqui, fora do scroll container -->
        <button
          @click="scrollLeft"
          class="hidden md:flex absolute left-9 top-1/2 -translate-y-1/2 bg-zinc-900/25 dark:bg-zinc-300 text-gray-200 dark:text-zinc-900 shadow-[0px_0px_16px_1px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_16px_1px_rgba(1,1,1,0.5)] rounded-full p-2 transition-all duration-300"
          :class="
            showButtons
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          "
        >
          <Icon icon="ri:arrow-left-s-line" width="24" height="24" />
        </button>

        <button
          @click="scrollRight"
          class="hidden md:flex absolute right-9 top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.4)] text-gray-200 shadow-[0px_0px_8px_1px_rgba(89,125,161,0.5)] rounded-full p-2 transition-all duration-300"
          :class="
            showButtons
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          "
        >
          <Icon icon="ri:arrow-right-s-line" width="24" height="24" />
        </button>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<style lang="scss" scoped></style>
