import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetalleHabitacionComponent } from './detalle-habitacion/detalle-habitacion.component';
import { EntregarHabitacionComponent } from './entregar-habitacion/entregar-habitacion.component';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'ingresar-huesped/:habitacion',
    component: IngresarHuespedComponent
  },
  {
    path: 'detalle-habitacion/:habitacion',
    component: DetalleHabitacionComponent
  },
  {
    path: 'entregar-habitacion/:habitacion',
    component: EntregarHabitacionComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitacionRoutingModule { }
