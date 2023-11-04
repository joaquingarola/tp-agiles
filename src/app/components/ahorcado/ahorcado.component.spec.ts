import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoComponent } from './ahorcado.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Ahorcado } from '../../class/ahorcado';

describe('AhorcadoComponent', () => {
  let component: AhorcadoComponent;
  let fixture: ComponentFixture<AhorcadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhorcadoComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
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

  it('Debe iniciar el juego construirse el componente', () => {
    const mock = jest.spyOn(component.juego, 'iniciarJuego');

    component.ngOnInit();

    expect(mock).toHaveBeenCalled();
  });

  it('Debe arriesgar palabra al enviar el formulario y resetear el mismo', () => {
    const palabra = 'testPalabra';
    const arriesgarPalabraMock = jest.spyOn(component.juego, 'arriesgarPalabra');
    component.form.get('palabra')!.setValue(palabra);

    component.onFormSubmit();

    expect(arriesgarPalabraMock).toHaveBeenCalledWith(palabra);
    expect(component.form.value.palabra).toBeNull();
  });
});
