Feature: Verificar el estado de victoria cuando el usuario selecciona las letras correctas y tiene vidas restantes
  Scenario: Estado de victoria al seleccionar las letras correspondientes
    Given Inicio un nuevo juego y la palabra es "agilidad"
    When Selecciono las letras "a","g","z","x","i","l","d"
    Then El estado del juego debe ser Victoria