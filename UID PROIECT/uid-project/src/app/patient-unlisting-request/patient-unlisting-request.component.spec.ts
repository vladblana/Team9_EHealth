import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUnlistingRequestComponent } from './patient-unlisting-request.component';

describe('PatientUnlistingRequestComponent', () => {
  let component: PatientUnlistingRequestComponent;
  let fixture: ComponentFixture<PatientUnlistingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientUnlistingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientUnlistingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
