<template>
  <div
    id="main"
    class="flex h-dvh overflow-hidden bg-background dark:bg-zinc-900"
  >
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
      <main class="flex flex-col relative !items-start justify-center h-full">
        <!--BREADCRUMBS-->
        <Breadcrumb
          :model="items"
          class="!bg-transparent !ml-12 md:!ml-20 sm:!py-8 md:!px-16"
        >
          <template #item="{ item, props }">
            <router-link
              v-if="item.route"
              v-slot="{ href, navigate }"
              :to="item.route"
              custom
            >
              <a :href="href" v-bind="props.action" @click="navigate">
                <span
                  class="text-violet-800 dark:text-violet-300 hover:text-black/80 dark:hover:text-violet-200 font-semibold"
                  >{{ item.label }}</span
                >
              </a>
            </router-link>
            <a
              v-else
              :href="item.url"
              :target="item.target"
              v-bind="props.action"
            >
              <span
                class="text-surface-700 dark:text-surface-0 dark:text-zinc-400"
                >{{ item.label }}</span
              >
            </a>
          </template>
        </Breadcrumb>
        <!--BREADCRUMBS END-->
        <div class="w-full sm:!py-8 !px-16 md:!ml-20 max-w-xl">
          <h1
            class="!font-raleway !font-black tracking-wider text-6xl !mb-10 text-charcoal dark:text-gray-300"
          >
            Sign in
          </h1>
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
                <router-link
                  to="/login/forgot-password"
                  class="underline text-black/80 dark:text-gray-300"
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
              <router-link
                to="/login/createAccount"
                class="underline text-black/80 dark:text-gray-300"
                >Don't have an account?</router-link
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import baseButton from "@/components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

// VARIÁVEIS 🔵
const toast = useToast();
const router = useRouter();
const auth = useAuthStore();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const items = ref([{ label: "Home", route: "/" }, { label: "Login" }]);

// LOGIN 💖
const handleLogin = async () => {
  errorMessage.value = "";
  try {
    console.log("Tentando login com:", email.value, password.value);
    await auth.login(email.value, password.value);
    const session = await auth.getSession();
    console.log("Access Token:", session?.access_token);
    console.log("Usuario autenticado:", auth.user);
    router.push(`/profile/${auth.user.display_name}`);
    toast.add({
      severity: "success",
      summary: "Olá!",
      detail: `É bom ter você de volta, ${auth.user.display_name}!`,
      life: 4000,
    });
  } catch (error: any) {
    console.error("Erro no login: ", error);
    toast.add({
      severity: "error",
      summary: "Failed to login",
      detail: error.message || "Credenciais inválidas.",
      life: 4000,
    });
  }
};
</script>

<style scoped></style>
