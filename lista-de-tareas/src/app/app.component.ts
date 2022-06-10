import { Component } from '@angular/core';
import { Tarea } from './model/tarea';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tarea: Tarea = new Tarea();
  
  constructor(public tareasService: TareasService) {}

  creaTarea() {
    this.tareasService.creaTarea(this.tarea);
    this.tarea = new Tarea();
  }
}
