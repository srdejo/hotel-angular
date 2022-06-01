import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionRoutingModule } from './habitacion-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    HabitacionRoutingModule
  ]
})
export class HabitacionModule { }
