import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPageNavbarComponent } from './doctor-page-navbar.component';

describe('DoctorPageNavbarComponent', () => {
  let component: DoctorPageNavbarComponent;
  let fixture: ComponentFixture<DoctorPageNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPageNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
