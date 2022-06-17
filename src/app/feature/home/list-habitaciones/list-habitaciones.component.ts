import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitaciones } from 'app/core/constants/habitaciones';
import { Habitacion } from 'app/core/modelo/habitacion';
import { HabitacionPrecio } from 'app/core/modelo/habitacion-precio';

@Component({
  selector: 'app-list-habitaciones',
  templateUrl: './list-habitaciones.component.html',
  styleUrls: ['./list-habitaciones.component.scss']
})
export class ListHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[] = Habitaciones.ITEMS;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.habitaciones.forEach(element => {
      element.precios = this.orderPrecios(element.precios)
    });
  }

  
  orderPrecios(precios: HabitacionPrecio[]): HabitacionPrecio[] {
    precios = precios.reduce((acc, element) => {
      if (!element.esAdicional) {
        return [element, ...acc];
      }
      return [...acc, element];
    }, []);

    return precios.sort((a, b) => {
      if (a.esAdicional || b.esAdicional)
        return 0;
      if (a.cantidadPersonas == b.cantidadPersonas) {
        return (a.precio > b.precio) ? 1 : -1
      }
      return (a.cantidadPersonas > b.cantidadPersonas) ? 1 : -1
    })
  }

  usar(habitacion: Habitacion){
    this.router.navigateByUrl('/habitacion/ingresar-habitacion/'+habitacion.numero);
  }

  entregar(habitacion: Habitacion){
    console.log(habitacion);
    
  }

}
