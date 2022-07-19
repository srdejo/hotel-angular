import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ListHabitacionesComponent } from './list-habitaciones/list-habitaciones.component';
import { SharedModule } from 'app/shared/shared.module';
import { CoreModule } from 'app/core/core.module';

@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent,
    ListHabitacionesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
