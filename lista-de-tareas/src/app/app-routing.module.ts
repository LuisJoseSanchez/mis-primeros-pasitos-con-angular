import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'formulario/:id', component: FormularioComponent },
  { path: 'formulario-tarea', component: FormularioComponent },
  { path: '',   redirectTo: '/listado', pathMatch: 'full' },
  { path: '**', component: Pagina404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
