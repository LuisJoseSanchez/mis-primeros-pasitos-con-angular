import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  frase: string = 'A la cama no te irás, sin saber una cosa más.';
  precio: number = 9.95;
  pi: number = Math.PI;
  hoy: Date = new Date();

  textoIngles = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
