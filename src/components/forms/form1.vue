<template>
  <div class="flex flex-col justify-start items-start w-full">
    <!-- B R E A D C R U M B S -->
    <div class="flex flex-row gap-2">
      <router-link to="/prices" class="flex flex-col justify-end"
        ><span
          class="text-gray-400 font-normal hover:text-gray-500 !text-base flex flex-col"
          >prices</span
        ></router-link
      >
      <div class="cursor-alias">/</div>
      <span
        class="text-charcoal font-semibold !text-base flex flex-col justify-end"
        >contacts</span
      >
    </div>
    <!-- H E A D I N G-->
    <h1 class="font-extrabold !text-2xl md:!text-lg text-charcoal">
      First Steps
    </h1>
    <!-- S U B H E A D I N G-->
    <span class="!text-lg text-[#C89396]"
      >Feel free to share any form of contact you use so that I can contact you
      with the initial steps.</span
    >
  </div>
  <!-- B O X E S -->
  <form class="flex flex-col gap-16 justify-start items-start w-full">
    <div class="flex flex-col gap-4 w-full sm:gap-0 heightQuery">
      <!-- I N P U T S -->
      <baseInput
        title="Phone Number"
        placeholder="+1 (000) 000-0000"
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
  </form>
</template>

<script setup>
import baseInput from "../base/baseInput.vue";
</script>

<style lang="scss" scoped></style>
