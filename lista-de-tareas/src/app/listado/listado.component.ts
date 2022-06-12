import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
 
  constructor(public tareasService: TareasService) {}

  ngOnInit(): void {
  }

}
