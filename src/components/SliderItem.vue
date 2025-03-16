<template>
  <div class="swiper-slide">
    <figure
      class="slide-bgimg"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <!-- Overlay -->
      <div class="overlay"></div>
    </figure>
    <div class="content">
      <p class="title">{{ title }}</p>
      <span class="caption">{{ caption }}</span>
      <button class="cta-button">See more</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  background: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@use "../assets/variables.scss" as var;
@use "sass:list";

.swiper-slide {
  position: relative;
  overflow: hidden;

  // Cycle through the CTA button colors dynamically based on the number of colors in $cta-colors.
  @for $i from 1 through list.length(var.$cta-colors) {
    &:nth-child(#{list.length(var.$cta-colors)}n + #{$i}) .cta-button {
      background-color: list.nth(var.$cta-colors, $i);
    }
  }
}

.slide-bgimg {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  /* Darken the image by reducing brightness by 40% */
  filter: brightness(60%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  /* Remove fixed left positioning so we can control margins on the text */
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.title {
  /* Main title: Abril Fatface, 80px, left aligned with an 80px left margin */
  font-family: "Abril Fatface", cursive;
  font-size: 80px;
  text-align: left;
  margin-left: 80px;
  margin-bottom: 60px; /* 60px gap between title and caption */
}

.caption {
  /* Description: Nunito, bold italic, 24px, left aligned with an 80px left margin */
  font-family: "Nunito", sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  margin-left: 80px;
  /* Ensure the description doesn't exceed 26% of the container width */
  max-width: 26%;
}

.cta-button {
  padding: 0.5rem 1rem;
  max-width: 12rem;
  max-height: 4rem;
  border: none;
  border-radius: 16px;
  color: white;
  transition: background-color 0.3s ease-in-out;
  margin-left: 80px;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
  }
}
</style>
