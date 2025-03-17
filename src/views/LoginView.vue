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
          <div class="password"></div>
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
import HeaderLink from "@/components/HeaderLink.vue";
import { Icon } from "@iconify/vue";
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

  & > h1 {
    @include var.fontAbril(56px, 300, normal);
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
    background-color: #2734d3;
    border-radius: 20px;
    color: white;
  }

  .google_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 1rem;
    border: 2px solid #2734d3;
    border-radius: 20px;
  }
}
</style>
