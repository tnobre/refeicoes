import { NgModule, ReflectiveInjector }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DiaComponent }  from './dia.component';
import { SemanaComponent }  from './semana.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, JsonpModule ],
  declarations: [ AppComponent, DiaComponent, SemanaComponent],
  providers: 	[ appRoutingProviders],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }