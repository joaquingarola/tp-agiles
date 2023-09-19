export class Ahorcado {
  public palabra = 'agua';
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
    return true;
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
    
    if(!result) {
      this.descontarVida();
    } else{
      this.posicionLetra(letra);
    }

    this.actualizarEstado();
  }

  public actualizarEstado(): void {
    if(this.vidas == 0){
      this.estadoJuego = 'Derrota';
      return;
    };

    if(this.palabra.length == this.posicionesAdivinadas.length){
      this.estadoJuego = 'Victoria';
      return;
    }
  }
}
