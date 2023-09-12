export class Ahorcado {
  public palabra = 'agua';
  public vidas = 5;

  public chequearLetra(letra: string): boolean {
    if(letra == ''){
      return false;
    }

    return this.palabra.toLowerCase().includes(letra.toLowerCase());
  }

  public posicionLetra(letra: string): number[] {
    let index: number[] = [];

    this.palabra.split('').map((char, i) => {
      if(letra == char){
        index.push(i);
      }
    });


    return index;
  }

  public descontarVida(){
    this.vidas--;
  }

  public arriesgarLetra(letra: string) {
    const result = this.chequearLetra(letra);

    if(!result) {
      this.descontarVida();
    }

    const posiciones = this.posicionLetra(letra);
  }
}
