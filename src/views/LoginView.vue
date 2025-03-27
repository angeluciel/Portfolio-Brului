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
                  type="text"
                  placeholder="zebra@mail.com"
                />
              </div>
            </div>
          </div>
          <div class="password">
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
            width="32"
            height="32"
            class="google_icon"
          />
          <span>Sign in with Google</span>
        </div>
      </div>
      <span>Don't have an account? Sign up!</span>
    </div>
    <div class="image">
      <img src="../assets/images/first-first.jpg" alt="fotinha" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderLink from "@/components/HeaderLink.vue";
import { Icon } from "@iconify/vue";

const passwordField = ref(null);
const iconName = ref("ri:eye-close-line");

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
@use "../assets/variables.scss" as var;

.screen {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100dvw;
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
  gap: 5rem;
  justify-content: start;
  align-items: start;
  padding: 80px 4rem;
  width: 45dvw;
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

.boxes {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
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

.inputs {
  gap: 20px;
}

.inputbox {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid var.$login_charcoal;
  border-radius: 12px;
  padding: 12px 24px;

  #icon_input {
    color: var.$login_grey;
  }

  .combo {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    align-items: center;
  }

  #show {
    border: none;
    border-radius: 12px;
    padding: 4px;
    background-color: inherit;

    #icon {
      display: flex;
      justify-content: center;
      background-color: inherit;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        border: none;
      }
    }
  }

  input {
    border: none;
    width: 100%;

    &::placeholder {
      color: var.$login_grey;
    }

    &:focus {
      outline: none;
      color: var.$login_charcoal;
    }
  }
}
</style>
