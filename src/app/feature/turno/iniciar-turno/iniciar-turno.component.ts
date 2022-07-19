import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMask } from 'app/core/constants/currency-mask';
import { SnackbardService } from 'app/core/services/snackbard.service';
import { TurnoService } from '../shared/turno.service';

@Component({
  selector: 'app-iniciar-turno',
  templateUrl: './iniciar-turno.component.html',
  styleUrls: ['./iniciar-turno.component.scss']
})
export class IniciarTurnoComponent {

  saldoInicial = new FormControl('');
  currencyInputMask: CurrencyMask = CurrencyMask.currencyInputMask;

  constructor(
    private readonly turnoService: TurnoService,
    private snakbarService: SnackbardService,
    private router: Router,
    ) { }

  iniciarTurno() {
    console.log(this.saldoInicial);
    this.turnoService.iniciar(this.saldoInicial.value).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err.error.message, 'Fail')
        this.snakbarService.openSnackBar(err.error.message)
      }
    })
  }
}
