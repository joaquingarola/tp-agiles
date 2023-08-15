import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './services/calculadora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Clases';

  constructor(private service: CalculadoraService) {}

  ngOnInit(): void {
    this.service.sumaFromString('//*\n1|3|6|4');
  }
}
