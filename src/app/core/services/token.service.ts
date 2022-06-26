import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService: CookieService) { }

  setToken(token: string):void {
    this.cookieService.set('token', token);
  }

  getToken(): string{
    return this.cookieService.get('token');
  }
  
  isLogged(): boolean {
    if(this.getToken()){
      return true;
    }
    else{
      return false;
    }
  }

  getNombreUsuario(): string {
    if(!this.isLogged()){
      return null;
    }
    const valuesJson = this.getPayload();
    return valuesJson.nombreUsuario;
  }

  isAdmin(): boolean {
    if (!this.isLogged()) {
      return null;
    }
    const valuesJson = this.getPayload();
    const roles = valuesJson.roles;
    if (roles.indexOf('admin') < 0) {
      return false;
    }
    return true;
  }

  logout(): void {
    this.cookieService.deleteAll();
  }

  private getPayload():any{
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = window.atob(payload);
    return JSON.parse(values);
  }
}
