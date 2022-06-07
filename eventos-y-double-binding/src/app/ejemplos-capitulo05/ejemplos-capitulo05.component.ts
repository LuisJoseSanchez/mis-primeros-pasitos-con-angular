import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-capitulo05',
  templateUrl: './ejemplos-capitulo05.component.html',
  styleUrls: ['./ejemplos-capitulo05.component.scss']
})
export class EjemplosCapitulo05Component implements OnInit {

  texto = '';
  numero = 0

  constructor() { }

  ngOnInit(): void {
    this.generaAleatorio();
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

  //---------------------------------------------

  generaAleatorio() {
    this.numero = Math.floor(Math.random() * 100);
  }

  incrementa(n: number) {
    this.numero += n;
  }
}
