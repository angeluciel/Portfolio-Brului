<template>
  <div
    class="flex flex-row justify-between items-center !px-12 !py-8 w-full bg-white"
  >
    <div class="flex flex-row gap-4 justify-center items-center">
      <router-link
        to="/"
        class="w-[48px] h-[48px] overflow-hidden rounded-full"
      >
        <img
          src="../../assets/images/first-second.jpg"
          alt="bruna"
          class="size-[68px] object-cover object-[80%_-90%] scale-200"
        />
      </router-link>
      <router-link
        to="/prices"
        class="flex flex-row gap-2 items-center !py-2 !px-6 rounded-4xl bg-red-300 shadow-[0px_0px_16px_1px_rgba(163,22,16,0.5)] hover:scale-90 transition-all active:bg-red-200 active:!text-white active:shadow-none duration-200"
      >
        <span class="uppercase font-medium tracking-wide !text-sm">prices</span>
        <Icon icon="tabler:chevron-right" width="24" height="24" />
      </router-link>
    </div>
    <!--O P T I O N S-->
    <div class="flex flex-row gap-8 items-start justify-center"></div>
    <div class="flex flex-row items-center justify-end gap-4">
      <HeaderLink
        to="/"
        text="Home"
        :activeLink="activeLink"
        :setActiveLink="setActiveLink"
      />
      <HeaderLink
        to="/gallery"
        text="Gallery"
        :activeLink="activeLink"
        :setActiveLink="setActiveLink"
      />
      <HeaderLink
        to="/contacts"
        text="Contacts"
        :activeLink="activeLink"
        :setActiveLink="setActiveLink"
      />
      <HeaderLink
        to="/prices"
        text="Prices"
        :activeLink="activeLink"
        :setActiveLink="setActiveLink"
      />
      <router-link
        to="/profile"
        v-if="userStore.isLoggedIn"
        class="hover:text-gray-500 font-medium text-base"
        >{{ userStore.username }}</router-link
      >
      <router-link
        v-else
        to="/login"
        class="hover:text-gray-500 font-medium text-base"
        ><span class="hover:text-gray-500 !font-medium !text-[16px] uppercase"
          >sign in</span
        ></router-link
      >

      <router-link to="/profile"
        ><img
          v-if="userStore.hasProfilePictre"
          src="@/components/icons/icon.png"
          alt="profile"
          class="rounded-full w-[68px] h-[68px]"
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
import HeaderLink from "@/components/base/HeaderLink.vue";

const userStore = useUserStore();

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
