import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.scss']
})
export class FormHabitacionComponent implements OnInit {

  numeroHabitacion: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarHabitacion().subscribe();
  }

  cargarHabitacion():Observable<string> {
    return this.route.params.pipe(map(p => this.numeroHabitacion = p.habitacion));
  }
}
