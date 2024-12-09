<template>
  <HeaderBar></HeaderBar>
  <div class="body">
    <img src="../assets/images/last-last.jpg" alt="image" />
    <div class="right">
      <div class="top">
        <div class="title">
          <div class="beyond_box">
            <span class="beyond">Beyond </span>
            <span class="the">The</span>
          </div>
          <span class="canvas">Canvas</span>
        </div>
        <div class="subtitle">
          <span>
            Step into a world where your <b>ideas</b> can come to life,
            <br />
            transformed into art that goes <i>beyond imagination.</i>
          </span>
        </div>
      </div>
      <div class="bottom">
        <div class="socials">
          <!-- <button class="cta_button" type="button">
          
            <span>Bring your visions to life</span>
            <Icon
              icon="ic:baseline-arrow-forward-ios"
              width="2.25rem"
              height="2.25rem"
              style="color: white"
            />
          </button>
           -->
          <div id="container">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Bring your visions to life</span>
            </button>
          </div>
          <div class="socials">
            <div class="instagram slide">
              <!-- Adiciona a classe 'slide' -->
              <fa :icon="['fab', 'instagram']" />
            </div>
            <div class="twitter slide">
              <!-- Adiciona a classe 'slide' -->
              <fa :icon="['fab', 'x-twitter']" />
            </div>
          </div>
        </div>
        <div class="stats">
          <div class="bottom_left">
            <div class="year_plus">
              <Icon icon="ic:round-plus" class="icon" />
              <div class="bottom_title">5 years</div>
            </div>
            <div class="bottom_subtitle">
              Of experience making my own, as well as clients' projects.
            </div>
          </div>
          <div class="bottom_right">
            <div class="year_plus">
              <Icon icon="ic:round-plus" class="icon" />
              <div class="bottom_title">200k</div>
            </div>
            <div class="bottom_subtitle">
              Followers on my social media, giving me feedbacks on my projects.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="lower">
    <SliderComponent />
  </section>
  <FooterBar></FooterBar>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import SliderComponent from "@/components/SliderComponent.vue";
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
@use "../assets/variables.scss" as var;

$bg: #f3f8fa;
$white: #fff;
$black: #282936;

@mixin transition(
  $property: all,
  $duration: 0.45s,
  $ease: cubic-bezier(0.65, 0, 0.076, 1)
) {
  transition: $property $duration $ease;
}

.lower {
  height: 100vh;
}

.body {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1rem;
  img {
    height: 757px;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 10rem;

    .top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .title {
        display: flex;
        flex-direction: column;

        .beyond {
          padding: 0 0 0 1rem;
        }

        .canvas {
          display: flex;
          align-items: center;
          max-height: 120px;
        }

        & > span {
          @include var.fontAbril(140px, 300, normal);
          text-transform: uppercase;
        }

        .beyond_box > span {
          font-family: "Poppins", sans-serif;
          text-transform: uppercase;
          font-size: 48px;
          font-weight: bold;
          font-style: italic;
        }

        .the {
          font-size: 32px !important;
        }
      }

      .subtitle {
        font-size: 20px;

        b {
          font-style: italic;
        }

        i {
          color: var.$gold-text;
          font-style: italic;
          font-weight: bold;
        }
      }
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

        /*
        .cta_button {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 60px;
          border: none;
          padding: 1.2rem 1rem;
          gap: 20px;
          background: var.$main-button-bg;
          color: white;
          font-style: italic;
          transition: 0.5s ease;
          cursor: pointer;

          &:hover {
            background: var.$main-button-bg-hover;
          }
          span {
            font-size: 30px;
            font-style: italic;
          }

          .greater-than {
            height: 36px;
            width: 36px;
          }
        }
          */

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
                @include transition(
                  all,
                  0.45s,
                  cubic-bezier(0.65, 0, 0.076, 1)
                );
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                background: $white;
                &.arrow {
                  @include transition(
                    all,
                    0.45s,
                    cubic-bezier(0.65, 0, 0.076, 1)
                  );
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
                    border-top: 0.125rem solid #fff;
                    border-right: 0.125rem solid #fff;
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

          svg {
            width: 24px;
            height: 24px;
          }
        }
      }

      .stats {
        display: flex;
        flex-direction: row;

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

            .bottom_title {
              font-size: 56px;
              font-style: italic;
              font-weight: bold;
            }
          }

          .bottom_subtitle {
            padding: 1rem 2rem;
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
