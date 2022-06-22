import { Component, Input, OnInit } from '@angular/core';
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

}
