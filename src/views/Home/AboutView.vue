<template>
  <div class="pt-80 h-[200dvh] w-full bg-violet-50 overflow-x-hidden">
    <span class="home-heading !text-black" ref="buttonText">NEW HORIZONS</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const buttonText = ref(null);

onMounted(() => {
  const split = new SplitText(buttonText.value, { type: "lines" });
});
</script>

<style lang="scss" scoped></style>
