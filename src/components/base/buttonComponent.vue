<template>
  <button
    class="flex-center text-black bg-home-blue-100 font-bold !px-10 !py-2 !text-sm tracking-wider rounded-4xl hover:rounded-xl transition-all ease-in-out duration-200 hover:translate-x-5 hover:w-56 w-48"
    @mouseenter="flickerText"
    @mouseleave="flickerText"
  >
    <Icon icon="ri:arrow-right-s-line" width="24" height="24" />
    <span ref="buttonText">Let's talk</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { Icon } from "@iconify/vue";

const buttonText = ref(null);
const originalText = "Let's talk";

const flickerChars = "!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function flickerText() {
  let iterations = 0;
  const maxIterations = 10;
  const interval = setInterval(() => {
    const text = originalText
      .split("")
      .map((char, i) => {
        if (i < iterations) return originalText[i];
        return flickerChars[Math.floor(Math.random() * flickerChars.length)];
      })
      .join("");

    buttonText.value.textContent = text;

    iterations += 1 / 3;
    if (iterations >= originalText.length) {
      clearInterval(interval);
      buttonText.value.textContent = originalText;
    }
  }, 40);
}
</script>

<style lang="scss" scoped></style>
