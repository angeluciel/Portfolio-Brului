<template>
  <HeaderBar_mobile></HeaderBar_mobile>
  <div
    class="flex flex-col sm:flex-row justify-center !py-16 md:pt-32 !px-6 text-charcoal bg-background dark:bg-zinc-900"
  >
    <div class="flex flex-col gap-20 items-start justify-start">
      <div class="flex flex-col gap-1 uppercase">
        <div class="flex !py-6">
          <h1 class="contacts_heading max-w-2xl">Bring your visions to life</h1>
        </div>
        <span class="text-zinc-950 dark:text-gray-300"
          >Contact me to get your very own art!</span
        >
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-bold text-2xl text-zinc-900 dark:text-violet-400">
          Contacts
        </h3>
        <ul class="my-3">
          <li>
            <span class="text-zinc-950 dark:text-gray-300 !text-lg"
              >+55 (00) 9 9999-9999</span
            >
          </li>
          <li>
            <span class="text-zinc-950 dark:text-gray-300 !text-lg"
              >emailExample@mail.com</span
            >
          </li>
          <li>
            <Icon icon="ri:twitter-x-line" width="24" height="24" id="icon" />
            <a
              href="https://www.instagram.com/bru__lui/"
              class="text-zinc-950 hover:text-zinc-500 dark:text-gray-300 dark:hover:text-gray-400 !text-lg"
              >@bru__lui</a
            >
          </li>
          <li>
            <Icon icon="ri:instagram-line" width="24" height="24" id="icon" />
            <a
              href="https://twitter.com/Bru__Lui"
              class="text-zinc-950 hover:text-zinc-500 dark:text-gray-300 dark:hover:text-gray-400 !text-lg"
              >@Bru__Lui</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col w-72 items-start justify-start m-4">
      <img
        src="/images/sage.jpg"
        alt="pfp"
        class="w-72 h-72 object-cover rounded-full border-8 border-neutral-700 dark:border-violet-400"
      />
    </div>
  </div>
  <FooterBar></FooterBar>
</template>

<script setup>
import HeaderBar_mobile from "../components/layout/HeaderBar_mobile.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import { Icon } from "@iconify/vue";
</script>
<style lang="scss" scoped>
@use "../assets/variables" as var;

span {
  font-size: 24px;
}

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

h3 {
  text-transform: uppercase;
}
</style>
