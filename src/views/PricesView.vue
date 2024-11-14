<script setup>
import CardTemplateVue from "@/components/CardTemplate.vue";
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
  <main>
    <HeaderBar />
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
      <!-- Card da esquerda -->
      <CardTemplateVue
        title="Lineart + Color"
        subtitle="For an affordable luxury."
        price="R$25 ~ R$70"
        :topics="[
          'Colored Pieces',
          'Impeccable Lineart',
          'Choose your Size:',
          'Full Body / Half Body',
          'Face Frame',
        ]"
        variant="regular"
      />

      <!-- Card do meio (maior e com estilo especial) -->
      <CardTemplateVue
        title="Complete Render"
        subtitle="For the best you can get"
        price="R$46 ~ R$100"
        :topics="[
          'Fully Rendered Art',
          'Detailed Pieces',
          'Choose your Size:',
          'Full Body / Half Body',
          'Face Frame',
        ]"
        variant="main"
      />

      <!-- Card da direita -->
      <CardTemplateVue
        title="Other"
        subtitle="For different Ideas"
        price="R$5 ~ R$100"
        :topics="[
          'Scenery',
          'Complex Background',
          'Base Color Backgrounds',
          'Icons',
        ]"
        variant="regular"
      />
    </div>
  </main>
  <FooterBar/>
</template>

<style lang="scss" scoped>
@use "../assets/variables";

.text {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 36px;
  margin-top: 32px;

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
