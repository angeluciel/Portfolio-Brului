<script setup>
import CardTemplateVue from "@/components/base/CardTemplate.vue";
import HeaderBar from "../components/layout/HeaderBar.vue";
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <main>
    <HeaderBar_mobile class="sm:hidden" />
    <!-- B O D Y -->
    <div class="flex flex-col gap-4 w-dvw !py-12">
      <!-- N A V B A R -->
      <div
        class="flex flex-col sm:flex-col justify-between gap-4 items-center w-full !pl-6 sm:!px-24 relative"
      >
        <!-- W H I T E   F A D E-->
        <div
          class="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent"
        ></div>

        <!-- right fade (white → transparent) -->
        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent"
        ></div>
        <!-- T O P -->
        <div
          class="flex flex-col sm:flex-row gap-8 sm:justify-between justify-center w-full"
        >
          <h1 class="!font-abril !text-4xl text-charcoal sm:!text-5xl">
            Place your Order
          </h1>
          <!-- R I G H T -->
          <div class="flex flex-col items-start">
            <span>Need something that's not on the menu?</span>
            <!-- G O L D E N   P A R T-->
            <div class="flex text-gold-500">
              <span>Let me know how I can help!</span>
              <Icon icon="ri:arrow-right-up-line" width="24" height="24" />
            </div>
          </div>
        </div>
        <!-- B O T T O M -->
        <div
          class="flex justify-around w-full sm:[&>*]:w-full sm:[&>*]:text-center overflow-x-scroll gap-8 sm:gap-0 no-scrollbar"
        >
          <!-- OPTIONS -->
          <div class="!p-1 sm:!py-3 sm:!px-5 hover:bg-gray-100 text-nowrap">
            All Prices
          </div>
          <div class="!p-1 sm:!py-3 sm:!px-5 hover:bg-gray-100 text-nowrap">
            Complete Render
          </div>
          <div class="!p-1 sm:!py-3 sm:!px-5 hover:bg-gray-100 text-nowrap">
            Lineart + Base Color
          </div>
          <div class="!p-1 sm:!py-3 sm:!px-5 hover:bg-gray-100 text-nowrap">
            Emotes
          </div>
          <div class="!p-1 sm:!py-3 sm:!px-5 hover:bg-gray-100 text-nowrap">
            Background
          </div>
        </div>
      </div>
      <!-- C O N T E N T -->
      <div class="flex-col w-dvw">
        <div class="flex w-full !pl-6 sm:!px-24">
          <span class="!font-abril text-2xl">All Services.</span>
          <span class="!font-abril text-2xl text-gold-500">Choose Yours!</span>
        </div>
        <div class="card_section">
          <CardTemplateVue />
          <CardTemplateVue />
          <CardTemplateVue />
        </div>
      </div>
    </div>
  </main>

  <div class="hidden sm:block">
    <FooterBar />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/variables";

.text {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;

  .header_comission {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: variables.$semibold-weight;
  }

  .bottom_text {
    display: flex;
    flex-direction: column;
    .choose_a_plan,
    .idk {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 24px;
      font-weight: variables.$semibold-weight;
    }
    .idk {
      text-decoration: underline;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .idk:hover {
      color: variables.$text-color;
      opacity: 50%;
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 0 2rem 0;
}

.card_section {
  display: flex;
  justify-content: center;
  gap: 48px;
  align-items: center;
  padding: 0 100px;
  width: 100vw;
  margin-top: 32px;
}
</style>
