<template>
  <div class="flex flex-col justify-start items-start gap-2">
    <!-- INPUT COMPONENT-->
    <span class="text-2xl font-semibold">{{ title }}</span>
    <div class="flex flex-row gap-4 px-4 py-2 items-start justify-center">
      <!-- BOX -->
      <Icon v-if="icon" :icon="icon" class="" />
      <input :placeholder="placeholder" :type="type" class="" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  variant: { type: String, default: "login" },
  icon: String,
  title: String,
  placeholder: String,
  type: { type: String, default: "Text" },
});
</script>

<style scoped></style>
