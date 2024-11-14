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
          <button class="cta_button" type="button">
            <span>Bring your visions to life</span>
            <fa :icon="['fas', 'greater-than']" />
          </button>
          <div class="instagram">
            <fa :icon="['fab', 'instagram']" />
          </div>
          <div class="twitter">
            <fa :icon="['fab', 'x-twitter']" />
          </div>
        </div>
        <div class="stats">
          <div class="left">
            <div class="bottom_title">+ 5 years</div>
            <div class="bottom_subtitle">
              Of experience making my own, as well as clients' projects.
            </div>
          </div>
          <div class="right">
            <div class="bottom_title">+ 200.000</div>
            <div class="bottom_subtitle">
              Followers on social medias, giving me feedbacks on my projects!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="lower"></div>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
</script>
<style lang="scss" scoped>
@use "../assets/variables.scss" as var;

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
        }

        .instagram,
        .twitter {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          height: 56px;
          width: 56px;
          border-radius: 100%;
          border: 3px solid var.$text-color;
        }
      }

      .stats {
        display: flex;
        flex-direction: row;

        .left,
        .right {
          display: flex;
          flex-direction: column;

          .bottom_title {
            display: flex;
            justify-content: center;

            font-size: 56px;
            font-weight: bold;
            font-style: italic;
          }

          .bottom_subtitle {
            display: flex;
            flex-direction: row;
            gap: 1.5rem;
            padding: 3rem 1.5rem;

            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
