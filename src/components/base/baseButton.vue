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
  "flex flex-row py-2 px-2 justify-center items-center w-full h-12 rounded-xl gap-4 font-semibold";

const filledColors = {
  login: "bg-login-hg text-login-bg hover:bg-indigo-600",
  forms: "bg-red-200 text-white hover:bg-red-300",
};

const outlineColors = {
  login: "border border-login-hg text-login-hg hover:bg-login-hg/20",
  forms: "border border-red-200 text-red-200 hover:bg-red-200/20",
};

const ghostColors = {
  login: "text-login-hg hover:bg-login-hg/10",
  forms: "text-red-200 hover:bg-red-200/10",
};

const buttonClasses = computed(() => {
  let variantClasses = "";

  if (props.variant === "filled") {
    variantClasses = filledColors[props.color] || "";
  } else if (props.variant === "outline") {
    variantClasses = outlineColors[props.color] || "";
  } else if (props.variant === "ghost") {
    variantClasses = ghostColors[props.color] || "";
  }

  return `${baseClasses} ${variantClasses}`;
});
</script>

<style scoped></style>
