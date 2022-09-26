import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMask } from 'app/core/constants/currency-mask';
import { SnackbardService } from 'app/core/services/snackbard.service';
import { TokenService } from 'app/core/services/token.service';
import { TurnoService } from '../shared/turno.service';

@Component({
  selector: 'app-cerrar-turno',
  templateUrl: './cerrar-turno.component.html',
  styleUrls: ['./cerrar-turno.component.scss']
})
export class CerrarTurnoComponent implements OnInit {

  currencyInputMask: CurrencyMask = CurrencyMask.currencyInputMask;
  saldoFinal = new FormControl('');
  saldo_inicial  = 0;
  saldo_final = 0;
  diferencia_saldo = 0;

  constructor(
    private readonly turnoService: TurnoService,
    private snakbarService: SnackbardService,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  cerrarTurno() {
    this.turnoService.cerrar(this.saldoFinal.value).subscribe({
      next: (data) => {
        console.log(data);
        this.saldo_final = data.saldo_final
        this.saldo_inicial = data.saldo_inicial
        this.diferencia_saldo = data.diferencia_saldo
      },
      error: (err) => {
        this.snakbarService.openSnackBar(err.message)
        this.tokenService.logout();
        this.router.navigate(['/login'])
      }
    })
  }

  salir(){
    this.tokenService.logout();
    this.router.navigate(['/login'])
  }

}
