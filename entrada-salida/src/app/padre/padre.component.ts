import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  mensajeParaElHijo = '';
  mensajeDelHijo = '';

  constructor() { }

  ngOnInit(): void {
  }

  actualizaMensajeDelHijo(event: any) {
    this.mensajeDelHijo = event.mensaje;
  }
}
