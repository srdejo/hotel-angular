import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'app/core/modelo/habitacion';
import { ListHabitacionesService } from '../shared/list-habitaciones.service';

@Component({
  selector: 'app-list-habitaciones',
  templateUrl: './list-habitaciones.component.html',
  styleUrls: ['./list-habitaciones.component.scss']
})
export class ListHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[] = [];

  constructor(private router: Router,
    private listHabitacionesService: ListHabitacionesService,
  ) { }

  ngOnInit(): void {
    this.listarHabitaciones()
  }

  listarHabitaciones() {
    this.listHabitacionesService.listarHabitaciones().subscribe(
      {
        next: (data) => {
          this.habitaciones = data
        },
        error: (err) => {
          console.error(err.error.message, 'Fail')
        }
      })
  }

  usar(habitacion: Habitacion) {
    this.router.navigateByUrl('/habitacion/ingresar-habitacion/' + habitacion.numero);
  }

  entregar(habitacion: Habitacion) {
    console.log(habitacion);

  }

}
