import { Injectable } from '@angular/core';
import { Hospedaje } from 'app/core/modelo/hospedaje';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {

  constructor(private httpService: HttpService) { }

  tomarHabitacion(dto: Hospedaje): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/hospedaje', dto);
  }

  entregarHabitacion(habitacion: string): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/hospedaje/entregar', {
      "numeroHabitacion": habitacion
    });
  }

  asearHabitacion(habitacion: string): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/hospedaje/aseada', {
      "numeroHabitacion": habitacion
    });
  }
}
