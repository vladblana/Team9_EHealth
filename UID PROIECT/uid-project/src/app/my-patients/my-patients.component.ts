import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {PatientService} from '../service/PatientService';


export interface PatientElement {
  position: number;
  firstName: string;
  lastName: string;
  previousMedicalRecord: string;
}

let PATIENT_ELEMENT_DATA: PatientElement[] = [];

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit, OnDestroy {

  dataSource = new MatTableDataSource<PatientElement>();

  columns = [
    {columnDef: 'Position', header: 'Position', cell: (row: PatientElement) => `${row.position}`},
    {columnDef: 'First Name', header: ' First Name', cell: (row: PatientElement) => `${row.firstName}`},
    {columnDef: 'Last Name', header: 'Last Name', cell: (row: PatientElement) => `${row.lastName}`},
    {columnDef: 'Illness', header: 'Illness', cell: (row: PatientElement) => `${row.previousMedicalRecord}`},
  ];
  displayedColumns = this.columns.map(x => x.columnDef);

  constructor(private patientService: PatientService) {
    this.getMyPatients('doctor'); // todo use the currently logged in doctor here
    this.dataSource = new MatTableDataSource<PatientElement>(PATIENT_ELEMENT_DATA);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    PATIENT_ELEMENT_DATA.length = 0;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getMyPatients(doctor: string) {
    let patients = this.patientService.initializePatients();
    patients.forEach((patient, index) => {
      PATIENT_ELEMENT_DATA.push({
        position: index,
        firstName: patient.firstName,
        lastName: patient.lastName,
        previousMedicalRecord: patient.previousMedicalRecord
      });
    });
  }
}





