import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitaciones } from 'app/core/constants/habitaciones';
import { Hospedaje } from 'app/core/modelo/hospedaje';
import { Huesped } from 'app/core/modelo/huesped';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-ingresar-huesped',
  templateUrl: './ingresar-huesped.component.html',
  styleUrls: ['./ingresar-huesped.component.scss']
})
export class IngresarHuespedComponent implements OnInit {

  hospedaje: Hospedaje;
  numeroHabitacion: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cargarHabitacion().subscribe();
  }

  cargarHabitacion(): Observable<string> {
    return this.route.params.pipe(map(p => this.numeroHabitacion = p.habitacion));
  }

  cargarHuesped(huesped: Huesped[]) {
    this.hospedaje.huesped = huesped;
  }

  cargarHospedaje(hospedaje: Hospedaje) {
    this.hospedaje = hospedaje;
    this.hospedaje.habitacion = Habitaciones.ITEMS.find(habitacion => habitacion.numero == this.numeroHabitacion);
  }
}
