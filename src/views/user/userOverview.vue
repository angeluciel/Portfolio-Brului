<template>
  <div
    class="flex justify-start items-center px-5 md:p-0 md:ml-20 w-full h-full max-w-[440px]"
  >
    <div class="flex flex-col gap-14">
      <!-- TITLE -->
      <div
        class="flex flex-col w-full md:w-auto items-start justify-start gap-3"
      >
        <h3
          class="font-raleway font-bold uppercase text-lg md:text-xl tracking-wide text-indigo-950 dark:text-gray-200"
        >
          {{ auth.user?.username }}'s information
        </h3>
        <span
          class="font-medium md:text-lg text-black/50 dark:text-gray-400 text-base"
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
          <div class="relative ml-5 flex-center group">
            <img
              :src="auth.user?.profile_picture || '/images/gostosao_ouro.jpg'"
              alt="placeholder pfp"
              class="w-40 h-40 object-cover rounded-full group-hover:opacity-70"
            />
            <div
              class="text-center absolute-center rounded-full ease-in opacity-0 duration-100 group-hover:opacity-100"
            >
              <button
                class="bg-background/70 opacity-75 text-zinc-700 rounded-full !p-2 hover:opacity-100"
              >
                <Icon icon="ri:camera-ai-line" width="32" height="32" />
              </button>
            </div>
          </div>
        </div>
        <!-- FORMS -->
        <form class="w-full" @submit.prevent="handleSave">
          <div class="flex flex-col gap-4">
            <div>
              <fieldset>
                <label class="text-lg !font-bold text-violet-950 dark:text-violet-300 w-full">Email address</label>
                <input :placeholder="email" type="text" disabled
                       class="focus:outline-none !text-lg md:py-2 px-4 !w-full h-14 md:!text-base hover:shadow-[0_0_16px_rgba(109,40,217,0.4)] focus:shadow-[0_0_16px_rgba(109,40,217,0.4)] transition-[background-color,outline,color,box-shadow] duration-200 ease-in-out text-zinc-950 dark:text-zinc-200 flex flex-row gap-4 w-full items-center md:!py-0 rounded-[12px] border-[1.5px] border-violet-200 dark:border-zinc-800 !h-10">

              </fieldset>
<!--              <baseInput
                title="Email address"
                placeholder="email@exemplo.com"
                type="text"
                variant="profile"
                v-model="email"
              />-->
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
import { Icon } from "@iconify/vue";
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
