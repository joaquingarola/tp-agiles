import { Component, OnInit } from '@angular/core';
import { Ahorcado } from './class/ahorcado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Clases';

  ngOnInit(): void{
    const ahorcado = new Ahorcado();
    ahorcado.palabra = 'agua';

    const result = ahorcado.posicionLetra('a');

    console.log(result);
  } 
}
