import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AhorcadoComponent } from './ahorcado.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Ahorcado } from '../../class/ahorcado';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { DificultadEnum } from '../../enums/dificultad.enum';
import { GameData } from '../../models/game-data.interface';

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
    const mockData: GameData = {
      palabrasFaciles: ['facil'],
      palabrasMedias: ['medio'],
      palabrasDificiles: ['dificil'],
      letras: ['a', 'b', 'c']
    };
    const httpClientSpy = jest.spyOn(httpClient, 'get').mockReturnValue(of(mockData));
    const iniciarJuegoSpy = jest.spyOn(component.juego, 'iniciarJuego');
    component.comenzarJuego = false;

    component.comenzar(DificultadEnum.Facil);

    expect(httpClientSpy).toHaveBeenCalledWith('assets/data/data.json');
    expect(iniciarJuegoSpy).toHaveBeenCalledWith(mockData.palabrasFaciles);
    expect(component.letras).toEqual(['a', 'b', 'c']);
    expect(component.comenzarJuego).toBeTruthy();
  });

  it('Debe arriesgar palabra al enviar el formulario y resetear el mismo', () => {
    const palabra = 'testPalabra';
    const arriesgarPalabraSpy = jest.spyOn(component.juego, 'arriesgarPalabra');
    component.form.get('palabra')!.setValue(palabra);

    component.onFormSubmit();

    expect(arriesgarPalabraSpy).toHaveBeenCalledWith(palabra);
    expect(component.form.value.palabra).toBeNull();
  });

  it('Debe devolver palabras fáciles para la dificultad "Facil"', () => {
    const dificultad = DificultadEnum.Facil;
    const dataMock: GameData = { palabrasFaciles: ["faciles"], palabrasMedias: ["medias"], palabrasDificiles: ["dificil"], letras: []}

    const palabras = component.seleccionarPalabras(dificultad, dataMock);

    expect(palabras).toEqual(dataMock.palabrasFaciles);
  });

  it('Debe devolver palabras de dificultad media para la dificultad "Medio"', () => {
    const dificultad = DificultadEnum.Medio;
    const dataMock: GameData = { palabrasFaciles: ["faciles"], palabrasMedias: ["medias"], palabrasDificiles: ["dificil"], letras: []}

    const palabras = component.seleccionarPalabras(dificultad, dataMock);

    expect(palabras).toEqual(dataMock.palabrasMedias);
  });

  it('Debe devolver palabras difíciles para la dificultad "Dificil"', () => {
    const dificultad = DificultadEnum.Dificil;
    const dataMock: GameData = { palabrasFaciles: ["faciles"], palabrasMedias: ["medias"], palabrasDificiles: ["dificil"], letras: []}

    const palabras = component.seleccionarPalabras(dificultad, dataMock);

    expect(palabras).toEqual(dataMock.palabrasDificiles);
  });

  it('Debe devolver palabras fáciles por defecto para una dificultad no válida', () => {
    const dificultad = 'cualquierCosa';
    const dataMock: GameData = { palabrasFaciles: ["faciles"], palabrasMedias: ["medias"], palabrasDificiles: ["dificil"], letras: []}

    const palabras = component.seleccionarPalabras(dificultad, dataMock);

    expect(palabras).toEqual(dataMock.palabrasFaciles);
  });

  it('Debe cambiar el estado del juego', () => {
    component.comenzarJuego = true;

    component.reiniciar()

    expect(component.comenzarJuego).toBeFalsy();
  });
});
