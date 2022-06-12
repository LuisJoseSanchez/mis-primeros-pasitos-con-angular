import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input()
  mensajeDeEntrada = '';

  @Output()
  mensajeDeSalida = new EventEmitter();

  mensajeParaElPadre = '';

  constructor() { }


  ngOnInit(): void {
  }

  enviaMensaje() {
    this.mensajeDeSalida.emit({mensaje: this.mensajeParaElPadre});
    console.log(this.mensajeParaElPadre);
  }
}
