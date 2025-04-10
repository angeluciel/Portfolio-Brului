<template>
  <RouterLink
    :to="to"
    :class="{ active: isActive }"
    class="header-link"
    @click="setActive"
  >
    {{ text }}
  </RouterLink>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, watch } from "vue";

const props = defineProps({
  to: { type: String, required: true },
  text: { type: String, required: true },
  activeLink: String,
  setActiveLink: Function,
});

const route = useRoute();
const isActive = ref(route.path === props.to);

function setActive() {
  props.setActiveLink(props.text.toLowerCase());
}

watch(
  () => route.path,
  (newPath) => {
    isActive.value = newPath === props.to;
  }
);
</script>

<style scoped lang="scss">
@use "@/assets/variables.scss" as var;

.header-link {
  padding: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  color: black;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
}

.header-link.active {
  color: var.$gold-text;
  font-weight: 700;
}

.header-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background-color: black;
  transition: width 0.3s ease;
}

.header-link:hover::after {
  width: 100%;
}

.header-link.active:hover::after {
  background-color: var.$gold-text;
  width: 100%;
}
</style>
