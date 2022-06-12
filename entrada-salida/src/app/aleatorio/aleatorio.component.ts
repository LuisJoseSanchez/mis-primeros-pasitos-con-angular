import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.scss']
})
export class AleatorioComponent implements OnInit {

  @Input()
  minimo: number = 1;

  @Input()
  maximo: number = 10;

  numero: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.numero = Math.floor(Math.random() * this.maximo) + this.minimo;
  }

}
