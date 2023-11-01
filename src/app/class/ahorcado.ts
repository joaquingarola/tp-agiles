import { of, map } from 'rxjs';

export class Ahorcado {
  public palabrasPosibles = ['agua', 'fuego', 'aire', 'tierra', 'planta'];
  public palabra = 'agua';
  public vidas = 5;
  public posicionesAdivinadas: number[] = [];
  public letrasArriesgadas: string[] = [];
  public estadoJuego = 'Iniciado';

  public chequearLetra(letra: string): boolean {
    const prueba = 'hola';
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
    this.estadoJuego = this.chequearPalabra(palabra) ? 'Victoria' : 'Derrota'
  }

  public iniciarJuego(): void {
    const posicion = this.generarNumeroAleatorio();
    this.palabra = this.palabrasPosibles[posicion];
  }

  public generarNumeroAleatorio(): number {
    const numeroMax = this.palabrasPosibles.length - 1;
    return Math.floor(Math.random() * numeroMax);
  }
}
