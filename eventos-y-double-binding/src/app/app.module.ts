import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemplosCapitulo05Component } from './ejemplos-capitulo05/ejemplos-capitulo05.component';
import { EjemplosCapitulo06Component } from './ejemplos-capitulo06/ejemplos-capitulo06.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemplosCapitulo05Component,
    EjemplosCapitulo06Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
