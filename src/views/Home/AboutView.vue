<template>
  <div
    class="flex justify-center pt-80 h-[200dvh] w-full bg-violet-50 overflow-x-hidden"
  >
    <span class="home-heading !text-black" ref="buttonText">PLACEHOLDER</span>
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
  gsap.from(split.lines, {
    y: 40,
    autoAlpha: 0,
    stagger: 0.05,
    duration: 0.6,
    ease: "back.out(1.7)",
  });
});
</script>

<style lang="scss" scoped></style>
