import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegistrationRequestComponent } from './patient-registration-request.component';

describe('PatientRegistrationRequestComponent', () => {
  let component: PatientRegistrationRequestComponent;
  let fixture: ComponentFixture<PatientRegistrationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegistrationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegistrationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
