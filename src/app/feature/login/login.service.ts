import { Injectable } from '@angular/core';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { LoginDto } from './dto/login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  login(dto: LoginDto): Observable<any> {
    return this.httpService.doPost(environment.apiUrl+'/auth/login', dto);
  }
}
