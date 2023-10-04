import { Ahorcado } from './ahorcado';

describe('Ahorcado', () => {
  const ahorcado = new Ahorcado();
  
  it('Debe crear una instancia', () => {
    expect(new Ahorcado()).toBeTruthy();
  });

  it('Debe devolver falso si la letra no está en la palabra', () => {
    ahorcado.palabra = 'agua';
    const letra = 'h';

    const result = ahorcado.chequearLetra(letra);

    expect(result).toBeFalsy();
  });

  it('Debe devolver verdadero si la letra está en la palabra', () => {
    ahorcado.palabra = 'agua';
    const letra = 'u';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeTruthy();
  });

  it('Debe devolver falso si el caracter no es una letra', () => {
    ahorcado.palabra = 'agua';
    const letra = '*';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeFalsy();
  });

  it('Debe devolver falso si el caracter es vacío', () => {
    ahorcado.palabra = 'agua';
    const letra = '';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeFalsy();
  });

  it('Debe ignorar mayúsculas', () => {
    ahorcado.palabra = 'agua';
    const letra = 'G';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeTruthy();
  });

  it('Debe ignorar minúsculas', () => {
    const letra = 'g';
    ahorcado.palabra = 'AGUA';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeTruthy();
  });

  it('Debe descontar una vida', () => {
    ahorcado.vidas = 1;

    ahorcado.descontarVida();

    expect(ahorcado.vidas).toBe(0);
  });

  it('Debe devolver un array la/s posicion/es de la/s letra/s adivinada/s hasta el momento', () => {
    ahorcado.palabra = 'agua';
    ahorcado.posicionesAdivinadas = [];
    const letra1 = 'a';
    const letra2 = 'g';

    ahorcado.posicionLetra(letra1);
    ahorcado.posicionLetra(letra2);

    expect(ahorcado.posicionesAdivinadas.length).toBe(3);
    expect(ahorcado.posicionesAdivinadas).toStrictEqual([0,3,1]);
  });

  it('Debe devolver un array con la/s letra/s arriesgada/s hasta el momento (en mayúscula)', () => {
    ahorcado.letrasArriesgadas = [];
    const letra1 = 'w';
    const letra2 = 'a';

    ahorcado.arriesgarLetra(letra1);
    ahorcado.arriesgarLetra(letra2);

    expect(ahorcado.letrasArriesgadas.length).toBe(2);
    expect(ahorcado.letrasArriesgadas).toStrictEqual(['W','A']);
  });

  it('Debe restar vida si la letra no pertenece a la palabra', () => {
    ahorcado.palabra = 'agua';
    ahorcado.vidas = 5;
    const letra = 'w';

    ahorcado.arriesgarLetra(letra);

    expect(ahorcado.vidas).toBe(4);
  });

  it('No debe restar vida si la letra pertenece a la palabra', () => {
    ahorcado.palabra = 'agua';
    ahorcado.vidas = 5;
    const letra = 'a';

    ahorcado.arriesgarLetra(letra);

    expect(ahorcado.vidas).toBe(5);
  });

  it('El estado final del juego debe ser Victoria si adivino todas las letras', () => {
    ahorcado.estadoJuego = 'Iniciado';
    ahorcado.vidas = 5;
    ahorcado.palabra = 'agua';
    ahorcado.posicionesAdivinadas = [];

    ahorcado.arriesgarLetra('a');
    ahorcado.arriesgarLetra('g');
    ahorcado.arriesgarLetra('u');

    expect(ahorcado.estadoJuego).toBe('Victoria');
  });

  it('El estado final del juego debe ser Derrota si la cantidad de vidas es 0', () => {
    ahorcado.estadoJuego = 'Iniciado';
    ahorcado.vidas = 5;
    ahorcado.palabra = 'agua';
    ahorcado.posicionesAdivinadas = [];

    ahorcado.arriesgarLetra('w');
    ahorcado.arriesgarLetra('z');
    ahorcado.arriesgarLetra('c');
    ahorcado.arriesgarLetra('p');
    ahorcado.arriesgarLetra('o');

    expect(ahorcado.estadoJuego).toBe('Derrota');
  });

  it('Debe devolver verdadero si la palabra arriesgada coincide con la palabra del juego', () => {
    ahorcado.palabra = 'agua';
    const palabraArriesgada = 'agua';
    
    const resultado = ahorcado.chequearPalabra(palabraArriesgada);

    expect(resultado).toBeTruthy();
  });

  it('Debe devolver falso si la palabra arriesgada no coincide con la palabra del juego', () => {
    ahorcado.palabra = 'agua';
    const palabraArriesgada = 'fuego';

    const resultado = ahorcado.chequearPalabra(palabraArriesgada);

    expect(resultado).toBeFalsy();
  });

  it('El estado final del juego debe ser Victoria si la palabra arriesgada es correcta', () => {
    ahorcado.estadoJuego = 'Iniciado';
    ahorcado.palabra = 'agua';
    const palabraArriesgada = 'agua';

    ahorcado.arriesgarPalabra(palabraArriesgada);

    expect(ahorcado.estadoJuego).toBe('Victoria');
  });

  it('El estado final del juego debe ser Derrota si la palabra arriesgada es incorrecta', () => {
    ahorcado.estadoJuego = 'Iniciado';
    ahorcado.palabra = 'agua';
    const palabraArriesgada = 'fuego';

    ahorcado.arriesgarPalabra(palabraArriesgada);

    expect(ahorcado.estadoJuego).toBe('Derrota');
  });

  it('Debe ignorar mayúsculas y minúsculas al arriesgar palabra', () => {
    ahorcado.estadoJuego = 'Iniciado';
    ahorcado.palabra = 'agua';
    const palabraArriesgada = 'AgUA';

    ahorcado.arriesgarPalabra(palabraArriesgada);

    expect(ahorcado.estadoJuego).toBe('Victoria');
  });

  it('Debe generar un numero aleatorio entre 0 y la posicion de la ultima palabra', () => {
    ahorcado.palabrasPosibles = ['agua', 'fuego', 'aire', 'tierra', 'alto', 'bajo'];

    const resultado = ahorcado.generarNumeroAleatorio();

    expect(resultado).toBeGreaterThanOrEqual(0);
    expect(resultado).toBeLessThanOrEqual(ahorcado.palabrasPosibles.length - 1);
  });

  it('Debe seleccionar una palabra aleatoria al iniciar el juego', () => {
    ahorcado.palabra = '';
    ahorcado.palabrasPosibles = ['agua', 'fuego', 'aire', 'tierra'];

    ahorcado.iniciarJuego();

    expect(ahorcado.palabrasPosibles).toContain(ahorcado.palabra);
  });
});
