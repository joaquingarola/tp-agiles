import { Component, OnInit } from '@angular/core';
import { Ahorcado } from '../../class/ahorcado';
import { GameData } from '../../models/game-data.interface';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    palabra: ['', [Validators.required]]
  });
  public juego = new Ahorcado()
  public palabrasPosibles: string[] = [];
  public letras: string [] = [];
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<GameData>('../../../assets/data/data.json')
      .subscribe(data => {
        this.juego.iniciarJuego(data.palabras);
        this.letras = data.letras;
        this.palabrasPosibles = data.palabras;
      });
  }

  public onFormSubmit(): void {
    this.juego.arriesgarPalabra(this.form.get('palabra')!.value);
    this.form.reset()
  }
}