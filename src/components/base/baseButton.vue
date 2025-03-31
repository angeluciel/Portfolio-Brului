<template>
  <button :class="buttonClasses" v-bind="$attrs">
    <Icon v-if="icon" :icon="icon" class="mr-2" />
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps(["variant", "icon", "text"]);

const buttonClasses = computed(() => {
  const baseClasses =
    "flex flex-row py-2 px-2 justify-center items-center w-full h-12 rounded-xl gap-4 font-semibold";

  const variants = {
    filled: "bg-login-hg text-login-bg hover:bg-indigo-600",
    outline:
      "border border-indigo-600 border-2 text-indigo-600 hover:bg-indigo-100",
    ghost: "text-indigo-600 hover:bg-indigo-50",
  };

  return [baseClasses, variants[props.variant]];
});
</script>

<style scoped></style>
