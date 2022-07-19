import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from './core/guard/security.guard';
import { LoginGuard } from './core/guard/login.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.module').then(mod => mod.LoginModule),
    canActivate: [LoginGuard],
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(mod => mod.HomeModule), 
    canActivate: [SecurityGuard], data: {expectedRol: ['admin', 'user']}
  },
  {
    path: 'habitacion',
    loadChildren: () => import('./feature/habitacion/habitacion.module').then(mod => mod.HabitacionModule),
    canActivate: [SecurityGuard], data: {expectedRol: ['admin', 'user']}
  },
  {
    path: 'turno',
    loadChildren: () => import('./feature/turno/turno.module').then(mod => mod.TurnoModule),
    canActivate: [SecurityGuard], data: {expectedRol: ['admin', 'user']}
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
