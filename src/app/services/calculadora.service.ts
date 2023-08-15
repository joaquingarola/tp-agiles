import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  public suma(num1: number, num2: number): number {
    return num1 + num2;
  }

  public sumaFromString(string: string): number{
    let delimiter = ',';

    if(string.startsWith('//')){
      delimiter = string.split('')[2];
      string = string.replace(`//${delimiter}\n`, '');
    }

    const newString = string.replace('\n', delimiter);
    const suma = newString.split(delimiter).reduce((total, valor) => total + Number(valor), 0);
    
    return suma;
  }
}