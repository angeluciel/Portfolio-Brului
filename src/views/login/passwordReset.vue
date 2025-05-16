<template>
  <div
    id="main"
    class="flex h-dvh overflow-hidden bg-background dark:bg-zinc-900"
  >
    <section class="hidden lg:block md:w-[35dvw] lg:w-[50dvw] h-dvh">
      <div class="h-full relative">
        <router-link
          to="/"
          class="absolute top-10 left-10 !text-xl md:!text-4xl z-50"
          ><span class="!font-abril !text-violet-50 underline"
            >Brului</span
          ></router-link
        >

        <img
          src="/images/first-second.jpg"
          alt="placeholder"
          class="w-full h-full object-cover object-left-top"
        />
      </div>
    </section>
    <section class="w-full">
      <main class="flex flex-col relative !items-start justify-center h-full">
        <!-- B R E A D C R U M B S -->
        <Breadcrumb
          :model="items"
          class="!bg-transparent !ml-12 md:!ml-20 sm:!py-8 md:!px-16"
        >
          <template #item="{ item, props }">
            <router-link
              v-if="item.route"
              v-slot="{ href, navigate }"
              :to="item.route"
              custom
            >
              <a :href="href" v-bind="props.action" @click="navigate">
                <span
                  class="text-violet-800 dark:text-violet-300 hover:text-black/80 dark:hover:text-violet-700 font-semibold"
                  >{{ item.label }}</span
                >
              </a>
            </router-link>
            <a
              v-else
              :href="item.url"
              :target="item.target"
              v-bind="props.action"
            >
              <span class="text-surface-700 dark:text-surface-0">{{
                item.label
              }}</span>
            </a>
          </template>
        </Breadcrumb>
        <!--breadcrumbs end-->
        <div class="w-full sm:!py-8 !px-16 md:!ml-20 max-w-xl">
          <h1
            class="!font-raleway !font-black tracking-wide text-6xl !mb-5 text-charcoal dark:text-gray-300"
          >
            Reset your Password
          </h1>
          <p class="!mb-10 text-violet-900 dark:text-violet-300 font-semibold">
            Please enter your email so that we can send a link for the password
            reset.
          </p>
          <div>
            <form>
              <div class="flex flex-col gap-4">
                <!--mail-->
                <baseInput
                  title="Email"
                  placeholder=""
                  type="text"
                  variant="login"
                />
              </div>
              <!--button-->
              <baseButton text="Sign in" color="login" variant="filled" />
            </form>

            <div class="mt-5">
              <router-link to="/login/" class="underline dark:text-gray-300"
                >Already have an account?</router-link
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script setup>
import baseButton from "@/components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
import { ref } from "vue";
import { useToast } from "primevue";

const items = ref([
  { label: "Home", route: "/" },
  { label: "Login", route: "/login" },
  { label: "Password Reset" },
]);
</script>

<style scoped></style>
