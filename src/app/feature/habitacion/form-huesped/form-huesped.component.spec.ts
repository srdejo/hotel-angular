import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHuespedComponent } from './form-huesped.component';

describe('FormHuespedComponent', () => {
  let component: FormHuespedComponent;
  let fixture: ComponentFixture<FormHuespedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHuespedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHuespedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
