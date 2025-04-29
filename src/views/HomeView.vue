<template>
  <HeaderBar class="z-900"></HeaderBar>
  <div
    class="body flex flex-row justify-center items-center gap-4 !px-4 h-[90dvh] z-80"
  >
    <div class="lg:!h-[650px] w-full max-w-[40dvw] md:!h-[450px] z-80">
      <img
        src="/images/last-last.jpg"
        alt="image"
        class="!h-full w-auto z-80"
      />
    </div>

    <div
      class="right flex flex-col justify-between items-start !w-full h-full !py-5"
    >
      <!--T O P-->
      <div class="flex flex-col">
        <!--T I T L E-->
        <div class="flex flex-col">
          <!--B E Y O N D-->
          <div class="beyond_box !text-charcoal relative">
            <span class="uppercase !text-[3em] !font-bold !italic !font-josefin"
              >Beyond The
            </span>
          </div>
          <span class="uppercase !text-[8em] !font-abril leading-none"
            >Canvas</span
          >
        </div>
        <!--S U B T I T L E-->
        <div class="flex !py-3 font-medium !text-[1.3em]">
          <span>
            Step into a world where your <b class="bold !italic">ideas</b> can
            come to life,
            <br />
            transformed into art that goes
            <i class="!bold text-gold-500 !italic">beyond imagination.</i>
          </span>
        </div>
      </div>
      <div class="bottom">
        <div class="socials">
          <div id="container">
            <!-- bring your visions to life button "byvtl" for short -->
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <router-link to="/prices" class="button-text"
                >Bring your visions to life</router-link
              >
            </button>
            <!-- end of byvtl button -->
          </div>
          <div class="socials">
            <a
              class="instagram slide"
              href="https://www.instagram.com/bru__lui/"
              target="_blank"
            >
              <fa :icon="['fab', 'instagram']" />
            </a>
            <a
              href="https://twitter.com/Bru__Lui"
              :class="{ darkMode: isDarkMode }"
              @click="toggleDarkMode"
              class="twitter slide"
              target="_blank"
            >
              <fa :icon="['fab', 'x-twitter']" />
            </a>
          </div>
        </div>
        <div class="stats">
          <div class="bottom_left">
            <div class="year_plus">
              <Icon icon="ic:round-plus" class="icon" />
              <div class="bottom_title text-[3em] !font-bold !italic">
                10 years
              </div>
            </div>
            <div class="!py-4 !px-8 text-[1.2em] font-semibold">
              Of experience making my own, as well as clients' projects.
            </div>
          </div>
          <div class="bottom_right">
            <div class="year_plus">
              <Icon icon="ic:round-plus" class="icon" />
              <div class="bottom_title text-[3em] !font-bold !italic">200k</div>
            </div>
            <div class="!py-4 !px-8 text-[1.2em] font-semibold">
              Hours of practice, studying every aspect of art I know!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="slider">
    <SliderComponent />
  </section>
  <section class="w-full !bg-home-bg-500">
    <div
      class="flex flex-col w-full justify-between items-center h-[35rem] !py-32 bg-home-bg-200 rounded-b-[64px]"
    >
      <!-- heading & subheading -->
      <div class="flex flex-col w-full items-center gap-2 text-home-blue">
        <h1 class="!text-[5em] !font-abril">Let's paint your feelings!</h1>
        <span class="!text-[1.5em]"
          >Bring your imagination to life with a custom piece that speaks YOUR
          truth</span
        >
      </div>
      <!-- buttons -->
      <div class="flex gap-24">
        <router-link
          to="/prices"
          class="rounded-full !py-4 !px-8 bg-home-blue border-2 border-home-blue !text-home-bg-600 !font-semibold hover:bg-transparent hover:border-2 hover:border-home-blue hover:rounded-none hover:!text-home-blue transition-all ease-in-out"
          >View Prices</router-link
        >
        <button
          class="rounded-full !py-4 !px-8 !border-2 !font-semibold !text-home-blue"
        >
          Talk to me
        </button>
      </div>
    </div>
  </section>
  <FooterBar></FooterBar>
</template>

<script setup>
import HeaderBar from "@/components/layout/HeaderBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import SliderComponent from "@/components/layout/SliderComponent.vue";
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

// variables for byvtl button
$white: #fff;
$black: #282936;

@mixin transition(
  $property: all,
  $duration: 0.45s,
  $ease: cubic-bezier(0.65, 0, 0.076, 1)
) {
  transition: $property $duration $ease;
}

.slider {
  height: 100vh;
}

.bottom {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .socials {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
  }

  .stats {
    display: flex;
    flex-direction: row;
    height: 100%;

    .bottom_left {
      border-right: 4px solid #98a3c1;
    }

    .bottom_left,
    .bottom_right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .year_plus {
        display: flex;
        align-items: center;
        margin-left: 1rem;

        .icon {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  &.learn-more {
    width: 20rem;
    height: auto;
    .circle {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      background: $black;
      border-radius: 1.625rem;
      .icon {
        @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: $white;
        &.arrow {
          @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
          &::before {
            position: absolute;
            content: "";
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid $white;
            border-right: 0.125rem solid $white;
            transform: rotate(45deg);
          }
        }
      }
    }

    .button-text {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));

      font-size: 1rem;
      line-height: 1.5;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: $black;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
    }
  }
  &:hover {
    .circle {
      width: 100%;
      .icon {
        &.arrow {
          background: $white;
          transform: translate(1rem, 0);
        }
      }
    }
    .button-text {
      color: $white;
    }
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  background-color: transparent;
  border: 2px solid var(--color);
  color: var(--color);
  transition: 0.25s;
  box-shadow: inset 0 0 0 0 var(--hover);

  &:hover,
  &:focus {
    box-shadow: inset 6.5em 0 0 0 var(--hover);
    color: #fff;
    border-color: var(--hover);
  }
  &:hover {
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }
}
</style>
