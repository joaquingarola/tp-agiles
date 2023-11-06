import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Inicio un nuevo juego", () => {
  cy.visit("http://localhost:4200/");
});

When("Observo titulo y cantidad de vidas", () => {
  //
});

Then("Deberia ver Ahorcado y cantidad de vidas", () => {
  cy.contains("Ahorcado");
  cy.contains("Vidas: 5 / 5");
  cy.get('[id^=letter-]').should('have.length', 27);
});