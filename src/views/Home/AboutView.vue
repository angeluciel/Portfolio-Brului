<template>
  <div
    class="flex flex-col items-center justify-between py-80 h-[200dvh] w-full bg-violet-50 dark:bg-zinc-900 overflow-x-hidden"
  >
    <h1 class="!font-abril !text-xl text-black" ref="buttonText">
      Still in Progress
    </h1>
    <span class="font-black">Content still being made</span>
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
