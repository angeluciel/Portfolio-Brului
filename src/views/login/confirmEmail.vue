<template>
  <div class="flex flex-row justify-between items-center !gap-10 !p-8 h-dvh">
    <!-- S L A -->
    <div
      class="flex flex-col justify-start !gap-10 !px-16 !py-[120px] items-start w-full h-full"
    >
      <!-- T O P -->
      <div class="flex flex-col gap-4 justify-start items-start">
        <!-- B R E A D C R U M B S -->
        <div class="flex flex-row gap-2">
          <router-link to="/" class=""
            ><span
              class="font-normal text-gray-400 hover:text-gray-500 !text-lg"
              >home</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <router-link to="/login" class=""
            ><span
              class="text-gray-400 font-normal hover:text-gray-500 !text-lg"
              >login</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <router-link to="/login/forgot-password" class=""
            ><span
              class="text-gray-400 font-normal hover:text-gray-500 !text-lg"
              >reset</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <span class="text-charcoal font-semibold">confirmation</span>
        </div>
        <!-- H E A D I N G-->
        <h1 class="font-extrabold !text-4xl text-charcoal">Check your inbox</h1>
        <!-- S U B H E A D I N G-->
        <span class="!text-lg text-[#C89396]"
          >We've sent a link to <b>{{ censoredEmail }}</b
          >. Click it to reset your password</span
        >
        <!-- I N P U T -->
        <span class="!text-lg text-[#C89396]"
          >Didn't receive an email?
          <router-link
            to="/login/forgot-password"
            class="!font-bold !text-login-hg"
            >Try again</router-link
          >
          or
          <router-link to="/login" class="!font-bold !text-login-hg"
            >Sign in</router-link
          >.
        </span>
      </div>
    </div>
    <div class="flex justify-between items-center h-full !w-[70dvw]">
      <img
        src="/images/first-second.jpg"
        alt="imagem massa demaisi"
        class="object-cover object-right-top h-full w-full rounded-4xl"
      />
    </div>
  </div>
</template>

<script setup>
import { useMailStore } from "@/stores/mailStore";
import { computed } from "vue";
import { useAuthStore } from "@/stores/authStore";

const mailStore = useMailStore();
const email = mailStore.email;

const censoredEmail = computed(() => {
  if (!email || email.length <= 5) return email;
  const firstChar = email.slice(0, 1);
  const lastPart = email.slice(-4);
  const numMasked = email.length - 5;
  return firstChar + "*".repeat(numMasked) + lastPart;
});
</script>

<style lang="scss" scoped></style>
