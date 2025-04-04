<template>
  <div class="screen">
    <div class="content">
      <div class="top">
        <Breadcrumb :home="home" :model="items">
          <template #item="{ item, props }">
            <router-link v-if="item.url" :to="item.url">
              <span>{{ item.label }}</span>
            </router-link>
            <span v-else v-bind="props.action">
              <span>{{ item.label }}</span>
            </span>
          </template>

          <template #separator> / </template>
        </Breadcrumb>

        <h1>Sign In</h1>
      </div>

      <div class="boxes">
        <div class="inputs">
          <baseInput title="Email *" leftIcon="ion:mail-outline" placeholder="vasconcelos@gmail.com" variant="login"/>
          <baseInput title="Password *" leftIcon="ri:door-lock-line" placeholder="Password Here" variant="login"
                     type="password"/>
          <!--<div class="mail">
            <span>Email *</span>
            <div class="inputbox">
              <div class="combo">
                <Icon
                  icon="ion:mail-outline"
                  width="24px"
                  height="24px"
                  id="icon_input"
                />
                <input
                  required
                  class="mail-input"
                  type="email"
                  placeholder="vasconselos@gmail.com"
                />
              </div>
            </div>
          </div> --> <!--email-->
          <!--<div class="password">
            <span>Password *</span>
            <div class="inputbox">
              <div class="combo">
                <Icon
                  icon="ri:door-lock-line"
                  width="24"
                  height="24"
                  id="icon_input"
                />
                <input
                  ref="passwordField"
                  required
                  class="mail-input"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button @click="switchVisibility()" id="show">
                <Icon :icon="iconName" width="24" height="24" id="icon" />
              </button>
            </div>
          </div>  --> <!--password-->
        </div>
        <span class="forgot">Forgot your password?</span>
      </div>

      <div class="bottom">
        <div class="buttons">
          <baseButton variant="filled" text="Sign in" color="login" />
          <baseButton
            variant="outline"
            :icon="`flat-color-icons:google`"
            text="Sign in with Google"
            color="login"
          />

        </div>
        <router-link to="/login/createAccount" class=""><span class="hover:text-gray-200">Don't have an account? Sign
          Up</span>
          </router-link>

      </div>
    </div>
    <div class="image">
      <img src="@/assets/images/first-first.jpg" alt="fotinha" />
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "primevue/breadcrumb";
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import baseButton from "../components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";

const passwordField = ref(null);
const iconName = ref("ri:eye-close-line");

const props = defineProps({
  to: { type: String, required: true },
});

const home = ref({
  url: "/",
  label: "/ home",
});

function switchVisibility() {
  if (passwordField.value.getAttribute("type") === "password") {
    passwordField.value.setAttribute("type", "text");
    iconName.value = "ri:eye-line";
  } else {
    passwordField.value.setAttribute("type", "password");
    iconName.value = "ri:eye-close-line";
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.link span:hover {
  color: var.$login_hg;
}

.screen {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  background-color: var.$login_bg;
}

.mr-1 {
  margin-right: 0.25rem;
  color: var.$login_grey;
}

.mx-2 {
  margin-inline: 0.5rem;
}

span {
  color: var.$login_charcoal;
}

.image {
  box-sizing: border-box;
  height: 100dvh;
  width: 55dvw;
  padding: 0;
  margin: 0;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: right bottom;
    height: 100%;
    width: 100%;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: start;
  align-items: start;
  padding: 2em 4em;
  width: 45dvw;
  height: 100dvh;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    color: var.$login_charcoal;

    & > h1 {
      @include var.fontAbril(56px, 300, normal);
      color: var.$login_charcoal;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 1rem;
      width: 100%;

      .sign_btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;
        width: 100%;
        color: var.$login_bg;
        background-color: var.$login_hg;
        border-radius: 20px;
        box-shadow: 0px 4px 16px rgba(17, 14, 61, 0.5);

        position: relative;
        overflow: hidden;

        & > *:not(span) {
          position: relative;
          z-index: 1;
        }

        span {
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border-radius: 50%;
          background-color: rgba(248, 211, 43, 0.5);
          transform: translate(-50%, -50%);
          z-index: 0;
          color: var.$login_bg;
        }
      }


    }
  }

  .boxes {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    gap: 20px;

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;


    }
  }
}
</style>
