<template>
  <div class="flex flex-col w-dvw gap-8 bg-blue-100">
    <HeaderBar />
    <!-- M A I N -->
    <div class="flex flex-row items-start justify-between w-full !p-10">
      <!-- L E F T  C O N T A I N E R-->
      <div class="flex flex-col gap-9 !py-12 !px-9 bg-[#E5E5D9] rounded-3xl">
        <!-- profile infos -->
        <div class="flex flex-col w-full gap-1">
          <!-- top infos -->
          <div class="flex flex-row gap-2 w-full">
            <!-- left part -->
            <div class="flex flex-row gap-5 justify-start items-end w-full">
              <img
                src="https://i.pinimg.com/736x/ff/ea/b4/ffeab4e9eab37e9a84d858560ae197f6.jpg"
                alt="profile"
                class="rounded-full w-[80px] h-[80px] border-2 border-black !p-[2px]"
              />
              <!-- nomes -->
              <div class="flex flex-col">
                <h1 class="!text-lg font-bold tracking-wide">Joãozin</h1>
                <span class="!text-base">Joãozin o Bacana da Silva</span>
              </div>
            </div>
            <!-- edit part -->
            <div class="flex flex-col items-center justify-start">
              <button
                class="w-[60px] h-[60px] bg-gray-500 rounded-2xl"
              ></button>
              <span class="!text-sm !text-gray-500">editar</span>
            </div>
          </div>
        </div>
        <!-- user infos -->
        <div class="flex flex-col !px-2 w-full">
          <span v-for="info in userinfo" :key="info.label">
            <span class="!text-sm">{{ info.label }}: {{ info.value }}</span>
          </span>
        </div>
        <!-- favorites -->
        <div class="flex flex-col gap-12 w-full">
          <!-- header -->
          <div
            class="w-full flex flex-row gap-3 items-center !p-2 border-b-2 border-black"
          >
            <span>Favorite Artworks</span>
            <Icon icon="ri:heart-3-fill" width="24" height="24" />
          </div>
          <!-- images -->
          <div class="flex flex-wrap gap-8 justify-start items-start">
            <!-- img container -->
            <div class="relative lg:max-w-[150px] md:max-w-[100px]">
              <img src="../../assets/images/third-first.jpg" alt="image" />
              <button class="absolute top-2 right-2">
                <Icon
                  icon="ri:heart-3-fill"
                  width="24"
                  height="24"
                  class="text-red-500"
                />
              </button>
            </div>
            <div class="relative lg:max-w-[150px] md:max-w-[100px]">
              <img src="../../assets/images/third-first.jpg" alt="image" />
              <button class="absolute top-2 right-2">
                <Icon
                  icon="ri:heart-3-fill"
                  width="24"
                  height="24"
                  class="text-red-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- R I G H T  C O N T A I N E R -->
      <div class="flex flex-col gap-3 !py-10 !px-5 bg-[#E5E5D9] rounded-3xl">
        <h1 class="text-2xl font-bold !px-4">Order History</h1>
        <span class="!px-4">Comission: {{ userinfo[1].value }}</span>
        <!-- comission description -->
        <div
          class="flex flex-row w-full items-start justify-start !p-6 gap-6 border-b-2 border-black"
        >
          <img
            src="../../assets/images/last-last.jpg"
            alt="comission"
            class="max-w-[200px] rounded-3xl"
          />
          <!-- descriptions -->
          <div class="flex flex-col">
            <div v-for="info in comInfo" :key="info.label" class="!text-sm">
              {{ info.label }}: {{ info.value }}
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full items-start justify-start !p-6 gap-6">
          <img
            src="../../assets/images/last-last.jpg"
            alt="comission"
            class="max-w-[200px] rounded-3xl"
          />
          <!-- descriptions -->
          <div class="flex flex-col">
            <div v-for="info in comInfo" :key="info.label" class="!text-sm">
              {{ info.label }}: {{ info.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from "@/components/layout/HeaderBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import { Icon } from "@iconify/vue";

const joindate = "21/03/2025";
const userinfo = [
  { label: "Joined in", value: "21/03/2025" },
  { label: "First Comission", value: "24/03/2025" },
  { label: "Contacts", value: "joaozin@gmail.com" },
];

const comInfo = [
  { label: "First Contact", value: "21/03/2025" },
  { label: "Delivered", value: "24/03/2025" },
  { label: "Size", value: "Face" },
  { label: "Package", value: "Premium" },
  { label: "Price", value: "R$150.00" },
];
</script>

<style lang="scss" scoped></style>
