import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      component: InicioComponent
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
