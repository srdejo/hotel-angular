import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../shared/turno.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  turno: boolean;
  constructor(private turnoService: TurnoService) { }

  ngOnInit() {
    
    this.validarTurno()
  }

  validarTurno(): void {
    this.turnoService.consultar().subscribe(
      {
        next(value) {
          
          _isTurnoActiveSubject.next(false)
          console.log('this.turno', this.turno);
        },
        error(err) {
          _isTurnoActiveSubject.next(true)
          console.log('this.turno', this.turno);
      
        },
      }
    )
    
    console.log('this.turno', this.turno);
  }

}
