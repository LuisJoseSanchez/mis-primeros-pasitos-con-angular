import { Component } from '@angular/core';
import { Tarea } from './model/tarea';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tareasPendientes: Tarea[] = [];
  // tareasRealizadas: Tarea[] = [];

  tarea: Tarea = new Tarea();
  
  constructor(public tareasService: TareasService) {
    // this.tareasPendientes = this.tareasService.getTareasPendientes();
    // this.tareasRealizadas = this.tareasService.getTareasRealizadas();
  }

  creaTarea() {
    this.tareasService.creaTarea(this.tarea);
    this.tarea = new Tarea();
  }
}
