import { Injectable } from '@angular/core';
import { Hospedaje } from 'app/core/modelo/hospedaje';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {


  // Observable string sources
  private addHuespedSource = new Subject<void>();

  // Observable string streams
  addHuesped$ = this.addHuespedSource.asObservable();

  constructor(private httpService: HttpService) { }

  // Service message commands
  addHuesped() {
    this.addHuespedSource.next();
  }

  tomarHabitacion(dto: Hospedaje): Observable<any> {
    console.log(dto);
    
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
