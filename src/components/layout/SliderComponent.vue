<template>
  <div class="swiper-container main-slider">
    <div class="swiper-wrapper">
      <SlideItem
        v-for="(slide, index) in slides"
        :key="index"
        :background="slide.background"
        :title="slide.title"
        :caption="slide.caption"
      />
    </div>
    <div class="slide-indicator">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ active: activeIndex === index }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import "swiper/css";
import SlideItem from "../base/SliderItem.vue";

const slides = ref([
  {
    background: "/images/wallpaper1.png",
    title: "Empower your vision",
    caption: "Step into a World where creativity knows no bounds.",
  },
  {
    background: "/images/wallpaper2.png",
    title: "Ignite your story",
    caption:
      "Let your ideas take flight with a custom piece that translates your emotions and will into an illustration.",
  },
  {
    background: "/images/OC_big.jpg",
    title: "Unleash your colors",
    caption:
      "Discover the power of personalized art that reflects your identity.",
  },
  {
    background: "/images/gostosao_loiro.jpg",
    title: "Shape your imagination",
    caption:
      "Bring to life the scenes you've always envisioned, now on canvas.",
  },
]);

const activeIndex = ref(0);

onMounted(() => {
  new Swiper(".main-slider", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        activeIndex.value = this.realIndex;
      },
    },
  });
});
</script>

<style scoped lang="scss">
@use "@/assets/variables.scss" as var;

.swiper-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;

  /* Sticky positioning keeps the slider pinned to the top on scroll */
  position: sticky;
  top: 0;
  z-index: 100;
}

.main-slider {
  position: relative;
}

.slide-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 16px;
  height: 16px;
  background-color: var.$secondary-bg;
  border-radius: 50%;
  transition: all 0.3s ease;

  &.active {
    background-color: var.$text-color;
    border: 4px solid var.$secondary-bg;
  }
}
</style>
