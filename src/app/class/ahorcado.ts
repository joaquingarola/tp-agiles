import { of, map, tap } from 'rxjs';

export class Ahorcado {
  public palabraOculta: string[] = [];
  public palabra = '';
  public vidas = 5;
  public posicionesAdivinadas: number[] = [];
  public letrasArriesgadas: string[] = [];
  public estadoJuego = 'Iniciado';

  public chequearLetra(letra: string): boolean {
    if(letra == ''){
      return false;
    }

    return this.palabra.toLowerCase().includes(letra.toLowerCase());
  }

  public chequearPalabra(palabra: string): boolean {
    return palabra.toLowerCase() == this.palabra.toLowerCase();
  }

  public posicionLetra(letra: string): void {
    this.palabra.split('').map((char, i) => {
      if(letra == char){
        this.posicionesAdivinadas.push(i);
      }
    });
    this.actualizarVista()
  }

  public actualizarVista(): void{
    this.palabra.split('').map((char, i) => {
      this.palabraOculta[i] = this.posicionesAdivinadas.includes(i) ? char : '_';
    });
  }

  public descontarVida(): void{
    this.vidas--;
  }

  public arriesgarLetra(letra: string): void {
    const result = this.chequearLetra(letra);
    this.letrasArriesgadas.push(letra.toUpperCase());
    
    result ? this.posicionLetra(letra) : this.descontarVida()

    this.actualizarEstado();
  }

  private actualizarEstado(): void {
    if(this.vidas == 0){
      this.estadoJuego = 'Derrota';
      return;
    };

    if(this.palabra.length == this.posicionesAdivinadas.length){
      this.estadoJuego = 'Victoria';
      return;
    }
  }

  public arriesgarPalabra(palabra: string): void {
    if(this.chequearPalabra(palabra)) {
      this.estadoJuego = 'Victoria'
    } else {
      this.vidas = 0;
      this.estadoJuego = 'Derrota';
    }
  }

  public iniciarJuego(palabrasPosibles: string[]): void {
    this.estadoJuego = 'Iniciado';
    this.vidas = 5;
    this.posicionesAdivinadas = [];
    this.letrasArriesgadas = [];
    const posicion = this.generarNumeroAleatorio(palabrasPosibles.length);
    this.palabra = palabrasPosibles[posicion];
    this.palabraOculta = "_".repeat(this.palabra.length).split('');
  }

  public generarNumeroAleatorio(max: number): number {
    const numeroMax = max - 1;
    return Math.floor(Math.random() * numeroMax);
  }
}
