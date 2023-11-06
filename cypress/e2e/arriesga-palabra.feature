Feature: Verificar cuando el usuario arriesga una palabra
  Scenario: Arriesgar palabra
    Given Inicio un nuevo juego
    When Arriesgo la palabra zxzxzxzx
    Then El estado del juego debe ser Derrota