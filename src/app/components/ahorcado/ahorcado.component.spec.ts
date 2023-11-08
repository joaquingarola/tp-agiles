import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoComponent } from './ahorcado.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Ahorcado } from '../../class/ahorcado';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AhorcadoComponent', () => {
  let component: AhorcadoComponent;
  let fixture: ComponentFixture<AhorcadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhorcadoComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [FormBuilder, HttpClient],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.juego = new Ahorcado();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe setear las palabras posibles y las letras', () => {
    const httpClient = TestBed.inject(HttpClient);
    const mockData = {
      palabras: ['manzana', 'banana'],
      letras: ['a', 'b', 'c']
    };
    const httpClientSpy = jest.spyOn(httpClient, 'get').mockReturnValue(of(mockData));
    const iniciarJuegoSpy = jest.spyOn(component.juego, 'iniciarJuego');

    component.ngOnInit();

    expect(httpClientSpy).toHaveBeenCalledWith('assets/data/data.json');
    expect(iniciarJuegoSpy).toHaveBeenCalledWith(mockData.palabras);
    expect(component.letras).toEqual(['a', 'b', 'c']);
    expect(component.palabrasPosibles).toEqual(['manzana', 'banana']);
  });

  it('Debe arriesgar palabra al enviar el formulario y resetear el mismo', () => {
    const palabra = 'testPalabra';
    const arriesgarPalabraSpy = jest.spyOn(component.juego, 'arriesgarPalabra');
    component.form.get('palabra')!.setValue(palabra);

    component.onFormSubmit();

    expect(arriesgarPalabraSpy).toHaveBeenCalledWith(palabra);
    expect(component.form.value.palabra).toBeNull();
  });
});
