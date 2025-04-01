<template>
  <div>
    <!-- INPUT COMPONENT-->
    <span>{{ title }}</span>
    <div>
      <!-- BOX -->
      <Icon v-if="icon" :icon="icon" class="mr-2" />
      <input :placeholder="placeholder" :type="type" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  variant: { type: String, default: "login" },
  icon: String,
  title: String,
  placeholder: String,
  type: { type: String, default: "Text" },
});
</script>

<style scoped></style>
