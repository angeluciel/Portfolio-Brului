<template>
  <fieldset
    class="flex flex-col justify-start items-start gap-0 w-full mx-auto md:gap-2"
    v-bind="$attrs"
  >
    <label
      v-if="title"
      class="text-lg !font-bold !font-josefin text-violet-950 dark:text-violet-800 md:!text-xl w-full"
      >{{ title }}</label
    >
    <input
      :placeholder="placeholder"
      :type="currentType"
      v-model="inputModel"
      class="focus:outline-none !text-lg md:py-2 px-4 !w-full h-14 md:!text-base hover:shadow-[0_0_16px_rgba(109,40,217,0.4)] focus:shadow-[0_0_16px_rgba(109,40,217,0.4)] transition-[background-color,outline,color,box-shadow] duration-200 ease-in-out text-zinc-950 dark:text-zinc-400"
      :class="divClass"
    />
  </fieldset>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  variant: { type: String, default: "login" },
  icon: String,
  title: String,
  placeholder: String,
  type: { type: String, default: "Text" },
  modelValue: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);
const inputModel = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const baseClasses =
  "flex flex-row gap-4 w-full items-center md:!py-0 rounded-[12px] border-[1.5px] ";

const divClass = computed(() => {
  let variantClasses = "";
  if (props.variant === "login") {
    variantClasses = "border-violet-200 dark:border-zinc-800";
  } else if (props.variant === "forms") {
    variantClasses = "border-charcoal-10";
  }

  return `${baseClasses} ${variantClasses}`;
});

// if the fieldtype is password and passwordvisible= true
const currentType = ref(
  props.type === "password" && props.isPasswordVisible ? "text" : props.type
);

const iconName = ref(
  props.type === "password" && props.isPasswordVisible
    ? "ri:eye-line"
    : "ri-eye-close-line"
);

const shouldShowRightIcon = computed(() => props.type === "password");

function switchVisibility() {
  if (currentType.value === "password") {
    currentType.value = "text";
    iconName.value = "ri:eye-line";
  } else {
    currentType.value = "password";
    iconName.value = "ri:eye-close-line";
  }
}
</script>

<style scoped></style>
