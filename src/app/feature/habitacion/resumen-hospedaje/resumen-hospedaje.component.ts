import { Component, Input, OnInit } from '@angular/core';
import { HabitacionPrecio } from 'app/core/modelo/habitacion-precio';
import { Hospedaje } from 'app/core/modelo/hospedaje';
import { environment } from 'environments/environment';
import { HabitacionPrecioService } from '../shared/habitacion-precio.service';

@Component({
  selector: 'app-resumen-hospedaje',
  templateUrl: './resumen-hospedaje.component.html',
  styleUrls: ['./resumen-hospedaje.component.scss']
})
export class ResumenHospedajeComponent implements OnInit {

  private _hospedaje = null;

  @Input('hospedaje')
  set hospedaje(hospedaje: Hospedaje){
    this._hospedaje = hospedaje;
    this.consultarValor()
  };

  serverUrl = environment.apiUrl;

  precioDia: number = 0;

  constructor(private habitacionPrecioService: HabitacionPrecioService) { }

  ngOnInit(): void {

  }

  valorDia(): number {
    if (this.hospedaje) {
      let precio: number = 0;
      return precio
    }
  }

  valorTotal(): number {
    if (this.hospedaje.dias > 0)
      return 0 // this.valorDia * this.hospedaje.dias;
  }

  consultarValor():void {
    let body: HabitacionPrecio = {
      habitacion: this._hospedaje.habitacion.numero,
      aire: this._hospedaje.aire,
      adultos: this._hospedaje.adultos,
      ninios: this._hospedaje.ninios
    }

    this.habitacionPrecioService.consultarValor(body)
      .subscribe({
        next: (data) => {
          this.precioDia =  data.valor         
        },
        error: (err) => {
          console.error(err.error.message, 'Fail')
          this.precioDia = 0;
        }
      })
  }
  
  get hospedaje(){
    return this._hospedaje;
  }

  confirmar(){
    console.log(this._hospedaje);
    
  }
}
