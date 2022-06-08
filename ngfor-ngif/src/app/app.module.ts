import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemplosCapitulo07Component } from './ejemplos-capitulo07/ejemplos-capitulo07.component';
import { EjemplosCapitulo08Component } from './ejemplos-capitulo08/ejemplos-capitulo08.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemplosCapitulo07Component,
    EjemplosCapitulo08Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
