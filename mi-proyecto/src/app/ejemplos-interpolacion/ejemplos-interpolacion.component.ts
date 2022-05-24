import { Component, OnInit } from '@angular/core';

type Persona = {
  nombre: string;
  puesto: string;
  sueldo: number;
}

@Component({
  selector: 'app-ejemplos-interpolacion',
  templateUrl: './ejemplos-interpolacion.component.html',
  styleUrls: ['./ejemplos-interpolacion.component.scss']
})
export class EjemplosInterpolacionComponent implements OnInit {

  x: number = 0;
  y: number = 0;
  palabra: string = "";
  persona: Persona = {
    nombre: '',
    puesto: '',
    sueldo: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.x = 23;
    this.y = 9;
    this.palabra = "meetup";
    this.persona = {
      nombre: "Alan Brito",
      puesto: "desarrollador full-stack",
      sueldo: 2000
    };
  }

}
