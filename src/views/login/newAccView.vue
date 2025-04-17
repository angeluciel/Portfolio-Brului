<template>
  <div
    class="flex flex-row justify-between items-center w-dvw h-dvh bg-login-bg"
  >
    <div class="box-border h-dvh w-[45dvw] p-0 m-0 overflow-hidden">
      <img
        src="@/assets/images/third-first.jpg"
        alt="fotinha"
        class="object-cover object-right-top h-full w-full"
      />
    </div>

    <div
      class="flex flex-col justify-between !px-[60px] !py-[80px] md:!py-[50px] h-dvh w-fit items-start"
    >
      <!--top-->
      <div
        class="flex flex-col justify-start items-start text-charcoal max-w-md"
      >
        <div class="flex flex-row gap-2">
          <router-link to="/" class=""
            ><span
              class="font-normal text-gray-400 hover:text-gray-600 !text-lg"
              >home</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <router-link to="/login" class=""
            ><span
              class="text-gray-400 font-normal hover:text-gray-600 !text-lg"
              >login</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <span class="text-charcoal font-semibold !text-lg"
            >create account</span
          >
        </div>
        <h1 class="flex justify-start md:!text-4xl">Complete your account</h1>
      </div>
      <!--boxes-->
      <div class="flex flex-col gap-5 max-w-md">
        <div class="flex flex-row gap-5">
          <baseInput
            class="!w-1/2"
            title="Name"
            placeholder="Your Name"
            variant="login"
            type="text"
          />
          <baseInput
            class="!w-1/2"
            title="Username"
            placeholder="Bananaboat123"
            variant="login"
            type="text"
          />
        </div>
        <baseInput
          title="Email *"
          leftIcon="ion:mail-outline"
          placeholder="Your email here"
          variant="login"
          type="email"
        />
        <baseInput
          title="Password *"
          leftIcon="ri:door-lock-line"
          placeholder="Password Here"
          variant="login"
          type="password"
        />
        <div class="flex flex-row gap-4 justify-start items-center">
          <input
            type="checkbox"
            class="w-[20px] h-[20px]"
            v-model="checked"
            required
          />
          <span class="text-xl font-medium"
            >I agree with Brului's
            <span
              class="border-b hover:text-gray-500 hover:border-gray-500 hover:cursor-pointer"
              >terms and conditions</span
            >
          </span>
        </div>
      </div>
      <!--bottom-->
      <div class="flex flex-col gap-20 max-w-md w-full md:gap-10">
        <baseButton
          variant="filled"
          text="Sign in"
          color="login"
          type="submit"
          @click="loginError = !loginError"
        />

        <div v-if="loginError" class="text-red-500">
          Not implemented yet! s2
        </div>
        <router-link to="/login" class=""
          ><span class="hover:text-gray-400"
            >Already have an account? Sign in
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "primevue/breadcrumb";
import Checkbox from "primevue/checkbox";
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import baseButton from "../../components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";

const passwordField = ref(null);
const iconName = ref("ri:eye-close-line");
const checked = ref(false);
const loginError = ref(false);

const items = ref([{ label: "Home" }]);

const props = defineProps({
  to: { type: String, required: true },
});
</script>

<style scoped lang="scss">
@use "@/assets/variables.scss" as var;

h1 {
  @include var.fontAbril(56px, 300, normal);
  color: var.$login_charcoal;
}
</style>
