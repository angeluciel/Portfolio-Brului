import { supabase } from "@/lib/supabase";

export function useAuthListener() {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event !== "SIGNED_IN" || !session?.user) return;

    const user = session.user;

    // Verifica se o usuário já existe na tabela `users`
    const { data: existing, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (checkError) {
      console.error("Erro ao checar usuário:", checkError.message);
      return;
    }

    if (!existing) {
      // Insere o novo usuário na tabela `users`
      const { error: insertError } = await supabase.from("users").insert([
        {
          id: user.id,
          email: user.email,
          display_name: user.user_metadata?.full_name || "Sem nome",
          username: user.email?.split("@")[0],
          profile_picture: user.user_metadata?.avatar_url || null,
          email_confirmed: user.email_confirmed,
        },
      ]);

      if (insertError) {
        console.error("Erro ao inserir usuário Google:", insertError.message);
      } else {
        console.log("Usuário Google salvo na tabela.");
      }
    }
  });
}
