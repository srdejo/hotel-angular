import { Injectable } from '@angular/core';
import { HabitacionPrecio } from 'app/core/modelo/habitacion-precio';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionPrecioService {

  constructor(private httpService: HttpService) { }

  consultarValor(dto: HabitacionPrecio): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/habitacion-precio/consultar', dto);
  }
}
