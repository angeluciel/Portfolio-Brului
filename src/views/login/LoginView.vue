<template>
  <div id="main" class="flex h-dvh overflow-hidden bg-violet-50">
    <section class="hidden lg:block md:w-[35dvw] lg:w-[50dvw] h-dvh">
      <div class="h-full relative">
        <router-link
          to="/"
          class="absolute top-10 left-10 !text-xl md:!text-4xl z-50"
          ><span class="!font-abril !text-violet-50 underline"
            >Brului</span
          ></router-link
        >

        <img
          src="/images/genshin.jpg"
          alt="placeholder"
          class="w-full h-full object-cover object-[34%]"
        />
      </div>
    </section>
    <section class="w-full">
      <main class="flex relative !items-center justify-start h-full">
        <div class="w-full sm:!py-8 !px-16 md:!ml-20 max-w-xl">
          <h1 class="!font-abril text-6xl !mb-10 text-charcoal">Sign in</h1>
          <div>
            <form @submit.prevent="handleLogin">
              <div class="flex flex-col gap-4">
                <!--mail-->

                <baseInput
                  title="Email or Username"
                  placeholder=""
                  type="text"
                  variant="login"
                  v-model="email"
                />

                <!--password-->
                <baseInput
                  title="Password"
                  type="password"
                  variant="login"
                  v-model="password"
                />
                <router-link to="/login/forgot-password" class="underline"
                  >Forgot your password?</router-link
                >
              </div>
              <!--button-->
              <baseButton text="Sign in" color="login" variant="filled" />
            </form>
            <!--google auth-->
            <div class="">
              <form>
                <baseButton
                  text="Sign in with Google"
                  color="login"
                  variant="outline"
                />
              </form>
            </div>
            <div class="mt-5">
              <router-link to="/login/createAccount" class="underline"
                >Don't have an account?</router-link
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
  <BaseToast v-if="errorMessage" :message="errorMessage" />
</template>

<script setup lang="ts">
import baseButton from "@/components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import BaseToast from "@/components/base/BaseToast.vue";

const router = useRouter();
const auth = useAuthStore();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const handleLogin = async () => {
  try {
    console.log("Tentando login com:", email.value, password.value);
    await auth.login(email.value, password.value);
    const session = await auth.getSession();
    console.log("Access Token:", session?.access_token);
    console.log("Usuario autenticado:", auth.user);
    router.push("/profile");
  } catch (error: any) {
    console.error("Erro no login: ", error);
    errorMessage.value = error.message;
  }
};
</script>

<style scoped></style>
