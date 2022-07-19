import { Injectable } from '@angular/core';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(
    private httpService: HttpService,
  ) { }

  
  consultar(): Observable<any> {
    return this.httpService.doGet(environment.apiUrl + '/turno');
  }


  iniciar(valor: number): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/turno', {saldo: valor});
  }

  cerrar(valor: number): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/turno/cerrar', {saldo: valor});
  }
}
