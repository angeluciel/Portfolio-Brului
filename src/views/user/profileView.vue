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
          <div class="relative flex justify-center items-center group">
            <img
              src="https://i.pinimg.com/736x/ff/ea/b4/ffeab4e9eab37e9a84d858560ae197f6.jpg"
              alt="pfp"
              class="w-20 rounded-full group-hover:opacity-70"
            />
            <div
              class="text-center rounded-full ease-in opacity-0 duration-100 absolute group-hover:opacity-100"
            >
              <button
                class="bg-white opacity-75 text-gray-600 rounded-full !p-1 hover:opacity-100"
              >
                <Icon icon="ri:camera-fill" width="32" height="32" />
              </button>
            </div>
          </div>

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
        <div class="flex flex-col w-full bg-white rounded-xl overflow-hidden">
          <ul class="gap-4">
            <li
              v-for="(item, index) in menuOptions"
              :key="item.route"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              <router-link
                :to="item.route"
                class="flex items-start justify-start gap-3 !px-16 !py-5 w-full hover:bg-gray-300 group active:bg-[#B7B7C3]"
              >
                <div
                  class="text-gray-400 rounded-full border-2 border-gray-400 !p-3 group-hover:text-purple-700 group-hover:border-purple-800 group-active:text-white group-active:border-white"
                >
                  <Icon
                    :icon="
                      hoveredIndex === index
                        ? item.icon.replace('-line', '-fill')
                        : item.icon
                    "
                    width="32"
                    height="32"
                  />
                </div>
                <!--text-->
                <div class="flex flex-col">
                  <h3
                    class="text-2xl text-charcoal font-medium group-active:text-white"
                  >
                    {{ item.title }}
                  </h3>
                  <span
                    class="text-gray-500 text-xl font-medium group-active:text-gray-200"
                    >{{ item.description }}</span
                  >
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full lg:!px-64 md:!px-56 gap-5">
        <button
          class="flex items-center gap-5 justify-start text-gray-500 group"
        >
          <Icon
            icon="ri:door-open-line"
            width="32"
            height="32"
            class="group-hover:text-red-400"
          />
          <span class="font-semibold group-hover:text-gray-600">Logoff</span>
        </button>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from "@/components/layout/HeaderBar.vue"; //nvm the error it means nothing
import FooterBar from "@/components/layout/FooterBar.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

interface MenuOption {
  title: string;
  description: string;
  icon: string;
  route: string;
}

const hoveredIndex = ref<number | null>(null);

const menuOptions: MenuOption[] = [
  {
    title: "Suas informações",
    description: "Suas preferências de contato e perfil",
    icon: "ri:bank-card-line",
    route: "/profile",
  },
  {
    title: "Segurança",
    description: "Suas medidas de segurança",
    icon: "ri:lock-2-line",
    route: "/profile",
  },
  {
    title: "Privacidade",
    description: "Quais conteúdos mostrar ou não mostrar",
    icon: "ri:user-4-line",
    route: "/profile",
  },
  {
    title: "Comissões",
    description: "Histórico de envios de Comissões",
    icon: "ri:artboard-line",
    route: "/profile",
  },
  {
    title: "Artes Favoritas",
    description: "Artes favoritas em 'Galeria'",
    icon: "ri:heart-3-line",
    route: "/gallery",
  },
];
</script>

<style lang="scss" scoped></style>
