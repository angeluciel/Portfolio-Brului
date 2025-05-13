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
        >
          <span class="!font-abril !text-violet-50 underline">brului</span>
        </router-link>
        <img
          src="/images/wallpaper1.png"
          alt="placeholder"
          class="w-full h-full object-cover object-[60%]"
        />
      </div>
    </section>

    <section class="w-full">
      <main class="flex flex-col relative !items-start justify-center h-full">
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
                  class="text-violet-800 dark:text-violet-300 hover:text-black/80 dark:hover:text-violet-400 font-semibold"
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
              <span class="text-surface-700 dark:text-surface-0">{{
                item.label
              }}</span>
            </a>
          </template>
        </Breadcrumb>
        <div class="w-full sm:!py-8 !px-16 md:!ml-20 max-w-xl">
          <h1
            class="!font-raleway !font-black tracking-wider text-4xl !mb-10 text-charcoal dark:text-gray-300"
          >
            Create your account
          </h1>

          <form @submit.prevent="handleSignUp">
            <div class="flex flex-col gap-4">
              <div class="w-full flex gap-4 justify-between">
                <baseInput
                  title="Name"
                  type="text"
                  variant="login"
                  v-model="display_name"
                />
                <baseInput
                  title="Username"
                  type="text"
                  variant="login"
                  v-model="username"
                />
              </div>
              <baseInput
                title="Email"
                type="text"
                variant="login"
                v-model="email"
              />
              <baseInput
                title="Password"
                type="password"
                variant="login"
                placeholder="8+ characters"
                v-model="password"
              />
            </div>

            <p v-if="errorMessage" class="text-red-600 text-sm mt-2">
              {{ errorMessage }}
            </p>

            <baseButton
              :text="loading ? 'Creating...' : 'Sign up'"
              :disabled="loading"
              color="login"
              variant="filled"
            />
          </form>

          <div class="mt-5">
            <router-link to="/login" class="underline dark:text-gray-300"
              >Already have an account?</router-link
            >
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
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores/authStore";
import { useToast } from "primevue";

const items = ref([
  { label: "Home", route: "/" },
  { label: "Login", route: "/login" },
  { label: "New Account" },
]);
const toast = useToast();
const email = ref("");
const password = ref("");
const display_name = ref("");
const username = ref("");
const auth = useAuthStore();
const errorMessage = ref("");
const loading = ref(false);
const router = useRouter();

const handleSignUp = async () => {
  errorMessage.value = "";
  loading.value = true;

  try {
    const { data: existingUsers, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("username", username.value)
      .limit(1);

    if (checkError) throw checkError;
    if (existingUsers && existingUsers.length > 0) {
      throw new Error("Este nome de usuário já está em uso.");
    }

    await auth.signUp(
      email.value,
      password.value,
      display_name.value,
      username.value
    );

    toast.add({
      severity: "success",
      summary: "Cadastro concluído!",
      detail: `Bem-vindo(a), ${display_name.value}`,
      life: 4000,
    });

    router.push(`/profile/${username.value}`);
  } catch (err: any) {
    errorMessage.value = err.message || "Erro inesperado.";
    toast.add({
      severity: "error",
      summary: "Erro no cadastro",
      detail: errorMessage.value,
      life: 4000,
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
