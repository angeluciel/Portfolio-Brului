import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { supabase } from "@/lib/supabase";

interface User {
  id: string;
  email: string;
  display_name: string;
  username: string;
  role?: string;
  profile_picture?: string;
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const loading = ref<boolean>(false);

  const isLoggedIn = computed(() => !!user.value);

  // Initialize auth state
  const initialize = async () => {
    // Check for existing session
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.user) {
      const { data: profile } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (profile) {
        user.value = profile;
      }
    }

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const { data: profile } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (profile) {
          user.value = profile;
        }
      } else if (event === "SIGNED_OUT") {
        user.value = null;
      }
    });
  };

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
    user.value = {
      id: authUser.id,
      email: email,
      display_name,
      username,
      role: "client", // default role for new users
    };
  };

  const login = async (email: string, password: string) => {
    loading.value = true;
    console.log("Starting login process..."); // Debug log

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Auth response:", { data, error }); // Debug log

    loading.value = false;
    if (error) throw error;

    const authUser = data.user;
    if (!authUser) throw new Error("Usuário inválido");

    console.log("Auth user found:", authUser); // Debug log

    // Busca dados na tabela public.users
    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("id, email, display_name, username")
      .eq("id", authUser.id)
      .single();

    console.log("Profile data:", { profile, profileError }); // Debug log

    if (profileError) throw profileError;

    user.value = profile;
    console.log("Login completed, user set to:", user.value); // Debug log

    return profile;
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
    const { data, error } = await supabase.auth.getSession();
    const userId = data?.session?.user?.id;

    if (!userId) return;

    const { data: profile, error: dbError } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (!dbError && profile) {
      user.value = profile;
    }
  };

  const rolePermissions: Record<string, string[]> = {
    admin: ["upload", "deleteUser", "viewStats", "editPrices"],
    artist: ["upload", "editPrices"],
    client: ["viewGallery", "createComission"],
    guests: ["viewGallery"],
  };

  const is = (role: string) => user.value?.role === role;

  const can = (permission: string): boolean => {
    const role = user.value?.role;
    if (!role) return false;
    return rolePermissions[role]?.includes(permission) || false;
  };

  return {
    user,
    loading,
    signUp,
    login,
    logout,
    getSession,
    isLoggedIn,
    fetchCurrentUser,
    is,
    can,
    initialize,
  };
});
