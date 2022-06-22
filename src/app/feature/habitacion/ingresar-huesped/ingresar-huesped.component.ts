import { Component, OnInit } from '@angular/core';
import { Hospedaje } from 'app/core/modelo/hospedaje';
import { Huesped } from 'app/core/modelo/huesped';

@Component({
  selector: 'app-ingresar-huesped',
  templateUrl: './ingresar-huesped.component.html',
  styleUrls: ['./ingresar-huesped.component.scss']
})
export class IngresarHuespedComponent implements OnInit {

  hospedaje: Hospedaje;

  constructor() {
  }

  ngOnInit(): void {
  }

  cargarHuesped(huesped: Huesped[]){
    this.hospedaje.huesped = huesped;
  }

  cargarHospedaje(hospedaje: Hospedaje){
    this.hospedaje = hospedaje;
  }
}
