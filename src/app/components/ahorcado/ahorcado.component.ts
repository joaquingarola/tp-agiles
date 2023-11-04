import { Component, OnInit } from '@angular/core';
import { Ahorcado } from '../../class/ahorcado';
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
  public letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.juego.iniciarJuego();
  }

  public onFormSubmit(): void {
    this.juego.arriesgarPalabra(this.form.get('palabra')!.value);
    this.form.reset()
  }
}