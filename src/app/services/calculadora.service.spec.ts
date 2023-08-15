import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0', () => {
    const num1 = 0;
    const num2 = 0;

    const resultado = service.suma(num1, num2);

    expect(resultado).toBe(0);
  });

  it('should return an even number', () => {
    const num1 = 14;
    const num2 = 72;

    const resto = service.suma(num1, num2) % 2;

    expect(resto).toBe(0);
  });

  it('should return an odd number', () => {
    const num1 = 14;
    const num2 = 7;

    const resto = service.suma(num1, num2) % 2;

    expect(resto).toBe(1);
  });

  it('should return number major than zero', () => {
    const num1 = 2;
    const num2 = 1;

    const resto = service.suma(num1, num2);

    expect(resto).toBeGreaterThan(0);
  });

  it('should sum two zeros from string', () => {
    const string = '0,0';

    const res = service.sumaFromString(string);

    expect(res).toBe(0);
  });

  it('should sum two odd numbers from string', () => {
    const string = '1,7';

    const resultado = service.sumaFromString(string);
    const resto = resultado % 2;

    expect(resultado).toBe(8);
    expect(resto).toBe(0);
  });

  it('should sum several numbers from string', () => {
    const string = '1,7,5,12,500,3,-5,4';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(527);
  });

  it('should sum two decimal numbers from string', () => {
    const string = '1.5,7.2';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(8.7);
  });

  it('should return zero from empty string', () => {
    const string = '';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(0);
  });

  it('should return same number when there is only one', () => {
    const string = '50';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(50);
  });

  it('should sum numbers in different lines', () => {
    const string = '1,2,4\n5,6';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(18);
  });

  it('should sum numbers and set ; as delimiter', () => {
    const string = '//;\n1;3;6;4';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(14);
  });

  it('should sum numbers and set | as delimiter', () => {
    const string = '//|\n1|3|6|4';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(14);
  });

  it('should sum numbers and set * as delimiter', () => {
    const string = '//*\n1*3*6*4';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(14);
  });

  it('should sum numbers and set - as delimiter', () => {
    const string = '//-\n1-3-6-4';

    const resultado = service.sumaFromString(string);

    expect(resultado).toBe(14);
  });
});
