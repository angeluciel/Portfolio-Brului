import FooterBar from "./FooterBar.vue";

const styles = import("../../assets/main.css");

describe("<FooterBar />", () => {
  it("renders", () => {
    cy.mount(FooterBar);
  });
});
