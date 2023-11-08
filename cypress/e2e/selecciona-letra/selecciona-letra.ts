import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Inicio un nuevo juego", () => {
  cy.visit("http://localhost:4200/");
  cy.get('[id=btn-dificultad-facil]').click();
});

When("Selecciono la letra {string}", (letra) => {
  cy.get(`[id=letter-${letra}]`).click();
});

Then("La letra {string} debe deshabilitarse", (letra) => {
  cy.get(`[id=letter-${letra}]`).should('be.disabled');
});