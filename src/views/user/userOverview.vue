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
                <label class="text-lg !font-bold text-violet-950 dark:text-violet-300 w-full">email address</label>
                <input :placeholder="email" type="text" disabled
                       class="focus:outline-none !text-lg md:py-2 px-4 !w-full h-14 md:!text-base hover:shadow-[0_0_16px_rgba(109,40,217,0.4)] focus:shadow-[0_0_16px_rgba(109,40,217,0.4)] transition-[background-color,outline,color,box-shadow] duration-200 ease-in-out text-zinc-950 dark:text-zinc-200 flex flex-row gap-4 w-full items-center md:!py-0 rounded-[12px] border-[1.5px] border-violet-200 dark:border-zinc-800 !h-10">

              </fieldset>
            </div>
            <div class="flex gap-4">
              <fieldset>
                <label class="text-lg !font-bold text-violet-950 dark:text-violet-300 w-full">name</label>
                <input :placeholder="display_name" type="text" v-model="display_name"
                       class="focus:outline-none !text-lg md:py-2 px-4 !w-full h-14 md:!text-base hover:shadow-[0_0_16px_rgba(109,40,217,0.4)] focus:shadow-[0_0_16px_rgba(109,40,217,0.4)] transition-[background-color,outline,color,box-shadow] duration-200 ease-in-out text-zinc-950 dark:text-zinc-200 flex flex-row gap-4 w-full items-center md:!py-0 rounded-[12px] border-[1.5px] border-violet-200 dark:border-zinc-800 !h-10" />
              </fieldset>
              <fieldset>
                <label class="text-lg !font-bold text-violet-950 dark:text-violet-300 w-full">username</label>
                <input v-model="username" type="text" class="focus:outline-none !text-lg md:py-2 px-4 !w-full h-14
                md:!text-base hover:shadow-[0_0_16px_rgba(109,40,217,0.4)] focus:shadow-[0_0_16px_rgba(109,40,217,0.4)] transition-[background-color,outline,color,box-shadow] duration-200 ease-in-out text-zinc-950 dark:text-zinc-200 flex flex-row gap-4 w-full items-center md:!py-0 rounded-[12px] border-[1.5px] border-violet-200 dark:border-zinc-800 !h-10" />
              </fieldset>

            </div>
            <div class="flex gap-4">
              <fieldset>
                <label class="text-lg !font-bold text-violet-950 dark:text-violet-300 w-full">twitter/X</label>
                <input v-model="twitter" type="text"
                       class="focus:outline-none !text-lg md:py-2 px-4 !w-full h-14 md:!text-base hover:shadow-[0_0_16px_rgba(109,40,217,0.4)] focus:shadow-[0_0_16px_rgba(109,40,217,0.4)] transition-[background-color,outline,color,box-shadow] duration-200 ease-in-out text-zinc-950 dark:text-zinc-200 flex flex-row gap-4 w-full items-center md:!py-0 rounded-[12px] border-[1.5px] border-violet-200 dark:border-zinc-800 !h-10" />
              </fieldset>
              <fieldset>
                <label class="text-lg !font-bold text-violet-950 dark:text-violet-300 w-full">instagram @</label>
                <input v-model="instagram" type="text"
                       class="focus:outline-none !text-lg md:py-2 px-4 !w-full h-14 md:!text-base hover:shadow-[0_0_16px_rgba(109,40,217,0.4)] focus:shadow-[0_0_16px_rgba(109,40,217,0.4)] transition-[background-color,outline,color,box-shadow] duration-200 ease-in-out text-zinc-950 dark:text-zinc-200 flex flex-row gap-4 w-full items-center md:!py-0 rounded-[12px] border-[1.5px] border-violet-200 dark:border-zinc-800 !h-10" />
              </fieldset>
            </div>
            <baseButton :text="loading ? 'Saving...' : 'Save Changed'" :disabled="loading" color="login"
                        variant="filled" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/base/baseButton.vue";
import { useAuthStore } from "@/stores/authStore";
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import { supabase } from '@/lib/supabase';
import { useToast } from "primevue/usetoast";

const auth = useAuthStore();
const loading = ref(false);
const errorMessage = ref("");
const toast = useToast();

const email = ref("");
const display_name = ref("");
const username = ref("");
const twitter = ref("");
const instagram = ref("");

async function handleSave() {
  loading.value = true;
  errorMessage.value = "";

  try {
    const updateData = {
      display_name: display_name.value.trim(),
      username: username.value.trim(),
      twitter: twitter.value.trim(),
      instagram: instagram.value.trim(),
    };

    // checa se user é único
    if (updateData.username !== auth.user.username) {
      const { data: existingUsers, error: checkError } = await supabase
          .from("users")
          .select("id")
          .eq("username", username.value)
          .limit(1);

      if (checkError) throw checkError;
      if (existingUsers && existingUsers.length > 0) {
        toast.add({
          severity: "error",
          summary: "Error in changing username",
          detail: "This username is not available, please try another one.",
          life: 4000
        });
        throw new Error("Nome de usuário já em uso.")
      }
    }

    // atualiza o supabase
    const { data, error: updateError } = await supabase
        .from('users')
        .update(updateData)
        .eq('id', auth.user.id)
        .select()
        .single();

    if (updateError) throw updateError;

    auth.user = { ...auth.user, ...data };

    toast.add({
      severity: "success",
      summary: "Profile updated!",
      detail: "Your details were updates successfully!",
      life: 4000,
    });
  } catch (err) {
    console.error('Error updating profile:', err);
    errorMessage.value = err.message || 'Erro ao atualizar perfil';

    toast.add({
      severity: 'error',
      summary: "failed to save",
      detail: errorMessage.value,
    });
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  if (auth.user) {
    email.value = auth.user.email || "no email? how?";
    display_name.value = auth.user.display_name || "no name";
    username.value = auth.user.username || "no username?";
    twitter.value = auth.user.twitter || "";
    instagram.value = auth.user.instagram || "";
  }
});
</script>

<style scoped></style>
