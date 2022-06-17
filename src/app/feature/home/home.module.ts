import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'app/core/core.module';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListHabitacionesComponent } from './list-habitaciones/list-habitaciones.component';

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
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
