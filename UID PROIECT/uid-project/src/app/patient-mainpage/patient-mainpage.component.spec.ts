import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMainpageComponent } from './patient-mainpage.component';

describe('PatientMainpageComponent', () => {
  let component: PatientMainpageComponent;
  let fixture: ComponentFixture<PatientMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
