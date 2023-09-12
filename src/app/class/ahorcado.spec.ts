import { Ahorcado } from './ahorcado';

describe('Ahorcado', () => {
  const ahorcado = new Ahorcado();

  beforeEach(() => {
    ahorcado.palabra = 'agua';
  });
  
  it('Debe crear una instancia', () => {
    expect(new Ahorcado()).toBeTruthy();
  });

  it('Debe devolver falso si la letra no está en la palabra', () => {
    
    const letra = 'h';

    const result = ahorcado.chequearLetra(letra);

    expect(result).toBeFalsy();
  });

  it('Debe devolver verdadero si la letra está en la palabra', () => {
    const letra = 'u';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeTruthy();
  });

  it('Debe devolver falso si el caracter no es una letra', () => {
    const letra = '*';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeFalsy();
  });

  it('Bebe devolver falso si el caracter es vacíos empty', () => {
    const letra = '';

    const resultado = ahorcado.chequearLetra(letra);

    expect(resultado).toBeFalsy();
  });

  it('Debe ingnorar mayúsculas', () => {
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

  it('Debe devolver un array con la/s posicion/es de la letra en la palabra', () => {
    const letra = 'a';

    const resultado = ahorcado.posicionLetra(letra);

    expect(resultado.length).toBe(2);
    expect(resultado[0]).toBe(0);
    expect(resultado[1]).toBe(3);
  });
});
