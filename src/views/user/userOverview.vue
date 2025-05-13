<template>
  <div class="flex justify-start items-center ml-20 w-full h-full">
    <div class="flex flex-col gap-14">
      <!-- TITLE -->
      <div class="flex flex-col items-start justify-start gap-3">
        <h3
          class="font-raleway font-bold uppercase text-xl tracking-wide text-indigo-950 dark:text-gray-200"
        >
          {{ auth.user?.username }}'s information
        </h3>
        <span class="font-medium text-lg text-black/50 dark:text-gray-400"
          >Here you can see and edit all public information about yourself.
          <br />
          The changes should be applied in about 5 minutes.
        </span>
      </div>
      <!-- PFP SECTION -->
      <div class="flex flex-col w-full justify-between items-start">
        <!-- PFP -->
        <div class="flex flex-col gap-2 items-start justify-start">
          <span class="font-medium text-xl text-zinc-950 dark:text-gray-200"
            >Profile Picture</span
          >
          <div class="relative flex-center group">
            <img
              src="/images/Sage.jpg"
              alt="placeholder pfp"
              class="ml-5 w-40 h-40 object-cover rounded-full group-hover:opacity-70"
            />
            <div
              class="text-center rounded-full ease-in opacity-0 duration-100 absolute group-hover:opacity-100"
            >
              <button
                class="bg-background/70 opacity-75 text-zinc-700 rounded-full !p-1 hover:opacity-100"
              ></button>
            </div>
          </div>
        </div>
        <!-- FORMS -->
        <form class="w-full" @submit.prevent="handleSave">
          <div class="flex flex-col gap-4">
            <div>
              <baseInput
                title="Email address"
                placeholder="email@exemplo.com"
                type="text"
                variant="profile"
                v-model="email"
              />
            </div>
            <div class="flex gap-4">
              <baseInput
                title="name"
                placeholder="JÃO"
                type="text"
                variant="profile"
                v-model="display_name"
              />
              <baseInput
                title="username"
                placeholder="jão"
                type="text"
                variant="profile"
                v-model="username"
              />
            </div>
            <div class="flex gap-4">
              <baseInput
                title="twitter"
                type="text"
                variant="profile"
                v-model="twitter"
              />
              <baseInput
                title="instagram"
                type="text"
                variant="profile"
                v-model="instagram"
              />
            </div>
            <baseButton text="save changes" color="login" variant="filled" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/base/baseInput.vue";
import BaseButton from "@/components/base/baseButton.vue";
import { useAuthStore } from "@/stores/authStore";
import { ref, onMounted } from "vue";

const auth = useAuthStore();

const email = ref("");
const display_name = ref("");
const username = ref("");
const twitter = ref("");
const instagram = ref("");

onMounted(() => {
  if (auth.user) {
    email.value = auth.user.email || "";
    display_name.value = auth.user.display_name || "";
    username.value = auth.user.username || "";
  }
});
</script>

<style scoped></style>
