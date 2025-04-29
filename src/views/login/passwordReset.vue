<template>
  <div
    class="flex flex-row justify-start items-center !gap-10 !p-8 h-dvh"
    @keyup.enter="handleReset"
  >
    <!-- E V E R Y T H I N G-->
    <div class="flex flex-col justify-between !px-11 !py-10 items-start h-full">
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
          <span class="text-charcoal font-semibold">reset</span>
        </div>
        <!-- H E A D I N G-->
        <h1 class="font-extrabold !text-4xl text-charcoal">
          Forgot your password?
        </h1>
        <!-- S U B H E A D I N G-->
        <span class="!text-xl text-[#C89396]"
          >Please enter your email so that we can send a link for the password
          reset.</span
        >
        <!-- I N P U T -->
        <baseInput
          title="Email *"
          leftIcon="ion:mail-outline"
          placeholder="Email here"
          variant="login"
          type="email"
          v-model="email"
        />
      </div>
      <!-- B O T T O M -->
      <div class="flex flex-col w-full">
        <baseButton
          variant="filled"
          text="Sign in"
          color="login"
          @click="handleReset"
        />
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
import { ref } from "vue";
import baseButton from "../../components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
import { useRouter } from "vue-router";
import { useMailStore } from "@/stores/mailStore";

const router = useRouter();
const mailStore = useMailStore();
const email = ref("");

function handleReset() {
  mailStore.setEmail(email.value);
  router.push({ path: "/login/confirm-email" });
}
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

h1 {
  @include var.fontAbril(56px, 300, normal);
  color: var.$login_charcoal;
}
</style>
