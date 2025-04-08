<template>
  <button :class="buttonClasses" v-bind="$attrs">
    <Icon v-if="icon" :icon="icon" class="mr-2" />
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  variant: { type: String, default: "filled" },
  icon: String,
  text: String,
  color: { type: String, default: "login" },
});

const baseClasses =
  "flex flex-row py-2 px-2 justify-center items-center w-full max-w-2xl mx-auto h-12 rounded-xl gap-4 font-semibold cursor-pointer transition-all duration-100 md:!h-10";

const filledColors = {
  login:
    "bg-login-hg text-login-bg hover:bg-indigo-600 hover:translate-1 shadow-[4px_4px_32px_rgba(39,52,211,0.5)] active:text-gray-400 active:translate-0",
  forms:
    "bg-red-300 text-white active:bg-red-400 hover:translate-1 shadow-[4px_4px_16px_rgba(214,144,147,0.2)] active:text-gray-400 active:translate-0",
};

const outlineColors = {
  login:
    "border border-login-hg text-login-hg hover:bg-login-hg/20 hover:translate-1 active:translate-0 active:text-login-hg-50",
  forms: "border border-red-200 text-red-200 hover:bg-red-200/20",
};

const buttonClasses = computed(() => {
  let variantClasses = "";

  if (props.variant === "filled") {
    variantClasses = filledColors[props.color] || "";
  } else if (props.variant === "outline") {
    variantClasses = outlineColors[props.color] || "";
  }

  return `${baseClasses} ${variantClasses}`;
});
</script>

<style scoped></style>
