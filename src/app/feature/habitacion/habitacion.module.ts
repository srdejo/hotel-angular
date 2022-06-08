import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionRoutingModule } from './habitacion-routing.module';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { FormHuespedComponent } from './form-huesped/form-huesped.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormHabitacionComponent } from './form-habitacion/form-habitacion.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IngresarHuespedComponent,
    FormHuespedComponent,
    FormHabitacionComponent
  ],
  imports: [
    CommonModule,
    HabitacionRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HabitacionModule { }
