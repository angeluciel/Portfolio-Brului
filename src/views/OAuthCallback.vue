<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const auth = useAuthStore();

onMounted(async () => {
  // Pega sessão e atualiza o store
  await auth.fetchCurrentUser();
  // Se logou com sucesso, leva para /profile/:display_name
  if (auth.user) {
    router.replace(`/profile/${auth.user.display_name}`);
  } else {
    router.replace("/login");
  }
});
</script>
