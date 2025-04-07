<template>
  <div
    class="flex flex-row gap-10 !p-10 justify-start items-center h-dvh w-dvw"
  >
    <!-- E V E R Y T H I NG -->
    <div
      class="flex flex-col w-full h-full !py-5 !px-5 justify-between items-center shadow-[4px_4px_32px_rgba(0,0,0,0.2)] rounded-[20px] bg-[#E9E9E2]"
    >
      <!-- T O P -->
      <div class="">
        <!-- B R E A D C R U M B S -->
        <div class="flex flex-row gap-2">
          <router-link to="/prices" class=""
            ><span class="text-gray-400 font-normal hover:text-gray-500"
              >prices</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <span class="text-charcoal font-semibold">contacts</span>
        </div>
        <!-- H E A D I N G-->
        <h1 class="font-extrabold !text-2xl text-charcoal">
          Can you help me contact you so we can work together?
        </h1>
        <!-- S U B H E A D I N G-->
        <span class="!text-xl text-[#C89396]"
          >Feel free to share any form of contact you use so that I can contact
          you with the initial steps.</span
        >
      </div>
      <!-- B O X E S -->
      <form class="flex flex-col gap-16 justify-start items-start w-full">
        <div class="flex flex-col gap-4 w-full sm:gap-0 heightQuery">
          <!-- I N P U T S -->
          <baseInput
            title="Phone Number"
            placeholder="+1 (00) 000-0000"
            variant="forms"
            type="text"
          />
          <baseInput
            title="Email"
            placeholder="Your email"
            variant="forms"
            type="email"
          />
          <baseInput
            title="Twitter"
            placeholder="@bru__lui"
            variant="forms"
            type="text"
          />
          <baseInput
            title="Instagram"
            placeholder="@Bru__Lui"
            variant="forms"
            type="text"
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
    </div>
    <!-- R I G H T -->
    <div class="flex h-full !w-[100dvw]">
      <img
        src="../../assets/images/second-first.jpg"
        alt="drawing"
        class="object-cover object-right-top h-full w-full rounded-4xl"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import baseButton from "@/components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
import step1Page from "@/components/forms/step1Page.vue";
</script>

<style lang="scss" scoped>
@media (max-height: 1000px) {
  .heightQuery {
    gap: 0;
  }
}
</style>
