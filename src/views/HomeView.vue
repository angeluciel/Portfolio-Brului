<template>
  <HeaderBar_mobile />
  <homeView />
  <AboutView />
  <footerBar />
</template>

<script setup>
import AboutView from "./Home/AboutView.vue";
import HomeView from "./Home/LandingView.vue";
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
</script>

<style lang="scss" scoped></style>
