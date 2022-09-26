import { Injectable } from '@angular/core';
import { Cuenta } from 'app/core/modelo/cuenta';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private httpService: HttpService) { }

  consultarCuentas(): Observable<Cuenta> {
    return this.httpService.doGet(environment.apiUrl + '/cuenta/');
  }

}
