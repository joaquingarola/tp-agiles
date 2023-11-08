Feature: Verificar que el usuario pierde el juego al seleccionar 5 letras incorrectas
  Scenario: Estado de derrota al quedarse sin vidas
    Given Inicio un nuevo juego y la palabra es "agilidad"
    When Selecciono las letras "z","a","i","x","e","f","h"
    Then El estado del juego debe ser Derrota