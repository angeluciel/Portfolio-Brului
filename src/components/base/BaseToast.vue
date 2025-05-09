<template>
  <div
    v-if="visible"
    class="hidden md:block fixed top-6 right-6 bg-black/50 text-white py-3 rounded-xl shadow-md z-[9999] transition-opacity duration-300"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{message: string}>();
const visible = ref(false);

watch(
  () => props.message,
  (msg) => {
    if (msg) {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 4000);
    }
  }
);

</script>
