<template>
  <div
    class="flex flex-row justify-between items-center w-dvw h-dvh bg-login-bg"
    @keyup.enter="handleLogin"
  >
    <div class="content">
      <div class="flex flex-row gap-2">
        <router-link to="/" class=""
          ><span class="font-normal text-gray-400 hover:text-gray-500 !text-lg"
            >home</span
          ></router-link
        >
        <div class="cursor-alias">/</div>

        <span class="text-charcoal font-semibold !text-lg">login</span>
      </div>

      <div class="flex flex-col justify-start items-start w-full gap-5">
        <div class="flex flex-col gap-5 w-full max-w-md">
          <baseInput
            title="Email *"
            leftIcon="ion:mail-outline"
            placeholder="Email or username"
            variant="login"
            type="email"
            v-model="username"
          />
          <baseInput
            title="Password *"
            leftIcon="ri:door-lock-line"
            placeholder="Password Here"
            variant="login"
            type="password"
            v-model="password"
          />
        </div>
        <router-link to="/login/forgot-password" class=""
          ><span class="text-gray-600 hover:text-gray-800"
            >Forgot your password?</span
          ></router-link
        >
      </div>

      <div class="bottom">
        <div
          class="flex flex-col justify-start items-start gap-4 w-full max-w-md"
        >
          <baseButton
            variant="filled"
            text="Sign in"
            color="login"
            @click="handleLogin"
          />
          <baseButton
            variant="outline"
            :icon="`flat-color-icons:google`"
            text="Sign in with Google"
            color="login"
            @click="handleGoogle"
          />
          <div v-if="loginError" class="text-red-500">
            Incorrect username or password!
          </div>
          <div v-else-if="googleError" class="text-red-500">
            Google sign-in not implemented!
          </div>
        </div>
        <router-link to="/login/createAccount" class=""
          ><span class="hover:text-gray-400"
            >Don't have an account? Sign Up</span
          >
        </router-link>
      </div>
    </div>
    <div class="box-border h-dvh w-[55dvw] p-0 m-0 overflow-hidden">
      <img
        src="/images/first-first.jpg"
        alt="fotinha"
        class="object-right-bottom h-full w-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import baseButton from "../../components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";

const router = useRouter();
const userStore = useUserStore();

const username = ref("");
const password = ref("");
const loginError = ref(false);
const googleError = ref(false);

function handleLogin() {
  if (username.value === "joao" && password.value === "banana1234") {
    userStore.logIn(username.value);
    loginError.value = false;
    router.push("/");
  } else {
    loginError.value = true;
  }
}

function handleGoogle() {
  googleError.value = true;
  loginError.value = false;
}

const passwordField = ref(null);
const iconName = ref("ri:eye-close-line");

const props = defineProps({
  to: { type: String, required: true },
});

const home = ref({
  url: "/",
  label: "/ home",
});

function switchVisibility() {
  if (passwordField.value.getAttribute("type") === "password") {
    passwordField.value.setAttribute("type", "text");
    iconName.value = "ri:eye-line";
  } else {
    passwordField.value.setAttribute("type", "password");
    iconName.value = "ri:eye-close-line";
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.content {
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: start;
  align-items: start;
  padding: 2em 4em;
  width: 45dvw;
  height: 100dvh;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    color: var.$login_charcoal;

    & > h1 {
      @include var.fontAbril(56px, 300, normal);
      color: var.$login_charcoal;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
}
</style>
