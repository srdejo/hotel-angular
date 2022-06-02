import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarHuespedComponent } from './ingresar-huesped.component';

describe('IngresarHuespedComponent', () => {
  let component: IngresarHuespedComponent;
  let fixture: ComponentFixture<IngresarHuespedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarHuespedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarHuespedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
