import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-capitulo05',
  templateUrl: './ejemplos-capitulo05.component.html',
  styleUrls: ['./ejemplos-capitulo05.component.scss']
})
export class EjemplosCapitulo05Component implements OnInit {

  texto = '';

  constructor() { }

  ngOnInit(): void {
  }

  saluda() {
    this.texto = '¡Hola, caracola!';
  }

  limpia() {
    this.texto = '';
  }

  completaRefran() {
    this.texto = '...buena sombra le cobija.';
  }
}
