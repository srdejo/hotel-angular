import { Component, OnInit, ViewChild } from '@angular/core';
import { Huesped } from 'app/core/modelo/huesped';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms'
import { MatTable } from '@angular/material/table';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-huesped',
  templateUrl: './form-huesped.component.html',
  styleUrls: ['./form-huesped.component.scss']
})
export class FormHuespedComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Huesped>; 

  form = new FormGroup({
    docType: new FormControl('', Validators.required),
    docNumber: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
  });
  matcher = new MyErrorStateMatcher();

  dataSource: Huesped[] = [];
  displayedColumns: string[] = ['documento', 'nombre', 'quitar'];

  constructor() { }

  ngOnInit(): void { }

  add() {
    if (this.form.valid) {
      this.dataSource.push(this.form.value);
      this.table.renderRows();
      this.resetForm();
    } 
  }

  resetForm() {
    this.form.reset();
    this.form.controls.docType.setErrors(null);
    this.form.controls.docNumber.setErrors(null);
    this.form.controls.name.setErrors(null);
    this.form.controls.phone.setErrors(null);
    this.form.controls.email.setErrors(null);
    this.form.updateValueAndValidity();
  }

  remove(huesped: Huesped) {
    this.dataSource.forEach((value, index) => {
      if (value == huesped)
        this.dataSource.splice(index, 1);
    });
    this.table.renderRows();
  }
}
