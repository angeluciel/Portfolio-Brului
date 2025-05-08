import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { supabase } from "@/lib/supabase";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<any>(null);
  const loading = ref(null);

  const isLoggedIn = computed(() => !!user.value);

  const signUp = async (
    email: string,
    password: string,
    display_name: string,
    username: string
  ) => {
    loading.value = true;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      loading.value = false;
      throw error;
    }

    const authUser = data.user;
    if (!authUser) {
      loading.value = false;
      throw new Error("Usuário não foi criado.");
    }
    const { error: dbError } = await supabase.from("users").insert([
      {
        id: authUser.id,
        email: email,
        display_name,
        username,
      },
    ]);

    loading.value = false;

    if (dbError) throw dbError;
    user.value = authUser;
  };

  const login = async (email: string, password: string) => {
    loading.value = true;
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    loading.value = false;
    if (error) throw error;
  
    const authUser = data.user;
    if (!authUser) throw new Error("Usuário inválido");
  
    // Busca dados na tabela public.users
    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("id, email, display_name, username")
      .eq("id", authUser.id)
      .single();
  
    if (profileError) throw profileError;
  
    user.value = profile;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };
  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
  };

  const fetchCurrentUser = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData?.session?.user?.id;
  
    if (!userId) return;
  
    const { data: profile, error } = await supabase
      .from("users")
      .select("id, email, display_name, username")
      .eq("id", userId)
      .single();
  
    if (!error && profile) {
      user.value = profile;
    }
  };

  return { user, loading, signUp, login, logout, getSession, isLoggedIn };
});
