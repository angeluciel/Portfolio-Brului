<template>
  <div class="flex flex-row gap-10 !p-5 justify-start items-center h-dvh w-dvw">
    <!-- E V E R Y T H I NG -->
    <div
      class="flex flex-col w-full h-full !py-2 !px-5 justify-evenly items-center shadow-[4px_4px_32px_rgba(0,0,0,0.2)] rounded-[20px] bg-[#E9E9E2] gap-2"
    >
      <!-- C H I L D  C O M P O N E N T -->
      <component :is="tabs[currentTab]"></component>

      <!-- B U T T O N  &  P R O G R E S S B A R-->
      <div class="flex flex-col gap-4 w-full">
        <!-- P R O G R E S S    B A R -->
        <div class="flex flex-row gap-6 justify-center">
          <div
            v-for="(form, index) in tabs"
            :key="index"
            class="w-18 h-4 md:h-2 rounded-full"
            :class="{
              'bg-[#D69093]': currentTab === index,
              'bg-[rgba(35,34,36,0.4)]': currentTab !== index,
            }"
          ></div>
        </div>
        <div class="w-full h-full px-6 py-5">
          <baseButton
            variant="filled"
            text="Next"
            color="forms"
            @click="nextTab"
          />
        </div>
      </div>
    </div>

    <!-- I M A G E -->
    <div class="flex h-full !w-[100dvw]">
      <img
        src="/images/second-first.jpg"
        alt="drawing"
        class="object-cover object-right-top h-full w-full rounded-4xl"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import form1 from "@/components/forms/form1.vue";
import form2 from "@/components/forms/form2.vue";
import form3 from "@/components/forms/form3.vue";
import form4 from "@/components/forms/form4.vue";
import baseButton from "@/components/base/baseButton.vue";

const currentTab = ref(0);

// Array of form components
const tabs = [form1, form2, form3, form4];

function nextTab() {
  if (currentTab.value < tabs.length - 1) {
    currentTab.value++;
  } else {
    console.log("All answers:", formStore.answers);
  }
}
</script>

<style lang="scss" scoped>
@media (max-height: 1000px) {
  .heightQuery {
    gap: 0;
  }
}
</style>
