import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'app/core/core.module';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ListHabitacionesComponent } from './list-habitaciones/list-habitaciones.component';
import { TurnoComponent } from './turno/turno.component';
import { TurnoService } from './shared/turno.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent,
    ListHabitacionesComponent,
    TurnoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [TurnoService]
})
export class HomeModule { }
