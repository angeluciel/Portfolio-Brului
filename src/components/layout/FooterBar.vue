<template>
  <!-- T O T A L   H E A D I N G-->
  <div class="w-full h-fit bg-home-bg-500">
    <!-- BOTTOM CONTENT-->
    <div class="flex flex-col w-full md:h-[38rem]">
      <!--find your way-->
      <div
        class="flex bg-home-bg-500 h-full !py-16 !px-5 md:!px-32 md:justify-between flex-col-reverse md:flex-row md:flex-nowrap"
      >
        <!-- teste -->
        <div class="flex flex-col gap-8 h-fit w-full">
          <!-- topics -->
          <div
            class="flex gap-8 items-start justify-between md:justify-start w-full"
          >
            <!--column 1-->
            <div class="flex flex-col gap-10 justify-start items-start">
              <h1
                class="text-[1.5em] md:text-[2em] text-home-blue font-semibold !font-space"
              >
                Site Map
              </h1>
              <ul>
                <li v-for="item in siteMap" :key="item.label" class="md:!pb-2">
                  <router-link
                    :to="item.to"
                    class="!font-semibold !text-[1.2em] header-item !text-[#cccccc] block"
                    >{{ item.label }}</router-link
                  >
                </li>
              </ul>
            </div>
            <!--column 2-->
            <div class="flex flex-col gap-10 justify-start items-start">
              <h1
                class="text-[1.5em] md:text-[2em] text-home-blue font-semibold !font-space"
              >
                Legal
              </h1>
              <ul>
                <li v-for="item in legalMap" :key="item.label">
                  <router-link
                    :to="item.to"
                    class="font-semibold !text-[1.2em] !text-[#cccccc]"
                    >{{ item.label }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- scroll button -->
          <button
            @click="scrollToTop"
            class="flex relative gap-3 max-w-[360px] justify-center items-center rounded-lg border-2 border-home-blue cursor-pointer button-anim group active:border-gold-500"
          >
            <span class="button-anim-text text-[1.2em]">back to top</span>
            <Icon
              class="button-anim-text !text-gold-500"
              icon="typcn:arrow-up"
              width="32"
              height="32"
            />
            <span class="button-anim-slide"></span>
          </button>
        </div>

        <!-- content -->
        <div
          class="flex flex-col gap-8 justify-start items-start w-full md:w-[35%] relative"
        >
          <!--about heading-->
          <div class="flex justify-between items-center w-full">
            <h1
              class="!text-gold-500 !text-[2em] md:!text-[3rem] font-bold !font-space"
            >
              About
            </h1>
            <img
              src="/src/components/icons/icon.png"
              alt="icon"
              class="w-[80px] h-[80px] rounded-full"
            />
          </div>
          <!--Introduction-->
          <span class="!text-home-blue !text-[1.2em] md:!text-[1.3em]"
            >Hi, I'm Bruna! I'm an artist commited to  my passion, and I can't wait to meet you.
            Let's illustrate your mind!</span
          >
          <!--button and social medias-->
          <div class="flex flex-col items-top !text-home-blue gap-5">
            <!--social medias-->
            <div class="flex gap-8 !text-gold-500">
              <a
                href="https://twitter.com/Bru__Lui"
                target="_blank"
                class="hover:!text-gold-600 active:!text-gold-200"
              >
                <Icon icon="fa6-brands:x-twitter" width="24" height="24" />
              </a>
              <a
                href="https://www.instagram.com/bru__lui/"
                target="_blank"
                class="hover:!text-gold-600 active:!text-gold-200"
              >
                <Icon icon="ri:instagram-fill" width="24" height="24"
              /></a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <!--social media-->
      <div
        class="flex-center flex-wrap md:flex-nowrap md:justify-between gap-14 !px-5 md:!px-14 !py-6 bg-home-bg-200 border-t-6 border-home-bg-600 relative"
      >
        <!--left-->
        <span
          class="gap-8 font-semibold text-[0.9em] md:text-[1.2em] !text-home-bg-600"
          >© 2025 bru__lui. Todos os direitos reservados.</span
        >
        <img
          src="/src/components/icons/icon.png"
          alt="icon"
          class="md:size-[60px] size-[40px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <!-- meus direitos!!! -->
        <div
          class="flex gap-8 !text-home-mute font-semibold text-[0.9em] md:text-[1.2em]"
        >
          <span>developed and designed by:</span>
          <div class="flex gap-4 justify-center">
            <Icon icon="ri:instagram-fill" width="24" height="24" /><span
              >@medeirosjpmi</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const siteMap: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Prices", to: "/prices" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contacts", to: "/contacts" },
];

const legalMap: { label: string; to: string }[] = [
  { label: "Terms of Service", to: "/prices" },
  { label: "Terms of Privacy", to: "/" },
];

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped></style>
