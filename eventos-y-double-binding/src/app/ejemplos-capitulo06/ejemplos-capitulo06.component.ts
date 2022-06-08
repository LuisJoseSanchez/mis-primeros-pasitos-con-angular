import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-capitulo06',
  templateUrl: './ejemplos-capitulo06.component.html',
  styleUrls: ['./ejemplos-capitulo06.component.scss']
})
export class EjemplosCapitulo06Component implements OnInit {

  texto = '';
  
  euros = 0;
  pesetas = 0;

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.euros = 0;
    this.pesetas = 0;
  }
}
