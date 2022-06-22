import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenHospedajeComponent } from './resumen-hospedaje.component';

describe('ResumenHospedajeComponent', () => {
  let component: ResumenHospedajeComponent;
  let fixture: ComponentFixture<ResumenHospedajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenHospedajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
