import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'app/core/modelo/habitacion';
import { HabitacionPrecio } from 'app/core/modelo/habitacion-precio';
import { Hospedaje } from 'app/core/modelo/hospedaje';
import { Huesped } from 'app/core/modelo/huesped';
import { firstValueFrom } from 'rxjs';
import { HabitacionPrecioService } from '../shared/habitacion-precio.service';
import { HabitacionService } from '../shared/habitacion.service';
import { FormControl } from '@angular/forms';
import { CurrencyMask } from 'app/core/constants/currency-mask';

import { SnackbardService } from 'app/core/services/snackbard.service';
import { HospedajeService } from '../shared/hospedaje.service';
import { CuentaService } from '../shared/cuenta.service';

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
  medio_pago;
  cuentas;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private habitacionService: HabitacionService,
    private habitacionPrecioService: HabitacionPrecioService,
    private hospedajeService: HospedajeService,
    private cuentaService: CuentaService,
    private snackbardService: SnackbardService) {

  }

  async ngOnInit(): Promise<void> {
    this.cargarHabitacion(await this.route.snapshot.paramMap.get('habitacion'));
    this.cargarCuentas();
  }

  async cargarHabitacion(numero: string): Promise<void> {
    this.habitacion = await firstValueFrom(this.habitacionService.consultarHabitacion(numero))
  }

  async cargarCuentas() {
    await this.cuentaService.consultarCuentas()
      .subscribe({
        next: (data) => {
          this.cuentas = data
        },
        error: (err) => {
          console.error(err, 'Fail')
        }
      })
  }

  cargarHuesped(huesped: Huesped[]) {
    this.hospedaje.huesped = huesped;
  }

  cargarHospedaje(_hospedaje: Hospedaje) {
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
          console.error(err, 'Fail')
          this.precioDia = 0;
        }
      })
  }

  totalDinamico() {
    if (this.valorTotal == this.precioDia) {
      return this.valorTotal
    } else {
      return this.precioDia * this.hospedaje.dias
    }
  }

  cambiarCalculado(nuevoPrecio) {
    let precio = nuevoPrecio.replace('$', '').replace('.', '');
    this.valorTotal = precio * this.hospedaje.dias
    this.totalDinamico()
  }

  confirmar() {
    if (this.hospedaje.huesped == undefined) {

      this.snackbardService.openSnackBar('Debes ingresar al menos un huesped')
      return
    }
    if (this.hospedaje.porHoras == null) { this.hospedaje.porHoras = false; }

    this.hospedajeService.tomarHabitacion(this.hospedaje).subscribe({
      next: (data) => {
        console.log('respuesta', data);
        this.snackbardService.openSnackBar(data.message)
        this.router.navigate(['/habitacion/detalle-habitacion/' + this.numeroHabitacion]);
      },
      error: (err) => {
        console.error('Error ', err)
        this.snackbardService.openSnackBar(err.message)
      }
    })
  }

}
