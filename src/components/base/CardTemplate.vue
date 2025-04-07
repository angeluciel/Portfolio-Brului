<template>
  <div :class="['card', variantClass]">
    <div class="top">
      <div class="title">{{ title }}</div>
      <div class="price">
        <div class="price-tags">
          <span>Starting Price</span>
          <h3>{{ price }}</h3>
        </div>
      </div>
      <div class="subtitle">
        <div class="subtext">{{ subtitle }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="topics">
        <ul class="list">
          <li v-for="(topic, index) in topics" :key="index">
            <span class="plus">+</span>
            <span>{{ topic }}</span>
          </li>
        </ul>
      </div>
      <div class="comission-now flex justify-center items-center text-center">
        <router-link to="/prices/newComission" class="button"
          >Order now!</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  price: String,
  topics: Array,
  variant: {
    type: String,
    default: "regular", // aceita "regular" ou "main"
  },
});

const variantClass = computed(() => {
  return props.variant === "main" ? "card-main" : "card-regular";
});
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.card {
  @extend %card-style;
  background: var.$secondary-bg;
  height: 524px;

  .top {
    display: flex;
    flex-direction: column;
    height: 100%;

    .title {
      display: flex;
      font-weight: var.$xbold-weight;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      position: relative;
      height: 74px;
      font-size: 22px;
      width: 100%;
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .price-tags {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        span {
          opacity: 50%;
          font-weight: var.$xbold-weight;
          font-size: 16px;
        }

        h3 {
          font-size: 36px;
          font-weight: var.$xbold-weight;
        }
      }
    }

    .subtitle {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: end;
      height: 82px;

      .subtext {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 12px;
        border-bottom: 1px solid var.$text-color;
        gap: 12px;
        font-size: 22px;
        font-weight: var.$semibold-weight;
      }
    }
  }

  &.card-regular {
    @extend %card-style;
    background: var.$secondary-bg;
    height: 524px;

    .button {
      @include var.button-style(#d8a0a0, #fefefe, #d8a0a0);
    }
  }

  &.card-main {
    @extend %card-style;
    background: var.$secondary-hg-bg;
    height: 560px;

    .bottom {
      .topics {
        .list {
          .plus {
            color: #f9e9c9;
          }
        }
      }
    }

    .button {
      @include var.button-style(#fefefe, var.$secondary-hg-bg, #fefefe);
    }
  }
}

.bottom {
  display: flex;
  flex-direction: column;
  height: 287px;
  gap: 8px;
  align-items: center;
  justify-content: end;

  .topics {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: fit-content;

    ul {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      width: fit-content;

      .plus {
        color: #ba8d2e;
        font-weight: var.$xbold-weight;
      }
    }
  }

  .comission-now {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 12px;
    padding: 24px 16px;
  }
}
</style>
