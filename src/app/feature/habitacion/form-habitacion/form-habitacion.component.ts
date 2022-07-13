import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Habitacion } from 'app/core/modelo/habitacion';
import { Hospedaje } from 'app/core/modelo/hospedaje';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.scss']
})
export class FormHabitacionComponent implements OnInit {

  @Input() habitacion: Habitacion = {} as Habitacion;

  @Output() hospedaje = new EventEmitter<Hospedaje>();

  habitacionForm = new FormGroup({
    carros: new FormControl(0),
    motos: new FormControl(0),
    adultos: new FormControl(0),
    ninios: new FormControl(0),
    dias: new FormControl(1),
    aire: new FormControl(),
    horas: new FormControl(),
    colchonetas: new FormControl(0),
    toallas: new FormControl(0),
    cobijas: new FormControl(0),
    porHoras: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
    this.cambiosForm();
  }

  leerHospedaje() {
    return this.habitacionForm.value;
  }

  cambiosForm() {
    this.habitacionForm.valueChanges.subscribe(() => {
      this.hospedaje.emit(this.habitacionForm.value);
    })
  }
}
