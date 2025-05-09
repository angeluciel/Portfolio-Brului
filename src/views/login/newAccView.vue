<template>
  <div id="main" class="flex h-dvh overflow-hidden bg-violet-50">
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
      <main class="flex relative !items-center justify-start h-full">
        <div class="w-full sm:!py-8 !px-16 md:!ml-20 max-w-xl">
          <h1 class="!font-abril text-6xl !mb-10 text-charcoal">
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
            <router-link to="/login" class="underline"
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
    // Verifica se username já existe
    const { data: existingUsers, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("username", username.value)
      .limit(1);

    if (checkError) throw checkError;
    if (existingUsers && existingUsers.length > 0) {
      throw new Error("Este nome de usuário já está em uso.");
    }

    // Usa authStore centralizado
    await auth.signUp(
      email.value,
      password.value,
      display_name.value,
      username.value
    );

    router.push("/profile");
  } catch (err: any) {
    errorMessage.value = err.message || "Erro inesperado.";
  } finally {
    loading.value = false;
  }
};

const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173",
    },
  });

  if (error) {
    errorMessage.value = error.message;
  }
};
</script>

<style scoped></style>
