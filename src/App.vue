<script setup>
import { gsap } from "gsap";
import { useAuthListener } from "@/composables/useAuthListener";
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
// thank you javascript mastery for the design ideas and inspirations.
</style>
