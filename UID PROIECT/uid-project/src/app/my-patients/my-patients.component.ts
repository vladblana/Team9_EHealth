import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {PatientService} from '../service/PatientService';
import {ActivatedRoute, Router} from '@angular/router';


export interface PatientElement {
  position: number;
  username: string;
  firstName: string;
  lastName: string;
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
    {columnDef: 'Position', header: 'Position'},
    {columnDef: 'Name', header: 'Name'},
    {columnDef: 'MedicalRecord', header: 'Medical Record'},
    {columnDef: 'MedicalHistory', header: 'Medical History'},
   //  {columnDef: 'Appointments', header: 'Appointments'},
  ];
  displayedColumns = this.columns.map(x => x.columnDef);

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) {
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
        username: patient.username,
        firstName: patient.firstName,
        lastName: patient.lastName
      });
    });
  }
  LinkToAppointments(id: string) {
    this.router.navigate(['/appointments/' + id]);
  }
  LinkToMedicalRecord(id: string) {
    this.router.navigate(['/doctor-medical-record/' + id]);
  }
  LinkToMedicalHistory(id: string) {
    this.router.navigate(['/doctor-medical-history/' + id]);
  }

}





