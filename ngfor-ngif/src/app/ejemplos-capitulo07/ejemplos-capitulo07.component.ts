import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-capitulo07',
  templateUrl: './ejemplos-capitulo07.component.html',
  styleUrls: ['./ejemplos-capitulo07.component.scss']
})
export class EjemplosCapitulo07Component implements OnInit {

  numeros: (number | null)[] = [1, 5, 8, 24, 32, 11, 55];
  frutas: (string | null)[]= ["pera", "manzana", "melón", "sandía", "mango"];
  
  numeroIntroducido: number | null = null;
  frutaIntroducida: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  insertaNumero() {
    this.numeros.push(this.numeroIntroducido);
    this.numeroIntroducido = null; // limpia el input
  }
  
  insertaFruta() {
    this.frutas.push(this.frutaIntroducida);
    this.frutaIntroducida = null; // limpia el input
  }
}
