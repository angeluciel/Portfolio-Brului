<script setup>
import CardTemplateVue from "@/components/CardTemplate.vue";
import HeaderBar from "../components/HeaderBar.vue";
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
        price="$24.99"
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
        price="$45.99"
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
        price="$5.00"
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
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

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
    font-weight: $semibold-weight;
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
      font-weight: $semibold-weight;
    }
    .idk {
      text-decoration: underline;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .idk:hover {
      color: $text-color;
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
