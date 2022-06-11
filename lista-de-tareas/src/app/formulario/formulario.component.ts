import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  accion = 'Nueva tarea';
  tarea = new Tarea();

  constructor(
    private tareasService: TareasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.accion = 'Editar tarea';
      this.tarea = <Tarea>this.tareasService.getTarea(+id);
    }
  }

  procesaTarea() {
    if (this.accion === 'Editar tarea') {
      this.tareasService.borraTarea(this.tarea.id);
    }
    this.tareasService.creaTarea(this.tarea);    
    this.router.navigateByUrl('/listado');
  }

}
