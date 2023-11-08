import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Inicio un nuevo juego y la palabra es {string}", (palabra) => {
  const staticResponse = {
    "letras": [
      "a", "b", "c", "d", "e", "f", "g", "h", "i",
      "j", "k", "l", "m", "n", "ñ", "o", "p", "q",
      "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    "palabrasFaciles": [ palabra ],
    "palabrasMedias": [],
    "palabrasDificiles": []
  }

  cy.visit("http://localhost:4200/");
  cy.intercept('GET', '/assets/data/data.json', staticResponse).as('todos');
  cy.get('[id=btn-dificultad-facil]').click();
  cy.wait('@todos');
});

When("Selecciono las letras {string},{string},{string},{string} y arriesgo la palabra {string}", (letra1,letra2,letra3,letra4,palabra) => {
  cy.get(`[id=letter-${letra1}]`).click();
  cy.get(`[id=letter-${letra2}]`).click();
  cy.get(`[id=letter-${letra3}]`).click();
  cy.get(`[id=letter-${letra4}]`).click();
  cy.get('[id=arriesgar-palabra]').type(`${palabra}`);
  cy.get('[id=btn-arriesgar-palabra]').click();
});

Then("El estado del juego debe ser derrota", () => {
  cy.contains('Que lástima! Perdiste!');
  cy.contains("Vidas: 0 / 5");
  cy.get('[id="btn-nuevo-juego-derrota"]').should('be.visible');
});