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
      <span
        class="text-charcoal font-semibold !text-base flex flex-col justify-end"
        >second</span
      >
    </div>
    <!-- H E A D I N G-->
    <h1 class="font-extrabold !text-2xl md:!text-lg text-charcoal">
      Care to describe how you would like your piece?
    </h1>
    <!-- S U B H E A D I N G-->
    <span class="!text-lg text-[#C89396]"
      >Would explain in general terms how your character should look.</span
    >
  </div>
  <!-- B O X E S -->
  <form class="flex flex-col gap-16 justify-start items-start w-full">
    <div class="flex flex-col gap-4 w-full sm:gap-0 heightQuery">
      <!-- I N P U T S -->
      <baseInput
        title="Color palette"
        placeholder="Green skin, dark hair, blue eyes..."
        variant="forms"
        type="text"
      />
      <baseInput
        title="Physical Traits"
        placeholder="Tall male, muscular body, scar on cheek"
        variant="forms"
        type="email"
      />
      <baseInput
        title="Pane"
        placeholder="Full body / half body / face pane"
        variant="forms"
        type="text"
      />
      <baseInput
        title="Reference Images"
        placeholder="Drag an image or click to select"
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
