<template>
  <HeaderBar></HeaderBar>
  <div class="body">
    <div class="main">
      <div class="top">
        <div class="top_text">
          <h1>Bring your visions to life</h1>
        </div>
        <span>Contact me to get your very own art!</span>
      </div>
      <div class="bottom">
        <h3>Contacts</h3>
        <ul class="contacts_list">
          <li>+55 (00) 9 9999-9999</li>
          <li>emailExample@mail.com</li>
          <li>
            <fa :icon="['fab', 'instagram']" id="icon" />
            <a
              href="https://www.instagram.com/bru__lui/"
              class="hover:!text-gray-400"
              >@bru__lui</a
            >
          </li>
          <li>
            <fa :icon="['fab', 'x-twitter']" id="icon" />
            <a href="https://twitter.com/Bru__Lui" class="hover:!text-gray-400"
              >@Bru__Lui</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="sage-image">
      <img src="../assets/images/Sage.jpg" alt="pfp" />
    </div>
  </div>
  <FooterBar></FooterBar>
</template>

<script setup>
import HeaderBar from "../components/layout/HeaderBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
</script>
<style lang="scss" scoped>
@use "../assets/variables" as var;

.body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 3rem 5rem 3rem;
  color: var.$text-color;

  .main {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: flex-start;
    justify-content: flex-start;

    .top {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 48rem;
      text-transform: uppercase;

      .top_text {
        display: flex;
        padding: 24px 0;

        h1 {
          font-family: "Abril Fatface", serif;
          font-weight: 400;
          font-style: normal;
          font-size: 96px;
        }
      }

      span {
        font-size: 24px;
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .contacts_list {
        display: block;
        margin: 12px 0;

        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
          color: var.$text-color;

          #icon {
            fill: white !important;
          }
        }
        img {
          max-width: 25px;
        }
      }

      h3 {
        text-transform: uppercase;
      }
    }
  }

  .sage-image {
    display: flex;
    flex-direction: column;

    width: 300px;
    height: 100%;
    align-content: start;
    justify-content: flex-start;
    margin: 1rem;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 100%;
      border: 8px solid var.$text-color;
    }
  }
}
</style>
