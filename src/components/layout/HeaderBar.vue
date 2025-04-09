<template>
  <div class="header">
    <router-link to="/">
      <img src="@/components/icons/icon.png" alt="bruna" class="pfp_image" />
    </router-link>

    <div class="options">
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
    </div>
    <div class="direita">
      <router-link
        to="/profile"
        v-if="userStore.isLoggedIn"
        class="hover:text-gray-500"
        >{{ userStore.username }}</router-link
      >
      <router-link v-else to="/login">sign in</router-link>

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

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.pfp_image {
  width: 100px;
  border-radius: 100%;
}

.options {
  display: flex;
  flex-direction: row;
  gap: 43px;
  align-items: start;
  justify-content: center;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  width: 100%;

  .direita {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 16px;

    > .loginBtn {
      color: #646464;
    }
  }
}

.shop {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid black;
  border-radius: 32px;
  padding: 0.2rem 0.8rem;
  gap: 10px;
}

.icon {
  height: 32px;
  width: 32px;
}
</style>
