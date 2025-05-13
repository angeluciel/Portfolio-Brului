<template>
  <div class="flex h-dvh overflow-hidden bg-background dark:bg-zinc-900">
    <!-- SIDE BAR -->
    <section
      class="flex justify-end w-[40dvw] bg-violet-300 h-full dark:bg-indigo-950"
    >
      <div
        class="flex flex-col items-start justify-between max-w-[400px] px-5 py-10"
      >
        <!-- user name and pfp -->
        <div class="flex gap-6 w-full items-center px-5">
          <img
            src="/images/genshin.jpg"
            alt="placeholder"
            class="w-16 h-16 rounded-full object-cover object-center"
          />
          <div class="flex flex-col">
            <h2 class="text-xl font-bold text-zinc-950 dark:text-gray-300">
              username
            </h2>
            <p class="text-lg text-zinc-800 dark:text-gray-400">display_name</p>
          </div>
        </div>
        <!-- options -->
        <div class="flex-center flex-col gap-3 w-full">
          <!-- USER SETTINGS -->
          <h3 class="layout-header">user settings</h3>
          <button
            :class="[
              'options-item',
              $route.name === 'details' ? 'options-item-selected' : '',
            ]"
            @click="$router.push({ name: 'details' })"
          >
            user information
          </button>
          <hr class="border-none h-2 bg-black/25 w-full" />
          <!-- APP SETTINGS -->
          <h3 class="layout-header">application settings</h3>
          <button
            :class="[
              'options-item',
              $route.name === 'security' ? 'options-item-selected' : '',
            ]"
            @click="$router.push({ name: 'security' })"
          >
            security
          </button>
          <button
            :class="[
              'options-item',
              $route.name === 'privacy' ? 'options-item-selected' : '',
            ]"
            @click="$router.push({ name: 'privacy' })"
          >
            privacy settings
          </button>
          <hr class="border-none h-1 bg-black/25 w-full" />
          <!-- HISTORY -->
          <h3 class="layout-header">my history</h3>
          <button
            :class="[
              'options-item',
              $route.name === 'comissions' ? 'options-item-selected' : '',
            ]"
            @click="$router.push({ name: 'comissions' })"
          >
            my comissions
          </button>
          <button
            :class="[
              'options-item',
              $route.name === 'favorites' ? 'options-item-selected' : '',
            ]"
            @click="$router.push({ name: 'favorites' })"
          >
            my favorites
          </button>
        </div>
        <!-- logout -->
        <div class="flex-center flex-col gap-3 w-full">
          <button
            class="flex w-full h-full justify-start rounded-lg py-3 gap-2 px-8 font-medium text-indigo-950 dark:text-gray-200"
            @click="handleLogout"
          >
            <Icon icon="ri:logout-box-line" width="24" height="24" />
            <span class="font-semibold">log out</span>
          </button>
        </div>
      </div>
    </section>
    <!-- COMPONENTS PAGE -->
    <section class="w-[60dvw] relative">
      <RouterView />
      <div
        class="absolute right-4 top-4 p-3 rounded-full bg-violet-200 border-1 cursor-pointer border-indigo-950"
        @click="router.push({ name: 'home' })"
      >
        <Icon
          icon="ri:close-large-line"
          width="24"
          height="24"
          style="color: #1e1b4b"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";

const auth = useAuthStore();
const user = ref<User | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const route = useRoute();
const router = useRouter();

interface User {
  display_name: string;
  username: string;
  email: string;
}

function handleLogout() {
  auth.logout();
  router.push("/");
}
</script>

<style scoped></style>
