import { Component } from '@angular/core';
import { ChistesService } from './chistes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chiste = '';

  constructor(private chistesService: ChistesService) {}

  cargaChiste() {
    this.chiste = 'Cargando chiste...';
    this.chistesService.getChiste().subscribe(
      nuevoChiste => this.chiste = nuevoChiste  
    )
  }
}
