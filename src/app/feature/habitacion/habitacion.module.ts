import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionRoutingModule } from './habitacion-routing.module';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';
import { FormHuespedComponent } from './form-huesped/form-huesped.component';
import { FormHabitacionComponent } from './form-habitacion/form-habitacion.component';
import { ResumenHospedajeComponent } from './resumen-hospedaje/resumen-hospedaje.component';

import { SharedModule } from 'app/shared/shared.module';
import { DetalleHabitacionComponent } from './detalle-habitacion/detalle-habitacion.component';
import { EntregarHabitacionComponent } from './entregar-habitacion/entregar-habitacion.component';

@NgModule({
  declarations: [
    IngresarHuespedComponent,
    FormHuespedComponent,
    FormHabitacionComponent,
    ResumenHospedajeComponent,
    DetalleHabitacionComponent,
    EntregarHabitacionComponent
  ],
  imports: [
    CommonModule,
    HabitacionRoutingModule,
    SharedModule
  ]
})
export class HabitacionModule { }
