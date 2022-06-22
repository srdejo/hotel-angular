import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionRoutingModule } from './habitacion-routing.module';
import { IngresarHuespedComponent } from './ingresar-huesped/ingresar-huesped.component';
import { FormHuespedComponent } from './form-huesped/form-huesped.component';
import { FormHabitacionComponent } from './form-habitacion/form-habitacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ResumenHospedajeComponent } from './resumen-hospedaje/resumen-hospedaje.component';


@NgModule({
  declarations: [
    IngresarHuespedComponent,
    FormHuespedComponent,
    FormHabitacionComponent,
    ResumenHospedajeComponent
  ],
  imports: [
    CommonModule,
    HabitacionRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HabitacionModule { }
