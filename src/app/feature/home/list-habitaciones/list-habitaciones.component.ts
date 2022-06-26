import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitaciones } from 'app/core/constants/habitaciones';
import { Habitacion } from 'app/core/modelo/habitacion';

@Component({
  selector: 'app-list-habitaciones',
  templateUrl: './list-habitaciones.component.html',
  styleUrls: ['./list-habitaciones.component.scss']
})
export class ListHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[] = Habitaciones.ITEMS;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  
  

  usar(habitacion: Habitacion){
    this.router.navigateByUrl('/habitacion/ingresar-habitacion/'+habitacion.numero);
  }

  entregar(habitacion: Habitacion){
    console.log(habitacion);
    
  }

}
