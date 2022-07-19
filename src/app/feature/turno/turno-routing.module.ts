import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CerrarTurnoComponent } from './cerrar-turno/cerrar-turno.component';
import { IniciarTurnoComponent } from './iniciar-turno/iniciar-turno.component';

const routes: Routes = [
  {
    path: 'iniciar-turno',
    component: IniciarTurnoComponent
  },
  {
    path: 'cerrar-turno',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: CerrarTurnoComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnoRoutingModule { }
