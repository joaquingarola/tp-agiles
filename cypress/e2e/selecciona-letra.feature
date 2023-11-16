Feature: Verificar que al seleccionar una letra, esta se deshabilite
  Scenario: Seleccionar letra
    Given Inicio un nuevo juego
    When Selecciono la letra "b"
    Then La letra "a" debe deshabilitarse