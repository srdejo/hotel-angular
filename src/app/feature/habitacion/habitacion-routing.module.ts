import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';

const routes: Routes = [{
  path: 'ingresar-huesped',
  component: IngresarHuespedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitacionRoutingModule { }
