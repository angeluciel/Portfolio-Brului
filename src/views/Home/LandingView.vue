<template>
  <!-- L O A D I N G -->
  <div
    v-if="isLoading"
    class="flex-center absolute z-[100] h-dvh w-full overflow-hidden bg-violet-50"
  >
    <div class="three-body">
      <div class="three-body__dot" />
      <div class="three-body__dot" />
      <div class="three-body__dot" />
    </div>
  </div>
  <!-- P A G E -->

  <div
    class="relative h-dvh w-full overflow-x-hidden bg-violet-50 overflow-y-hidden"
  >
    <div
      class="relative z-10 h-full w-full overflow-hidden rounded-lg bg-blue-75"
      ref="bgFrame"
    >
      <!-- background -->
      <div>
        <img
          src="/images/gostosao_ouro.jpg"
          alt="bg"
          class="absolute inset-0 size-full overflow-x-hidden object-cover object-center"
        />
        <div
          class="absolute left-0 top-0 size-full overflow-x-hidden object-cover object-center bg-[rgba(0,0,0,0.5)]"
        ></div>
      </div>
      <h1
        class="home-heading !font-abril absolute bottom-5 right-5 !text-violet-100 z-40 text-blue-75"
      >
        CHARACTERS.
      </h1>
      <div class="absolute left-0 top-0 z-40 size-full">
        <div class="mt-24 px-5 sm:px-10">
          <h1 class="home-heading text-violet-100">
            BUILD. <br />
            YOUR.
          </h1>
          <!-- B O T T O M -->
          <div class="relative h-24">
            <p
              class="!mb-5 absolute max-w-xl text-black top-[2px] left-[2px] font-josefin text-[1em] md:text-[1.5em]"
            >
              Step into a world where your <b>ideas</b> can come to life. Make
              art that goes <b>beyond imagination</b>.
            </p>
            <p
              class="!mb-5 absolute max-w-xl text-[#A12ED7] top-[1px] left-[1px] font-josefin text-[1em] md:text-[1.5em]"
            >
              Step into a world where your <b>ideas</b> can come to life. Make
              art that goes <b>beyond imagination</b>.
            </p>
            <p
              class="!mb-5 absolute max-w-xl text-[#91E7EF] font-josefin text-[1em] md:text-[1.5em]"
            >
              Step into a world where your <b>ideas</b> can come to life. Make
              art that goes <b>beyond imagination</b>.
            </p>
          </div>
          <!-- buttons -->
          <div
            class="flex items-center w-full justify-between md:justify-start md:gap-8 max-w-lg"
          >
            <buttonComponent></buttonComponent>
            <div class="flex gap-4 md:gap-8">
              <a
                class="instagram slide"
                href="https://www.instagram.com/bru__lui/"
                target="_blank"
              >
                <fa :icon="['fab', 'instagram']" />
              </a>
              <a
                href="https://twitter.com/Bru__Lui"
                class="twitter slide"
                target="_blank"
              >
                <fa :icon="['fab', 'x-twitter']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- O U T S I D E   T E X T -->
    <h1 class="home-heading !font-abril absolute bottom-5 right-5 text-black">
      CHARACTERS.
    </h1>
    <div class="w-screen h-dvh"></div>
  </div>
</template>

<script setup>
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import buttonComponent from "@/components/base/buttonComponent.vue";
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bgFrame = ref(null);
const isLoading = ref(false);

onMounted(() => {
  gsap.set(bgFrame.value, {
    clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
    borderRadius: "0 0 40% 10%",
  });

  gsap.from(bgFrame.value, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    borderRadius: "0 0 0 0",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: bgFrame.value,
      start: "center center",
      end: "bottom center",
      scrub: true,
    },
  });
});
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;
/* From Uiverse.io by G4b413l */
/* https://uiverse.io/G4b413l/tidy-walrus-92 */
.three-body {
  --uib-size: 35px;
  --uib-speed: 0.8s;
  --uib-color: #5d3fd3;
  position: relative;
  display: inline-block;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
}

.three-body__dot {
  position: absolute;
  height: 100%;
  width: 30%;
}

.three-body__dot:after {
  content: "";
  position: absolute;
  height: 0%;
  width: 100%;
  padding-bottom: 100%;
  background-color: var(--uib-color);
  border-radius: 50%;
}

.three-body__dot:nth-child(1) {
  bottom: 5%;
  left: 0;
  transform: rotate(60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite ease-in-out;
  animation-delay: calc(var(--uib-speed) * -0.3);
}

.three-body__dot:nth-child(2) {
  bottom: 5%;
  right: 0;
  transform: rotate(-60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15)
    ease-in-out;
}

.three-body__dot:nth-child(3) {
  bottom: -5%;
  left: 0;
  transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
  top: 0;
  left: 0;
  animation: wobble2 var(--uib-speed) infinite ease-in-out;
}

@keyframes spin78236 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes wobble1 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(-66%) scale(0.65);
    opacity: 0.8;
  }
}

@keyframes wobble2 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(66%) scale(0.65);
    opacity: 0.8;
  }
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  background-color: transparent;
  border: 2px solid var(--color);
  color: var(--color);
  transition: 0.25s;
  box-shadow: inset 0 0 0 0 var(--hover);

  &:hover,
  &:focus {
    box-shadow: inset 6.5em 0 0 0 var(--hover);
    color: #fff;
    border-color: var(--hover);
  }
  &:hover {
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }
}
</style>
