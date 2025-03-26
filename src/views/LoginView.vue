<template>
  <div class="screen">
    <div class="content">
      <div class="top">
        <HeaderLink
          to="/"
          text="/ Home"
          :activeLink="activeLink"
          :setActiveLink="setActiveLink"
        />
        <h1>Sign In</h1>
      </div>
      <!--text boxes for mail/password-->
      <div class="boxes">
        <div class="inputs">
          <div class="mail">
            <span>Email *</span>
            <div class="inputbox">
              <Icon icon="ion:mail-outline" width="24px" height="24px" />
              <input
                required
                class="mail-input"
                type="text"
                placeholder="zebra@mail.com"
              />
            </div>
          </div>
          <div class="password">
            <span>Password *</span>
            <div class="inputbox">
              <Icon icon="ion:mail-outline" width="24px" height="24px" />
              <input
                ref="passwordField"
                required
                class="mail-input"
                type="password"
                id="password"
                placeholder="Password"
              />
              <button @click="switchVisibility()" id="show">Show</button>
            </div>
          </div>
        </div>
        <span class="forgot">Forgot your password?</span>
      </div>
      <!--sign / google buttons-->
      <div class="buttons">
        <div class="sign_btn">Sign in</div>
        <div class="google_btn">
          <Icon
            icon="flat-color-icons:google"
            width="46"
            height="46"
            class="google_icon"
          />
          <span>Sign in with Google</span>
        </div>
      </div>
      <span>Don't have an account? Sign up!</span>
    </div>
    <div class="image">
      <img src="../assets/images/third-second.jpg" alt="fotinha" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderLink from "@/components/HeaderLink.vue";
import { Icon } from "@iconify/vue";

const passwordField = ref(null);

function switchVisibility() {
  if (passwordField.value.getAttribute("type") === "password") {
    passwordField.value.setAttribute("type", "text");
  } else {
    passwordField.value.setAttribute("type", "password");
  }
}
</script>

<style lang="scss" scoped>
@use "../assets/variables.scss" as var;

.screen {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100dvw;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: start;
  align-items: start;
  padding: 0 4rem;
  padding-bottom: 160px;
  width: 100%;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: start;
  align-items: start;
  color: var.$login_charcoal;

  & > h1 {
    @include var.fontAbril(56px, 300, normal);
    color: var.$login_charcoal;
  }
}

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
    background-color: var.$login_hg;
    border-radius: 20px;
    color: white;
  }

  .google_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    width: 100%;
    gap: 1rem;
    border: 2px solid var.$login_hg;
    border-radius: 20px;
  }
}

.inputbox {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: 100%;
  border: 2px solid black;
  border-radius: 12px;
  padding: 12px 24px;

  #show {
    border: none;
    background-color: rgba(000, 000, 000, 0.25);
    border-radius: 12px;
    padding: 4px;

    &:hover {
      background-color: rgba(000, 000, 000, 0.5);
    }
  }

  input {
    border: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
