Feature: Verificar el estado de victoria cuando la palabra arriesgada es correcta
  Scenario: Estado de victoria al arriesgar palabra correcta
    Given Inicio un nuevo juego y la palabra es "agilidad"
    When Selecciono las letras "a","e","i","o" y arriesgo la palabra "agilidad"
    Then El estado del juego debe ser victoria