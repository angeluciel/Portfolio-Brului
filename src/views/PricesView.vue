<script setup>
import CardTemplateVue from "@/components/base/CardTemplate.vue";
import HeaderBar from "../components/layout/HeaderBar.vue";
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
</script>

<template>
  <main>
    <HeaderBar_mobile class="sm:hidden" />
    <div class="text">
      <div class="header_comission">WANT TO COMISSION?</div>
      <div class="bottom_text">
        <div class="choose_a_plan">
          CHOOSE A PLAN THAT SUITS YOUR NEEDS AND LET ME KNOW!
        </div>
        <div class="idk">Don't know what to choose? See the Difference.</div>
      </div>
    </div>
    <div class="card_section">
      <CardTemplateVue />
    </div>
  </main>
  <div class="hidden sm:block">
    <FooterBar />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/variables";

.text {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;

  .header_comission {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: variables.$semibold-weight;
  }

  .bottom_text {
    display: flex;
    flex-direction: column;
    .choose_a_plan,
    .idk {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 24px;
      font-weight: variables.$semibold-weight;
    }
    .idk {
      text-decoration: underline;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .idk:hover {
      color: variables.$text-color;
      opacity: 50%;
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 0 2rem 0;
}

.card_section {
  display: flex;
  justify-content: center;
  gap: 48px;
  align-items: center;
  padding: 0 100px;
  width: 100vw;
  margin-top: 32px;
}
</style>
