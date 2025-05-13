<template>
  <div class="bg-violet-100">
    <div class="flex flex-col w-full justify-center items-center !py-20 gap-5">
      <!--top content-->
      <div class="flex w-full lg:!px-64 md:!px-56 gap-5">
        <!--head-->
        <div
          class="flex !px-24 items-center gap-5 !py-2 w-full bg-white rounded-xl"
        >
          <div v-if="loading">
            <div
              class="flex justify-center items-center !h-16 !w-16 rounded-full bg-gray-400"
            ></div>
          </div>
          <div
            v-else-if="auth.user"
            class="relative flex justify-center items-center group"
          >
            <img
              src="https://i.pinimg.com/736x/ff/ea/b4/ffeab4e9eab37e9a84d858560ae197f6.jpg"
              alt="pfp"
              class="w-20 rounded-full group-hover:opacity-70"
            />
            <div
              class="text-center rounded-full ease-in opacity-0 duration-100 absolute group-hover:opacity-100"
            >
              <button
                class="bg-white opacity-75 text-gray-600 rounded-full !p-1 hover:opacity-100"
              >
                <Icon icon="ri:camera-fill" width="32" height="32" />
              </button>
            </div>
          </div>

          <div
            class="flex flex-col w-full justify-start items-start gap-2"
            v-if="loading"
          >
            <div class="w-80 h-8 bg-gray-800 opacity-50 rounded-full"></div>
            <div class="w-40 h-5 bg-gray-400 opacity-50 rounded-full"></div>
          </div>
          <div
            v-else
            class="flex flex-col w-full justify-start items-start gap-2"
          >
            <h2 v-if="error">{{ error }}</h2>
            <h2 v-else-if="user" class="text-2xl text-gray-800 font-semibold">
              @{{ user.username }}
            </h2>
            <span class="text-xl font-bold text-gray-400">{{
              user.email
            }}</span>
          </div>
        </div>
      </div>
      <!-- mid content -->
      <div class="flex w-full lg:!px-64 md:!px-56 gap-5">
        <!-- head -->
        <div class="flex flex-col w-full bg-white rounded-xl overflow-hidden">
          <ul class="gap-4">
            <li
              v-for="(item, index) in menuOptions"
              :key="item.route"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              <router-link
                :to="item.route"
                class="flex items-start justify-start gap-3 !px-16 !py-5 w-full hover:bg-gray-300 group active:bg-[#B7B7C3]"
              >
                <div
                  class="text-gray-400 rounded-full border-2 border-gray-400 !p-3 group-hover:text-purple-700 group-hover:border-purple-800 group-active:text-white group-active:border-white"
                >
                  <Icon
                    :icon="
                      hoveredIndex === index
                        ? item.icon.replace('-line', '-fill')
                        : item.icon
                    "
                    width="32"
                    height="32"
                  />
                </div>
                <!--text-->
                <div class="flex flex-col">
                  <h3
                    class="text-2xl text-charcoal font-medium group-active:text-white"
                  >
                    {{ item.title }}
                  </h3>
                  <span
                    class="text-gray-500 text-xl font-medium group-active:text-gray-200"
                    >{{ item.description }}</span
                  >
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full lg:!px-64 md:!px-56 gap-5">
        <button
          class="flex items-center gap-5 justify-start text-gray-500 group"
          @click="handleLogout"
        >
          <Icon
            icon="ri:door-open-line"
            width="32"
            height="32"
            class="group-hover:text-red-400"
          />
          <span class="font-semibold group-hover:text-gray-600">Logoff</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// nvm the error it means nothing
import { Icon, loadIcons } from "@iconify/vue";
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { supabase } from "@/lib/supabase";

const auth = useAuthStore();
const user = ref<User | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const route = useRoute();
const router = useRouter();

interface User {
  display_name: string;
  username: string;
  email: string;
}

function handleLogout() {
  auth.logout();
  router.push("/login");
}

async function fetchUserProfile(): Promise<void> {
  loading.value = true;
  error.value = null;

  try {
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();
    if (sessionError) throw sessionError;

    const userId = sessionData?.session?.user?.id;
    if (!userId) {
      throw new Error("Usuário não autenticado.");
    }

    const { data, error: dbError } = await supabase
      .from("users")
      .select("display_name, username, email")
      .eq("id", userId)
      .single();

    if (dbError) throw dbError;

    user.value = data;
  } catch (err: any) {
    error.value = `Erro ao carregar perfil: ${err.message}`;
  } finally {
    loading.value = false;
  }
}

onMounted(fetchUserProfile);

watch(() => route.params.id, fetchUserProfile);

// ======================================

const iconList = [
  "ri:bank-card-line",
  "ri:bank-card-fill",
  "ri:lock-2-line",
  "ri:lock-2-fill",
  "ri:user-4-line",
  "ri:user-4-fill",
  "ri:artboard-line",
  "ri:artboard-fill",
  "ri:heart-3-line",
  "ri:heart-3-fill",
  "ri:door-open-line",
  "ri:door-open-fill",
  "ri:camera-fill",
];

async function preloadIcons(): Promise<void> {
  return new Promise((resolve, reject) => {
    loadIcons(iconList, (loaded, missing, pending) => {
      if (pending.length) return; // Wait for the callback to finish
      if (missing.length) {
        console.error("Failed to load icons:", missing);
        reject({ loaded, missing });
      } else {
        resolve();
      }
    });
  });
}

interface MenuOption {
  title: string;
  description: string;
  icon: string;
  route: string;
}

const hoveredIndex = ref<number | null>(null);

const menuOptions: MenuOption[] = [
  {
    title: "Suas informações",
    description: "Suas preferências de contato e perfil",
    icon: "ri:bank-card-line",
    route: `/profile/${route.params.display_name}/edit`,
  },
  {
    title: "Segurança",
    description: "Suas medidas de segurança",
    icon: "ri:lock-2-line",
    route: "/profile",
  },
  {
    title: "Privacidade",
    description: "Quais conteúdos mostrar ou não mostrar",
    icon: "ri:user-4-line",
    route: "/profile",
  },
  {
    title: "Comissões",
    description: "Histórico de envios de Comissões",
    icon: "ri:artboard-line",
    route: "/profile",
  },
  {
    title: "Artes Favoritas",
    description: "Artes favoritas em 'Galeria'",
    icon: "ri:heart-3-line",
    route: "/gallery",
  },
];

onMounted(async () => {
  try {
    await preloadIcons();
    console.log("All icons preloaded!");
  } catch (err) {
    console.error("Error preloading icons:", err);
  }
});
</script>

<style lang="scss" scoped></style>
