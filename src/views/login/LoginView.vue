<template>
  <div
    id="main"
    class="flex h-dvh overflow-hidden bg-background dark:bg-zinc-900"
  >
    <section class="hidden lg:block md:w-[35dvw] lg:w-[50dvw] h-dvh">
      <div class="h-full relative">
        <router-link
          to="/"
          class="absolute top-20 left-10 !text-xl md:!text-4xl z-50"
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
            class="!font-raleway !font-black tracking-wider !text-xl md:!text-4xl !mb-10 text-charcoal dark:text-gray-300"
          >
            Sign in with email
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
            <!--separator-->
            <div class="flex items-center gap-4 w-full mt-8 mb-4">
              <div class="h-px flex-1 bg-black/25 dark:bg-white/20"></div>
              <span class="text-gray-500 dark:text-gray-300 text-sm font-medium"
                >or</span
              >
              <div class="h-px flex-1 bg-black/25 dark:bg-white/20"></div>
            </div>

            <!--google auth-->
            <div class="w-full">
              <p
                class="text-center w-full text-gray-500 dark:text-gray-300 mb-5 text-sm font-medium"
              >
                Continue with
              </p>
              <div class="flex justify-center gap-4">
                <!-- google -->
                <button
                  class="social-buttons"
                  @click="handleGoogleLogin"
                  v-tooltip="{
                    value: 'Login with Google',
                    showDelay: 1000,
                    hideDelay: 300,
                  }"
                >
                  <Icon icon="flat-color-icons:google" width="24" height="24" />
                </button>
                <!-- apple -->
                <button
                  class="social-buttons text-zinc-900 dark:text-background"
                  @click.prevent="handleComingSoon('Apple')"
                >
                  <Icon icon="icon-park-solid:apple" width="24" height="24" />
                </button>
                <!-- facebook -->
                <button
                  class="social-buttons text-zinc-900 dark:text-background"
                  @click.prevent="handleComingSoon('Facebook')"
                >
                  <Icon icon="basil:facebook-solid" width="24" height="24" />
                </button>
                <!-- discord -->
                <button
                  class="social-buttons text-zinc-900 dark:text-background"
                  @click.prevent="handleComingSoon('Discord')"
                >
                  <Icon icon="ic:baseline-discord" width="24" height="24" />
                </button>
              </div>
            </div>
            <!-- register route -->
            <div class="flex-center mt-5 w-full gap-2">
              <span class="text-black/80 dark:text-gray-300 text-nowrap"
                >Don't have an account?</span
              >
              <router-link
                to="/login/createAccount"
                class="underline text-black/80 dark:text-gray-300 text-nowrap"
                v-tooltip.bottom="{
                  value: 'Create an account',
                  showDelay: 1000,
                  hideDelay: 300,
                }"
              >
                Sign up!</router-link
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script setup>
import baseButton from "@/components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { supabase } from "@/lib/supabase";
import { Icon } from "@iconify/vue";

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
  } catch (error) {
    console.error("Erro no login: ", error);
    toast.add({
      severity: "error",
      summary: "Failed to login",
      detail: error.message || "Credenciais inválidas.",
      life: 4000,
    });
  }
};

// GOOGLE AUTH 🔴
const handleGoogleLogin = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: import.meta.env.VITE_REDIRECT_URL,
      },
    });

    if (error) throw error;
  } catch (error) {
    console.error("Google login error:", error);
    errorMessage.value = "Failed to login with Google";
  }
};

const handleComingSoon = (provider) => {
  toast.add({
    severity: "info",
    summary: "Coming Soon",
    detail: `${provider} login will be available soon!`,
    life: 3000,
  });
};
</script>

<style scoped></style>
