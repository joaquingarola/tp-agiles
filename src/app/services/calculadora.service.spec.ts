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

    const resto = service.suma(num1, num2) % 2;;

    expect(resto).toBe(0);
  });

  it('should return an odd number', () => {
    const num1 = 14;
    const num2 = 7;

    const resto = service.suma(num1, num2) % 2;;

    expect(resto).toBe(1);
  });
});
