import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  tarea: Tarea = new Tarea();

  constructor(
    private tareasService: TareasService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
    this.tarea = <Tarea>this.tareasService.getTarea(id);
  }

}
