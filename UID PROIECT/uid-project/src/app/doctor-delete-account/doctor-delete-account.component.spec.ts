import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDeleteAccountComponent } from './doctor-delete-account.component';

describe('DoctorDeleteAccountComponent', () => {
  let component: DoctorDeleteAccountComponent;
  let fixture: ComponentFixture<DoctorDeleteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDeleteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
