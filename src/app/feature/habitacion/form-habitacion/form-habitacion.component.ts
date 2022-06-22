import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Habitacion } from 'app/core/modelo/habitacion';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.scss']
})
export class FormHabitacionComponent implements OnInit {

  numeroHabitacion: string = '';

  @Output() habitacion = new EventEmitter<Habitacion>();

  habitacionForm = new FormGroup({
    adultos: new FormControl(''),
    ninios: new FormControl(''),
    dias: new FormControl(''),
    aire: new FormControl(''),
    porHoras: new FormControl(''),
    colchonetas: new FormControl(''),
    toallas: new FormControl(''),
    cobijas: new FormControl(''),
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarHabitacion().subscribe();
    this.cambiosForm();
  }

  cargarHabitacion(): Observable<string> {
    return this.route.params.pipe(map(p => this.numeroHabitacion = p.habitacion));
  }

  leerHospedaje() {
    return this.habitacionForm.value;
  }

  cambiosForm() {
    this.habitacionForm.valueChanges.subscribe(() => {
      this.habitacion.emit(this.habitacionForm.value);
    })
  }
}
