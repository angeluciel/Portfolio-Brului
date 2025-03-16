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
import SlideItem from "./SliderItem.vue";

const slides = ref([
  {
    background: "/src/assets/images/wallpaper1.png",
    title: "Empower your Vision",
    caption: "Step into a World where creativity knows no bounds.",
  },
  {
    background: "/src/assets/images/wallpaper2.png",
    title: "Ignite your story",
    caption:
      "Let your ideas take flight with a custom piece that translates your emotions and will into an illustration.",
  },
  {
    background: "/src/assets/images/wallpaper3.jpg",
    title: "Slide 3",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
@use "../assets/variables.scss" as var;

.swiper-container {
  /* Ensure the slider occupies 100% of the viewport height */
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
