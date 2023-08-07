import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  public suma(num1: number, num2: number): number {
    return num1 + num2;
  }
}
