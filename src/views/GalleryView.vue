<template>
  <HeaderBar />
  <!--C O N T E N T-->
  <div class="flex flex-col gap-10 !px-[100px]">
    <h1 class="uppercase !text-6xl !font-medium">My Artwork</h1>
    <span class="!text-2xl"
      >Enjoy a view into my past pieces, and interact with them to see how they
      match our categories.</span
    >
    <!-- B E S T  O F  2 0 2 4 -->
    <div
      class="flex flex-col justify-center items-center gap-6 !py-3 w-full border-t-2 border-black"
    >
      <span class="font-bold text-2xl w-full">Best of 2024</span>
      <div class="flex flex-wrap justify-between w-full gap-10">
        <img
          src="../../src/assets/images/first-first.jpg"
          alt="redhair"
          class="max-w-[350px]"
        />
        <img
          src="@/assets/images/wallpaper1.png"
          alt="redhair"
          class="max-w-[800px] md:max-w-[500px] object-contain"
        />
        <img
          src="@/assets/images/second-second.jpg"
          alt="redhair"
          class="max-w-[350px]"
        />
        <img
          src="@/assets/images/third-first.jpg"
          alt="redhair"
          class="max-w-[350px]"
        />
        <img
          src="@/assets/images/first-second.jpg"
          alt="redhair"
          class="max-w-[350px]"
        />
        <img
          src="@/assets/images/last-one.jpg"
          alt="redhair"
          class="max-w-[350px]"
        />
        <img src="@/assets/images/wallpaper2.png" alt="redhair" />
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script setup>
import HeaderBar from "@/components/layout/HeaderBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import { ref, computed } from "vue";
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

h1 {
  @include var.fontAbril(56px, 300, normal);
  color: var.$login_charcoal;
}
</style>
