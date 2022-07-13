import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrencyMask } from 'app/core/constants/currency-mask';
import { TurnoService } from '../shared/turno.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent {

  saldoInicial = new FormControl('');
  currencyInputMask: CurrencyMask = CurrencyMask.currencyInputMask;

  constructor(private readonly turnoService: TurnoService) { }

  iniciarTurno() {
    console.log(this.saldoInicial);
    this.turnoService.iniciar(this.saldoInicial.value).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
        
      },
    })
  }
}
