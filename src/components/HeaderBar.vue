<template>
  <div class="header">
    <div class="esquerda">
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
    </div>
    <img src="./icons/icon.png" alt="pfp" class="pfp_image" />
    <div class="direita">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderLink from "@/components/HeaderLink.vue";

const activeLink = ref("home");

function setActiveLink(link) {
  activeLink.value = link;
}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.pfp_image {
  width: 135px;
  border-radius: 100%;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 100px;
  width: 100%;
  margin-top: 32px;

  .esquerda,
  .direita {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 100px;
  }
}
</style>
