import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Inicio un nuevo juego", () => {
  cy.visit("http://localhost:4200/");
});

When("Arriesgo la palabra zxzxzxzx", () => {
  cy.get('[id=arriesgar-palabra]').type('zxzxzxzx');
  cy.get('[id=btn-arriesgar-palabra]').click();
});

Then("El estado del juego debe ser Derrota", () => {
  cy.contains('Que lástima! Perdiste!');
  cy.contains("Vidas: 0 / 5");
  cy.get('[id="btn-nuevo-juego-derrota"]').should('be.visible');
});