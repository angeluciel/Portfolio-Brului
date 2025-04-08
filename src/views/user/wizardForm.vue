<template>
  <!-- F O R M S-->
  <div class="w-dvw h-dvh !gap-10">
    <!-- C O N T E N T -->
    <div
      class="w-full h-full flex flex-col items-start justify-between !py-20 !px-11"
    >
      <!-- breadcrumbs, heading and input-->
      <div class="flex flex-col items-start justify-start !gap-4">
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
        <!-- S T E P S -->
        <div class="">
          <h1 class="font-extrabold !text-2xl text-charcoal">
            Can you help me contact you so we can work together?
          </h1>
          <!-- S U B H E A D I N G-->
          <span class="!text-xl text-[#C89396]"
            >Feel free to share any form of contact you use so that I can
            contact you with the initial steps.</span
          >
          <!-- I N P U T S -->
          <form>
            <baseInput
              title="Phone Number"
              placeholder="+1 (000) 000-0000"
              variant="forms"
              type="text"
            />
            <baseInput
              title="Phone Number"
              placeholder="+1 (000) 000-0000"
              variant="forms"
              type="text"
            />
          </form>
        </div>
      </div>
    </div>
    <!-- I M A G E -->
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
import baseInput from "@/components/base/baseInput.vue";
</script>

<style lang="scss" scoped></style>
