import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {
    path: '',
    loadChildren: () => import('./feature/login/login.module').then(mod => mod.LoginModule),
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./feature/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'habitacion',
    loadChildren: () => import('./feature/habitacion/habitacion.module').then(mod => mod.HabitacionModule)
  },
  {
    path: '**',
    redirectTo: ''
  }  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
