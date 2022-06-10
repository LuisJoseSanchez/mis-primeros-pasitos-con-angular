import { Injectable } from '@angular/core';
import { Tarea } from './model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tarea[] = [];

  constructor() {
    this.tareas = [
      {
        id: 0,
        titulo: 'Ordenar el escritorio',
        descripcion: 'Sacarlo todo, limpiar y tirar lo que no sirve.',
        realizada: false
      },
      {
        id: 1,
        titulo: 'Hacer la colada',
        descripcion: 'Separar la ropa blanca de la ropa de color.',
        realizada: false
      },
      {
        id: 2,
        titulo: 'Reciclar',
        descripcion: 'Tirar el plástico al contenedor amarillo y el papel al azul.',
        realizada: true
      }
    ];
  }

  getTareas() {
    return this.tareas;
  }

  getTareasPendientes() {
    return this.tareas.filter(t => !t.realizada);
  }

  getTareasRealizadas() {
    return this.tareas.filter(t => t.realizada);
  }

  private idMaximo() {
    return this.tareas
      .map(t => t.id)
      .reduce((i, maximo) => Math.max(i, maximo), 0);
  }

  creaTarea(t: Tarea) {
    t.id = this.idMaximo() + 1;
    this.tareas.push(t);
  }

  borraTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id != id);
  }

  marcaComoRealizada(id: number) {
    const indice = this.tareas.map(t => t.id).indexOf(id);
    this.tareas[indice].realizada = true;
  }

  marcaComoPendiente(id: number) {
    const indice = this.tareas.map(t => t.id).indexOf(id);
    this.tareas[indice].realizada = false;
  }
}
