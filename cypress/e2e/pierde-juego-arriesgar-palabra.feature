Feature: Verificar el estado de derrota cuando la palabra arriesgada no es correcta
  Scenario: Estado de derrota al arriesgar palabra incorrecta
    Given Inicio un nuevo juego y la palabra es "agilidad"
    When Selecciono las letras "a","e","i","o" y arriesgo la palabra "scrum"
    Then El estado del juego debe ser derrota