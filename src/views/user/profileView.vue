<template>
  <HeaderBar />
  <!-- M A I N -->
  <div class="flex flex-row justify-between px-20 w-full">
    <!-- left container -->
    <div class="rounded-[48px] !py-12 !px-9 bg-[#f4f4ed]">
      <!--profile infos-->
      <div class="flex flex-col !gap-4 w-full">
        <!--edit-->
        <div class="flex flex-row !gap-2 w-full">
          <!-- profile header -->
          <div class="flex flex-row gap-5 justify-start items-end w-full">
            <img
              src="@/components/icons/icon.png"
              alt="foto"
              class="rounded-full w-[60px] h-[60px]"
            />
            <div class="flex flex-col justify-start items-start">
              <span class="font-semibold !text-2xl">Joãozin o bacana</span>
              <span class="!text-xl text-gray-500"
                >Joao Bacana da Silva Sauro</span
              >
            </div>
          </div>
          <!--edit-->
          <div class="flex flex-col"></div>
        </div>
        <!--badges-->
        <!--<div class=""></div>-->
      </div>
      <!--middle infos-->
      <div class="flex flex-col gap-4 !px-2 w-full"></div>
      <!--favorites-->
      <div class="flex flex-col gap-12 w-full"></div>
    </div>
    <!-- right container-->
  </div>
  <FooterBar />
</template>

<script setup>
import HeaderBar from "@/components/layout/HeaderBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
</script>

<style lang="scss" scoped></style>
