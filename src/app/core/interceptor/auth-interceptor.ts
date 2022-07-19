import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, 
    private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    /*
        return next.handle(req).pipe(tap(() => { },
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status !== UNAUTHORIZED) {
                return;
              }
              console.log('deberia redirigir');
              
              this.router.navigate(['login']);
              return throwError(() => {
                const error: any = new Error(`Token vencido`);
                error.timestamp = Date.now();
                return error;
              })
            }
          }));
        */


    return next.handle(req).pipe(
      catchError(error => {
        switch (error.status) {
          case UNAUTHORIZED:
            console.log('deberia ir al login');
            this.tokenService.logout();
            this.router.navigate(['/login']);
            break;
          case FORBIDDEN:
            this.router.navigate(['/home']);
            break;
          default:
            return throwError(() => new Error('test'));
        }
      })
    );
    /*
  
  return next.handle(req).pipe(
    catchError(error => {
      switch (error.status) {
        case UNAUTHORIZED:
          this.router.navigate(['/login']);
          break;
        case FORBIDDEN:
          this.router.navigate(['/home']);
          break;
        default:
          return throwError(error);
      }
    })
  );

return next.handle(req).pipe(
  catchError(err => {
    console.log(err);
    switch (err.status) {
      case UNAUTHORIZED:
        console.log('debe ir a login porque se vencio el token');
        this.router.navigate(['/login']);
        break;
      case FORBIDDEN:
        this.router.navigate(['/home']);
        break;
      default:
        return of(err)
    }
  })
);*/
  }
}
