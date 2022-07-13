import { Injectable } from '@angular/core';
import { Habitacion } from 'app/core/modelo/habitacion';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private httpService: HttpService) { }

  consultarHabitacion(numero: string): Observable<Habitacion> {
    return this.httpService.doGet(environment.apiUrl + '/habitacion/'+numero);
  }

}
