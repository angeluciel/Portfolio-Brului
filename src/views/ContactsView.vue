<template>
  <HeaderBar_mobile></HeaderBar_mobile>
  <div
    class="flex flex-col sm:flex-row justify-center !py-16 !px-6 text-charcoal bg-violet-50"
  >
    <div class="flex flex-col gap-20 items-start justify-start">
      <div class="flex flex-col gap-1 uppercase">
        <div class="flex !py-6">
          <h1 class="contacts_heading max-w-2xl">Bring your visions to life</h1>
        </div>
        <span>Contact me to get your very own art!</span>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-bold text-2xl">Contacts</h3>
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
      <img src="/images/Sage.jpg" alt="pfp" />
    </div>
  </div>
  <FooterBar></FooterBar>
</template>

<script setup>
import HeaderBar_mobile from "../components/layout/HeaderBar_mobile.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
</script>
<style lang="scss" scoped>
@use "../assets/variables" as var;

span {
  font-size: 24px;
}

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
</style>
