import { Component, Input, OnInit } from '@angular/core';
import { HabitacionPrecio } from 'app/core/modelo/habitacion-precio';
import { Hospedaje } from 'app/core/modelo/hospedaje';

@Component({
  selector: 'app-resumen-hospedaje',
  templateUrl: './resumen-hospedaje.component.html',
  styleUrls: ['./resumen-hospedaje.component.scss']
})
export class ResumenHospedajeComponent implements OnInit {

  @Input() hospedaje: Hospedaje = null;

  constructor() { }

  ngOnInit(): void {
  }

  valorDia(): number {
    if (this.hospedaje) {
      let habitacionPrecios: HabitacionPrecio[] = this.hospedaje.habitacion.precios;

      let habitacionPrecio: HabitacionPrecio[] = habitacionPrecios
        .filter(precios =>
          precios.cantidadPersonas == (this.hospedaje.adultos + this.hospedaje.ninios)
          && precios.aire == this.hospedaje.aire
          && !precios.esAdicional
        )
      console.log(habitacionPrecio);

      if (habitacionPrecio.length == 0)
        return 0

      if (habitacionPrecio[0].precioPorPersona)
        return habitacionPrecio[0].precio * (this.hospedaje.adultos + this.hospedaje.ninios);

      return habitacionPrecio[0].precio;
    }
  }

  valorTotal(): number {
    if (this.hospedaje.dias > 0)
      return this.valorDia() * this.hospedaje.dias;
  }
}
