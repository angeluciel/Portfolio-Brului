<template>
  <Toast/>
  <div v-if="showPreloader" ref="preloaderRef" class="fixed inset-0 z-[6000] flex">
    <div v-for="i in 10" :key="i" class="preloader-item h-full w-[10%] bg-black">
    </div>
    <p
        class="name-text flex text-[20vw] lg:text-[200px] font-bold text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
      <span v-for="letter in nameLetters" :key="letter.id" class="font-abril inline-block translate-y-full">
        {{ letter.char }}
      </span>
    </p>
  </div>
  <router-view/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {gsap} from "gsap";

const preloaderRef = ref(null)
const showPreloader = ref(true)

const nameLetters = [
  { id: 1, char:"B"},
  { id: 2, char:"R"},
  { id: 3, char:"U"},
  { id: 4, char:"L"},
  { id: 5, char:"U"},
  { id: 6, char:"I"},
]

onMounted(() => {
  const tl = gsap.timeline({
    defaults: {
      ease: 'power1.inOut',
    },
  })

  tl.to('.name-text span', {
    y: 0,
    stagger: 0.05,
    duration: 0.2
  })
      .to('.preloader-item', {
        delay: 1,
        y: '100%',
        duration: 0.5,
        stagger: 0.1,
      }, '<0.5')

      .to('.name-text span', {
        autoAlpha: 0
      }, '<0.5')

      .to(preloaderRef.value, {
        autoAlpha: 0,
        onComplete: () => {
          showPreloader.value = false
        }
      }, '<1')

})

</script>

<style scoped>
.name-text {
  font-family: 'Arial Black', sans-serif;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.name-text span {
  transform: translateY(100%);
}
</style>