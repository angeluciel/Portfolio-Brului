// LoginView.cy.ts
import LoginView from "./LoginView.vue";
import { createFullTestSetup } from "../../../cypress/support/mount-with-full-setup";

describe("<LoginView />", () => {
  context("desktop viewport", () => {
    beforeEach(() => {
      cy.viewport(1280, 800); // Set viewport to desktop size
    });
    it("renders with fonts, styling, and icons", async () => {
      const mountOptions = await createFullTestSetup();

      cy.mount(LoginView, mountOptions);

      cy.wait(1000);

      // Now you can test the actual functionality
      cy.get('[data-cy="email-input"]').should("be.visible");

      // Test that social login buttons are present and functional
      cy.get("button").contains("Login with Google").should("be.visible");

      // You can even test that icons have loaded by checking for SVG elements
      cy.get("svg").should("have.length.greaterThan", 0);
    });
  });
  /* context("mobile viewport", () => {
    beforeEach(() => {
      cy.viewport("iphone-xr");
    });
    it("renders with fonts, styling, and icons", async () => {
      const mountOptions = await createFullTestSetup();

      cy.mount(LoginView, mountOptions);

      cy.wait(1000);

      // Now you can test the actual functionality
      cy.get('[data-cy="email-input"]').should("be.visible");

      // Test that social login buttons are present and functional
      cy.get("button").contains("Login with Google").should("be.visible");

      // You can even test that icons have loaded by checking for SVG elements
      cy.get("svg").should("have.length.greaterThan", 0);
    });
  }); */
});
