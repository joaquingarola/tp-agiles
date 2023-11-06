Feature: Verificar cuando el usuario arriesga letra
  Scenario: Arriesgar letra
    Given Inicio un nuevo juego
    When Arriesgo la letra A
    Then La letra A debe deshabilitarse