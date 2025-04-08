<template>
  <div
    class="flex flex-col justify-start items-start max-w-2xl gap-2 w-full mx-auto md:gap-0"
    v-bind="$attrs"
  >
    <span v-if="title" class="text-xl font-semibold md:!text-lg">{{
      title
    }}</span>
    <div :class="divClass">
      <div class="flex flex-row gap-2 w-full items-center justify-start">
        <Icon
          v-if="leftIcon"
          :icon="leftIcon"
          width="24"
          height="24"
          id="icon_input"
        />
        <input
          :placeholder="placeholder"
          :type="currentType"
          v-model="inputModel"
          class="focus:outline-none !text-lg w-full md:!text-base"
        />
      </div>
      <div class="w-100dvw flex flex-row justify-end cursor-pointer">
        <Icon
          v-if="shouldShowRightIcon"
          :icon="iconName"
          width="24"
          height="24"
          @click="switchVisibility"
          class="mr-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  variant: { type: String, default: "login" },
  leftIcon: String,
  icon: String,
  title: String,
  placeholder: String,
  type: { type: String, default: "Text" },
  isPasswordVisible: { type: Boolean, default: false },
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
  "flex flex-row gap-4 w-full !py-1 !px-4 items-center md:!py-0 rounded-[12px] border-[2px] ";

const divClass = computed(() => {
  let variantClasses = "";
  if (props.variant === "login") {
    variantClasses = "border-charcoal-50";
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
