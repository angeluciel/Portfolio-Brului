<template>
  <div class="bg-violet-100">
    <HeaderBar_mobile />
    <RouterView />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import FooterBar from "@/components/layout/FooterBar.vue";
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
</script>

<style scoped></style>
