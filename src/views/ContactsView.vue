<template>
  <HeaderBar></HeaderBar>
  <div class="body">
    <div class="top">
      <div class="top_main">
        <span>Bring your visions to life</span>
        <div class="sage-image">
          <img src="../assets/images/Sage.jpg" alt="bru" />
        </div>
      </div>
      <span>Contact me to get your very own art!</span>
    </div>
    <div class="contacts">
      <span>Contacts</span>
      <ul class="contacts_list">
        <li>+55 (00) 9 9999-9999</li>
        <li>emailExample@mail.com</li>
        <li>
          <img src="../components/icons/instaIcon.svg" alt="insta" />
          <span>@bru__lui</span>
        </li>
        <li>
          <img src="../components/icons/twtIcon.svg" alt="twt" />
          <span>@Bru__Lui</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import "../components/icons/instaIcon.svg";
import "../components/icons/twtIcon.svg";
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.body {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 48px;

  .top {
    text-transform: uppercase;
    span {
      font-size: 24px;
    }

    .top_main {
      display: flex;
      justify-content: space-around;
      align-content: center;
      gap: 124px;

      span {
        font-family: "Abril Fatface", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 96px;
      }

      .sage-image {
        width: 300px;
        height: 300px;

        img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 100%;
          border: 8px solid $text-color;
        }
      }
    }
  }
  .contacts {
    font-size: 24px;

    span {
      text-transform: uppercase;
    }
    .contacts_list {
      img {
        max-width: 25px;
      }
    }
  }
}
</style>
