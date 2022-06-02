import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionRoutingModule } from './habitacion-routing.module';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';


@NgModule({
  declarations: [
    IngresarHuespedComponent
  ],
  imports: [
    CommonModule,
    HabitacionRoutingModule
  ]
})
export class HabitacionModule { }
