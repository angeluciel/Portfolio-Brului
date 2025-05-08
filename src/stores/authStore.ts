import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const loading = ref(null);

  const signUp = async (email: string, password: string) => {
    loading.value = true;
    const { data, error } = await supabase.auth.signUp({ email, password });
    loading.value = false;
    if (error) throw error;
    user.value = data.user;
  };

  const login = async (email: string, password: string) => {
    loading.value = true;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    loading.value = false;
    if (error) throw error;
    user.value = data.user;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };
  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
  };

  return { user, loading, signUp, login, logout, getSession };
});
