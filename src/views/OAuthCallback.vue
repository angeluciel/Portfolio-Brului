<template>
  <div class="flex justify-center items-center h-screen">
    <p>Processing login...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores/authStore";
import { useToast } from "primevue/usetoast";

const router = useRouter();
const auth = useAuthStore();
const toast = useToast();

onMounted(async () => {
  try {
    // Get the session
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) throw error;

    if (session) {
      await auth.fetchCurrentUser();
      if (auth.user) {
        toast.add({
          severity: "success",
          summary: "Success",
          detail: "Successfully logged in!",
          life: 3000,
        });
        router.replace(`/profile/${auth.user.display_name}`);
      }
    } else {
      throw new Error("No session found");
    }
  } catch (error) {
    console.error("OAuth callback error:", error);
    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Failed to complete login",
      life: 3000,
    });
    router.replace("/login");
  }
});
</script>
