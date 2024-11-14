<template>
  <HeaderBar></HeaderBar>
  <div class="artworks">
    <div class="my-portfolio">MY PORTFOLIO</div>
    <div class="images">
      <div class="line-one">
        <img src="../assets/images/first-first.jpg" alt="first-first" />
        <img src="../assets/images/first-second.jpg" alt="first-second" />
      </div>
      <img src="../assets/images/wallpaper1.png" alt="wallpaper" />
      <div class="line-two">
        <img src="../assets/images/second-first.jpg" alt="second-first" />
        <img src="../assets/images/second-second.jpg" alt="second-second" />
      </div>
      <img src="../assets/images/wallpaper2.png" alt="wallpaper" />
      <div class="line-three">
        <img src="../assets/images/third-first.jpg" alt="third-first" />
        <img src="../assets/images/third-second.jpg" alt="third-second" />
      </div>
      <div class="line-four">
        <img src="../assets/images/last-one.jpg" alt="last-one" />
        <img src="../assets/images/last-last.jpg" alt="last-last" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
</script>

<style lang="scss" scoped>
@use "../assets/variables" as var;

.artworks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var.$text-color;

  .my-portfolio {
    @include var.fontAbril(96px, 400, normal);
  }

  .images {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
