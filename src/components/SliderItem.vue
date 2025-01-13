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

for (let i = 0; i <= 3; i++) {}
</script>

<style scoped lang="scss">
@use "../assets/variables.scss" as var;

.swiper-slide {
  position: relative;
  overflow: hidden;

  &:nth-child(1) .cta-button {
    background-color: nth(var.$cta-colors, 1);
  }
  &:nth-child(2) .cta-button {
    background-color: nth(var.$cta-colors, 2);
  }
  &:nth-child(3) .cta-button {
    background-color: nth(var.$cta-colors, 3);
  }
}
$i: 1;

@for $i from 1 through 3 {
  .swiper-slide:nth-child(#{$i}) .cta-button {
    background-color: nth(
      var.$cta-colors,
      (($i - 1) % length(var.$cta-colors)) + 1
    );
  }
  $i: 1;
}

.slide-bgimg {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
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
  left: 10%;
  transform: translateY(-50%);
  color: #fff;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.caption {
  font-size: 1rem;
  line-height: 1.4;
  max-width: 50%;
  word-wrap: break-word;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.cta-button {
  padding: 0.5rem 1rem;
  max-width: 12rem;
  max-height: 4rem;
  border: none;
  border-radius: 16px;
  color: white;
  transition: background-color 0.3s ease-in-out;
}
</style>
