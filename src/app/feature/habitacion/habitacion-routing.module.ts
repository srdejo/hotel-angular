import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'ingresar-huesped/:habitacion',
    component: IngresarHuespedComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitacionRoutingModule { }
