import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { TextoDeRellenoComponent } from './texto-de-relleno/texto-de-relleno.component';
import { PrincipalComponent } from './principal/principal.component';
import { EjemplosInterpolacionComponent } from './ejemplos-interpolacion/ejemplos-interpolacion.component';
import { PipesComponent } from './pipes/pipes.component';

import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { TraducePipe } from './traduce.pipe';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    TextoDeRellenoComponent,
    PrincipalComponent,
    EjemplosInterpolacionComponent,
    PipesComponent,
    TraducePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
