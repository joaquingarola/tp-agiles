import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Inicio un nuevo juego", () => {
  cy.visit("http://localhost:4200/");
});

When("Arriesgo la letra A", () => {
  cy.get('[id=letter-a]').click();
});

Then("La letra A debe deshabilitarse", () => {
  cy.get('[id=letter-a]').should('be.disabled');
});