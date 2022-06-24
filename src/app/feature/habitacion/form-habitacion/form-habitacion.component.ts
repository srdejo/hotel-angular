import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Habitaciones } from 'app/core/constants/habitaciones';
import { Habitacion } from 'app/core/modelo/habitacion';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.scss']
})
export class FormHabitacionComponent implements OnInit {

  @Input() numeroHabitacion: string = '';

  @Output() habitacion = new EventEmitter<Habitacion>();

  habitacionSeleccionada: Habitacion = null;
  habilitarAire: boolean = true;

  habitacionForm = new FormGroup({
    adultos: new FormControl(0),
    ninios: new FormControl(0),
    dias: new FormControl(0),
    aire: new FormControl(this.habilitarAire),
    horas: new FormControl(),
    colchonetas: new FormControl(0),
    toallas: new FormControl(0),
    cobijas: new FormControl(0),
  });

  constructor() { }

  ngOnInit(): void {
    this.validarAire();
    this.cambiosForm();
  }

  leerHospedaje() {
    return this.habitacionForm.value;
  }

  cambiosForm() {
    this.habitacionForm.valueChanges.subscribe(() => {
      this.habitacion.emit(this.habitacionForm.value);
    })
  }

  validarAire(){
    this.habitacionSeleccionada = 
    Habitaciones.ITEMS.find(habitacion => habitacion.numero == this.numeroHabitacion);
    this.habilitarAire = this.habitacionSeleccionada.aire;
    
  }
}
