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
      const { data: existingUser, error: selectError } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .maybeSingle();

      if (selectError && selectError.code !== "PGRST116") {
        // Só trate erro se NÃO for "nenhuma linha encontrada"
        console.error("Erro ao buscar usuário:", selectError.message);
        toast.add({
          severity: "error",
          summary: "Erro ao buscar usuário",
          detail: selectError.message,
          life: 3000,
        });
        return;
      }

      if (!existingUser) {
        await supabase.from("users").insert([
          {
            id: session.user.id,
            email: session.user.email,
            display_name:
              session.user.user_metadata?.full_name ||
              session.user.email.split("@")[0],
            username: session.user.email.split("@")[0],
            profile_picture: session.user.user_metadata?.avatar_url,
          },
        ]);
      }

      await auth.fetchCurrentUser();

      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Successfully logged in!",
        life: 3000,
      });
      router.replace(`/profile/${auth.user.display_name}`);
    }
  } catch (error) {
    console.error("OAuth callback error:", error);
    toast.add({
      severity: "error",
      summary: "Error",
      detail: error.message || "Failed to complete login",
      life: 3000,
    });
    router.replace("/login");
  }
});
</script>
