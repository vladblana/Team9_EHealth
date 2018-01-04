import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {DoctorService} from "../service/DoctorService";

export interface Element {
  name: string;
  pos: number;
  specialisation: string;
  email: string;
}

let ELEMENT_DATA: Element[] = [];


@Component({
  selector: 'app-patient-registration-request',
  templateUrl: './patient-registration-request.component.html',
  styleUrls: ['./patient-registration-request.component.css']
})


export class PatientRegistrationRequestComponent implements OnInit {

  doctorSp = ['Nephrology', 'Cardiology', 'Ophthalmology', 'Pedriatics', 'Dermatology', 'Orthopedy', 'Gynecology', 'Pneumology'];
  doctor_spec = '';
  dataSource = new MatTableDataSource<Element>();
  columns = [
    {columnDef: 'Position', header: 'Position', cell: (row: Element) => `${row.pos}`},
    {columnDef: 'Name', header: 'Name', cell: (row: Element) => `${row.name}`},
    {columnDef: 'Specialisation', header: 'Specialisation', cell: (row: Element) => `${row.specialisation}`},
    {columnDef: 'Email', header: 'Email', cell: (row: Element) => `${row.email}`}
  ];
  displayedColumns = this.columns.map(x => x.columnDef);
  notNull = false;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getDoctorsByFilter(doctor_specialisation): void {
    ELEMENT_DATA = [];
    this.notNull = false;
    console.log(doctor_specialisation);
    let doctors = this.doctorService.initializeDoctors();
    doctors.forEach((doctor, index) => {
      if (doctor.specialisation === this.doctor_spec) {
        ELEMENT_DATA.push({
          name: doctor.firstName,
          pos: index,
          specialisation: doctor.specialisation,
          email: doctor.email
        });
      }
    });
    console.log(ELEMENT_DATA.length);
    if (ELEMENT_DATA.length !== 0) {
      this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
      this.notNull = true;
    }
  }
}

