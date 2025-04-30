<template>
  <div
    class="flex flex-row justify-between items-center !px-5 sm:!px-20 !py-8 w-full bg-white h-[10dvh] z-90"
  >
    <!--O P T I O N S-->

    <div class="flex flex-row items-center justify-end gap-4">
      <router-link
        to="/"
        class="w-[48px] h-[48px] overflow-hidden rounded-full z-40"
      >
        <img
          src="/images/gostosao_ouro.jpg"
          alt="bruna"
          class="size-[68px] object-cover object-[60%_50%] scale-120"
        />
      </router-link>
      <router-link
        to="/"
        class="header-item z-40"
        :class="{ 'header-item-active': route.path === '/' }"
        >home</router-link
      >
      <router-link
        to="/prices"
        class="header-item z-40"
        :class="{ 'header-item-active': route.path === '/prices' }"
        >prices</router-link
      >
      <router-link
        to="/contacts"
        class="header-item z-40"
        :class="{ 'header-item-active': route.path === '/contacts' }"
        >contacts</router-link
      >
    </div>
    <div class="flex flex-row gap-4 justify-center items-center">
      <router-link
        to="/gallery"
        class="flex flex-row gap-2 items-center !py-2 !px-6 rounded-4xl [&>*]:text-white bg-[#597DA1] shadow-[0px_0px_8px_1px_rgba(89,125,161,0.5)] hover:scale-90 transition-all active:bg-[#395C83] active:!text-white active:shadow-none duration-200"
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

        <Icon v-else icon="codicon:account" width="32" height="32" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { Icon } from "@iconify/vue";

const userStore = useUserStore();

import { useRoute } from "vue-router";

const route = useRoute();

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
