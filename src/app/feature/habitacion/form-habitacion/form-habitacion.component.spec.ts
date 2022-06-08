import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHabitacionComponent } from './form-habitacion.component';

describe('FormHabitacionComponent', () => {
  let component: FormHabitacionComponent;
  let fixture: ComponentFixture<FormHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
