import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../dashboard/inicio.component';
import { DashboardComponent } from './inicio/dashboard.component';

const routes: Routes = [{
  path: '',
  component: InicioComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'habitacion',
      loadChildren: () => import('../habitacion/habitacion.module').then(mod => mod.HabitacionModule)
    },
    {
      path: 'huesped',
      loadChildren: () => import('../huesped/huesped.module').then(mod => mod.HuespedModule)
    },
    {
      path: 'producto',
      loadChildren: () => import('../producto/producto.module').then(mod => mod.ProductoModule)
    },
    {
      path: 'factura',
      loadChildren: () => import('../factura/factura.module').then(mod => mod.FacturaModule)
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
