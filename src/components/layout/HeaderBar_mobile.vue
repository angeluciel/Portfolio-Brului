<template>
  <!-- MAIN CONTENT -->
  <div
    class="flex justify-between items-center w-full !py-3 !px-5 md:!px-20 md:!py-8"
  >
    <!-- L E F T -->
    <div class="flex justify-start items-center gap-4">
      <!-- P F P -->
      <router-link
        to="/"
        class="w-[48px] h-[48px] overflow-hidden rounded-full"
        :class="{
          'opacity-0': isMenuOpen,
          'header-item-active': route.path === '/',
        }"
      >
        <img
          src="/images/gostosao_ouro.jpg"
          alt="bruna"
          class="size-[68px] object-cover object-[60%_50%] scale-120"
        />
      </router-link>
      <!-- D E S K T O P   O P T I O N S -->
      <div class="hidden md:flex md:gap-4">
        <router-link
          to="/"
          class="header-item"
          :class="{ 'header-item-active': route.path === '/' }"
        >
          home</router-link
        >
        <router-link
          to="/contacts"
          class="header-item"
          :class="{ 'header-item-active': route.path === '/contacts' }"
        >
          contacts</router-link
        >
        <router-link
          to="/prices"
          class="header-item"
          :class="{ 'header-item-active': route.path === '/prices' }"
        >
          prices</router-link
        >
      </div>
    </div>
    <!-- R I G H T -->
    <div class="flex justify-end items-center gap-6">
      <router-link
        to="/gallery"
        class="hidden md:flex flex-row gap-2 items-center !py-2 !px-6 rounded-4xl [&>*]:text-white bg-[#597DA1] shadow-[0px_0px_8px_1px_rgba(89,125,161,0.5)] hover:scale-90 transition-all active:bg-[#395C83] active:!text-white active:shadow-none duration-200"
      >
        <span class="uppercase font-medium tracking-wide text-[1.1em] z-40"
          >gallery</span
        >
        <Icon icon="tabler:chevron-right" width="24" height="24" />
      </router-link>
      <router-link
        v-if="userStore.isLoggedIn"
        to="/profile"
        class="header-item"
        :class="{ 'header-item-active': route.path === '/profile' }"
        >{{ userStore.username }}</router-link
      >
      <router-link
        v-else
        to="/login"
        class="header-item"
        :class="{ 'header-item-active': route.path === '/login' }"
        >sign in</router-link
      >

      <router-link to="/profile"
        ><img
          v-if="userStore.isLoggedIn"
          src="https://i.pinimg.com/736x/ff/ea/b4/ffeab4e9eab37e9a84d858560ae197f6.jpg"
          alt="profile"
          class="rounded-full w-[48px] h-[48px]"
        />

        <Icon
          v-else
          icon="ri:user-3-line"
          width="32"
          height="32"
          :class="isMenuOpen ? 'opacity-0' : ''"
        />
      </router-link>
      <Icon
        icon="ri:menu-2-fill"
        width="32"
        height="32"
        class="md:hidden relative z-50"
        @click="showMobileMenu"
      />
    </div>
  </div>

  <!-- M O B I L E M E N U-->
  <div v-if="isMenuOpen" class="md:hidden w-dvw h-dvh overflow-hidden bg-white">
    <div
      class="flex flex-col !px-5 justify-start w-full text-2xl uppercase gap-3 font-medium [&>*]:h-8"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/prices">prices</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/contacts">contacts</router-link>
      <router-link to="/login">sign in</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const route = useRoute();

const isMenuOpen = ref(false);

function showMobileMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleLogin() {
  userStore.logIn(
    "João",
    "https://media.tenor.com/4MJy0Q1rejAAAAAe/guts-pfp.png"
  );
}
function handleLogout() {
  userStore.logOut();
}

const NavBar = () => {
  useState;
};

const activeLink = ref("home");

function setActiveLink(link) {
  activeLink.value = link;
}
</script>

<style lang="scss" scoped></style>
