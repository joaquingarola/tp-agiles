Feature: Verificar pagina de inicio
  Scenario: Pagina de inicio
    Given Inicio un nuevo juego
    When Observo titulo y cantidad de vidas
    Then Deberia ver Ahorcado y cantidad de vidas