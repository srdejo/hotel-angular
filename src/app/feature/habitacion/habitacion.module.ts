import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionRoutingModule } from './habitacion-routing.module';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';
import { FormHuespedComponent } from './form-huesped/form-huesped.component';
import { FormHabitacionComponent } from './form-habitacion/form-habitacion.component';
import { ResumenHospedajeComponent } from './resumen-hospedaje/resumen-hospedaje.component';

import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    IngresarHuespedComponent,
    FormHuespedComponent,
    FormHabitacionComponent,
    ResumenHospedajeComponent
  ],
  imports: [
    CommonModule,
    HabitacionRoutingModule,
    SharedModule
  ]
})
export class HabitacionModule { }
