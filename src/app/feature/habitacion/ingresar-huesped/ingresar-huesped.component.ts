import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitacion } from 'app/core/modelo/habitacion';
import { HabitacionPrecio } from 'app/core/modelo/habitacion-precio';
import { Hospedaje } from 'app/core/modelo/hospedaje';
import { Huesped } from 'app/core/modelo/huesped';
import { firstValueFrom } from 'rxjs';
import { HabitacionPrecioService } from '../shared/habitacion-precio.service';
import { HabitacionService } from '../shared/habitacion.service';
import { FormControl } from '@angular/forms';
import { CurrencyMask } from 'app/core/constants/currency-mask';

@Component({
  selector: 'app-ingresar-huesped',
  templateUrl: './ingresar-huesped.component.html',
  styleUrls: ['./ingresar-huesped.component.scss']
})
export class IngresarHuespedComponent implements OnInit {


  currencyInputMask: CurrencyMask = CurrencyMask.currencyInputMask;
  hospedaje: Hospedaje = {} as Hospedaje;
  numeroHabitacion: string = '';
  precioDia: number = 0;
  habitacion: Habitacion;
  total = new FormControl(0);
  valorTotal: number;


  constructor(private route: ActivatedRoute,
    private habitacionService: HabitacionService,
    private habitacionPrecioService: HabitacionPrecioService) {
  }

  ngOnInit(): void {
    const numero = this.route.snapshot.paramMap.get('habitacion');
    this.cargarHabitacion(numero);

  }

  async cargarHabitacion(numero: string): Promise<void> {
    this.habitacion = await firstValueFrom(this.habitacionService.consultarHabitacion(numero))
    console.log(this.habitacion);
    
  }

  cargarHuesped(huesped: Huesped[]) {
    this.hospedaje.huesped = huesped;
  }

  cargarHospedaje(_hospedaje: Hospedaje) {
    console.log(_hospedaje);
    
    this.hospedaje = _hospedaje;
    this.consultarValor();
  }

  consultarValor(): void {
    let body: HabitacionPrecio = {
      habitacion: this.habitacion.numero,
      aire: this.hospedaje.aire,
      adultos: this.hospedaje.adultos,
      ninios: this.hospedaje.ninios,
      motos: this.hospedaje.motos,
      carros: this.hospedaje.carros
    }

    this.habitacionPrecioService.consultarValor(body)
      .subscribe({
        next: (data) => {
          this.precioDia = data.valor
          this.valorTotal = data.valor * this.hospedaje.dias
        },
        error: (err) => {
          console.error(err.error.message, 'Fail')
          this.precioDia = 0;
        }
      })
  }

  totalDinamico(){
    if(this.valorTotal == this.precioDia){
      return this.valorTotal
    }else{
      return this.precioDia * this.hospedaje.dias
    }
  }

  cambiarCalculado(nuevoPrecio) {
    console.log('nuevoPrecio', nuevoPrecio);
    let precio = nuevoPrecio.replace('$', '').replace('.', '');
    this.valorTotal = precio * this.hospedaje.dias  
    console.log('valorTotal', this.valorTotal);  
    this.totalDinamico()
  }

  confirmar() {
    console.log(this.hospedaje);

  }
}
