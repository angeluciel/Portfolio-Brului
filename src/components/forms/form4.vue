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
      <router-link to="/prices" class="flex flex-col justify-end"
        ><span
          class="text-gray-400 font-normal hover:text-gray-500 !text-base flex flex-col"
          >contacts</span
        ></router-link
      >
      <div class="cursor-alias">/</div>
      <router-link to="/prices" class="flex flex-col justify-end"
        ><span
          class="text-gray-400 font-normal hover:text-gray-500 !text-base flex flex-col"
          >contacts</span
        ></router-link
      >
      <div class="cursor-alias">/</div>
      <router-link to="/prices" class="flex flex-col justify-end"
        ><span
          class="text-gray-400 font-normal hover:text-gray-500 !text-base flex flex-col"
          >second</span
        ></router-link
      >
      <div class="cursor-alias">/</div>
      <router-link to="/prices" class="flex flex-col justify-end"
        ><span
          class="text-gray-400 font-normal hover:text-gray-500 !text-base flex flex-col"
          >third</span
        ></router-link
      >
      <div class="cursor-alias">/</div>
      <span
        class="text-charcoal font-semibold !text-base flex flex-col justify-end"
        >last</span
      >
    </div>
    <!-- H E A D I N G-->
    <h1 class="font-extrabold !text-2xl md:!text-lg text-charcoal">
      Extra Details
    </h1>
    <!-- S U B H E A D I N G-->
    <span class="!text-lg text-[#C89396]"
      >A space to share any extra details or important instructions for
      me.</span
    >
  </div>
  <!-- B O X E S -->
  <form class="flex flex-col gap-16 justify-start items-start w-full">
    <div class="flex flex-col gap-4 w-full sm:gap-0 heightQuery">
      <!-- I N P U T S -->
      <baseInput
        title="Main details"
        placeholder="Anything that HAS to be on the art?"
        variant="forms"
        type="text"
      />
      <baseInput
        title="Warning"
        placeholder="Anything I shouldn’t put on the art?"
        variant="forms"
        type="email"
      />
      <baseInput
        title="Extra preference"
        placeholder="Any extra requests? Objects, details or elements"
        variant="forms"
        type="text"
      />
      <baseInput
        title="Extra comments"
        placeholder="Anything you didn’t describe yet?"
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
