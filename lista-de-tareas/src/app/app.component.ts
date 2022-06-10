import { Component } from '@angular/core';
import { Tarea } from './model/tarea';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tareasPendientes: Tarea[] = [];
  tareasRealizadas: Tarea[] = [];

  titulo = '';
  descripcion = '';

  constructor(private tareasService: TareasService) {
    this.tareasPendientes = this.tareasService.getTareasPendientes();
    this.tareasRealizadas = this.tareasService.getTareasRealizadas();
  }
}
