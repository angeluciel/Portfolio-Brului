<template>
  <div class="bg-[#C6C5D4]">
    <HeaderBar />
    <!-- Content -->
    <div class="flex flex-col w-full justify-center items-center !py-20 gap-5">
      <!--top content-->
      <div class="flex w-full lg:!px-64 md:!px-56 gap-5">
        <!--head-->
        <div
          class="flex !px-24 items-center gap-5 !py-2 w-full bg-white rounded-xl"
        >
          <img
            src="https://i.pinimg.com/736x/ff/ea/b4/ffeab4e9eab37e9a84d858560ae197f6.jpg"
            alt="pfp"
            class="w-20 rounded-full"
          />
          <div class="flex flex-col justify-start items-start">
            <h2 class="text-2xl text-gray-800 font-semibold">
              Joãozinho Bacano da Silva Sauro
            </h2>
            <span class="text-xl font-bold text-gray-400"
              >jao.bacano@silva.tv</span
            >
          </div>
        </div>
      </div>
      <!-- mid content -->
      <div class="flex w-full lg:!px-64 md:!px-56 gap-5">
        <!-- head -->
        <div class="flex flex-col w-full bg-white rounded-xl">
          <ul>
            <li
              class="flex items-start justify-start gap-3 rounded-xl !px-16 !py-5 w-full hover:bg-gray-300 hover:"
            >
              <div
                class="text-gray-400 rounded-full border-2 border-gray-400 !p-3"
              >
                <Icon icon="ion:card-outline" width="32" height="32" />
              </div>
              <!--text-->
              <div class="flex flex-col">
                <h3 class="text-2xl text-charcoal font-medium">
                  Suas informações
                </h3>
                <span class="text-gray-400 text-xl font-medium"
                  >Suas preferências de contato e perfil.</span
                >
              </div>
            </li>
          </ul>
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
</script>

<style lang="scss" scoped></style>
