import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnoRoutingModule } from './turno-routing.module';
import { IniciarTurnoComponent } from './iniciar-turno/iniciar-turno.component';
import { CerrarTurnoComponent } from './cerrar-turno/cerrar-turno.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    IniciarTurnoComponent,
    CerrarTurnoComponent
  ],
  imports: [
    CommonModule,
    TurnoRoutingModule,
    SharedModule
  ]
})
export class TurnoModule { }
