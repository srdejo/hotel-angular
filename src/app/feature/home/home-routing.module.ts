import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './inicio/dashboard.component';
import { InicioComponent } from '../dashboard/inicio.component';

const routes: Routes = [{
  path: '',
  component: InicioComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    }
  ]
},{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
