<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col gap-16 justify-start items-start w-full"
  >
    <div class="flex flex-col gap-4 w-full sm:gap-0 heightQuery">
      <!-- I N P U T S -->
      <baseInput
        title="Color Palette"
        placeholder="Green skin, dark hair, blue eyes..."
        variant="forms"
        type="text"
        v-model="formAnswers.color"
      />
      <baseInput
        title="Phyisical Traits"
        placeholder="Tall male, muscular body, scarred eye..."
        variant="forms"
        type="email"
        v-model="formAnswers.traits"
      />
      <baseInput
        title="Pane"
        placeholder="Full body / half body / face pane"
        variant="forms"
        type="text"
        v-model="formAnswers.pane"
      />
      <baseInput
        title="Reference Images"
        placeholder="Drag an image or click to select"
        variant="forms"
        type="text"
        v-model="formAnswers.images"
      />
    </div>
    <!-- B O T T O M -->
    <div class="flex flex-col gap-4 w-full">
      <!-- P R O G R E S S    B A R -->
      <div class="flex flex-row gap-6">
        <div
          class="w-full h-3 rounded-full"
          :class="{
            'bg-[#D69093]': currentStep === 1,
            'bg-[rgba(35,34,36,0.4)]': currentStep !== 1,
          }"
        ></div>
        <div
          class="w-full h-3 rounded-full"
          :class="{
            'bg-[#D69093]': currentStep === 2,
            'bg-[rgba(35,34,36,0.4)]': currentStep !== 2,
          }"
        ></div>
        <div
          class="w-full h-3 rounded-full"
          :class="{
            'bg-[#D69093]': currentStep === 3,
            'bg-[rgba(35,34,36,0.4)]': currentStep !== 3,
          }"
        ></div>
        <div
          class="w-full h-3 rounded-full"
          :class="{
            'bg-[#D69093]': currentStep === 4,
            'bg-[rgba(35,34,36,0.4)]': currentStep !== 4,
          }"
        ></div>
      </div>
      <div class="w-full h-full px-6 py-5">
        <baseButton variant="filled" text="Next" color="forms" />
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import baseButton from "@/components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
import router from "@/router";

const formAnswers = reactive({
  color: "",
  traits: "",
  pane: "",
  images: "",
});

const currentStep = ref(1);

function handleSubmit() {
  console.log(`Respostas da etapa 1: ${formAnswers}`);

  if (currentStep.value < 4) {
    currentStep.value++;
  }
}
</script>

<style lang="scss" scoped></style>
