import { Injectable } from '@angular/core';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListHabitacionesService {

  constructor(private httpService: HttpService) { }

  listarHabitaciones(): Observable<any> {
    return this.httpService.doGet(environment.apiUrl + '/habitacion');
  }
}
