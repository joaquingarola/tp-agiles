import { Component } from '@angular/core';
import { Ahorcado } from '../../class/ahorcado';
import { GameData } from '../../models/game-data.interface';
import { DificultadEnum } from '../../enums/dificultad.enum';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {
  public form: FormGroup = this.fb.group({
    palabra: ['', [Validators.required]]
  });
  public dificultades = DificultadEnum;
  public comenzarJuego = false;
  public juego = new Ahorcado();
  public letras: string [] = [];
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  public comenzar(dificultad: string): void {
    this.comenzarJuego = true;
    this.http.get<GameData>('assets/data/data.json').subscribe(data => {
      this.letras = data.letras;
      const palabrasJuego = this.seleccionarPalabras(dificultad, data);
      this.juego.iniciarJuego(palabrasJuego);
    })
  }

  public seleccionarPalabras(dificultad: string, data: GameData): string[] {
    switch (dificultad) {
      case DificultadEnum.Facil:
        return data.palabrasFaciles;
      case DificultadEnum.Medio:
        return data.palabrasMedias;
      case DificultadEnum.Dificil:
        return data.palabrasDificiles;
      default:
        return data.palabrasFaciles;
    }
  }

  public reiniciar(): void {
    this.comenzarJuego = false;
  }

  public onFormSubmit(): void {
    this.juego.arriesgarPalabra(this.form.get('palabra')!.value);
    this.form.reset()
  }
}