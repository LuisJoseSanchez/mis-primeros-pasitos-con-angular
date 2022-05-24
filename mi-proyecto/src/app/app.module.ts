import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { TextoDeRellenoComponent } from './texto-de-relleno/texto-de-relleno.component';
import { PrincipalComponent } from './principal/principal.component';
import { EjemplosInterpolacionComponent } from './ejemplos-interpolacion/ejemplos-interpolacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    TextoDeRellenoComponent,
    PrincipalComponent,
    EjemplosInterpolacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
