import { Component, OnInit } from '@angular/core';
import { Tarea } from '../model/tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  tarea: Tarea = new Tarea();
  
  constructor(public tareasService: TareasService) {}

  ngOnInit(): void {
  }

  creaTarea() {
    this.tareasService.creaTarea(this.tarea);
    this.tarea = new Tarea();
  }
}
