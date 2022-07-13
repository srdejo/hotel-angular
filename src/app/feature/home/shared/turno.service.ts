import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'app/core/services/http.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { TurnoComponent } from '../turno/turno.component';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
public isAuthenticatedObs: Observable<boolean> = _isAuthenticatedSubject.asObservable();

  constructor(private httpService: HttpService,
    public dialog: MatDialog) { }

  consultar(): Observable<any> {
    return this.httpService.doGet(environment.apiUrl + '/turno');
  }

  tieneTurnoActivo(){
    this.consultar().subs
  }

  iniciar(valor: number): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/turno', {saldo: valor});
  }

  cerrar(valor: number): Observable<any> {
    return this.httpService.doPost(environment.apiUrl + '/turno/cerrar', {saldo: valor});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TurnoComponent, {
      width: '250px',
      data: { name: 'nombre', animal: 'animal' },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
