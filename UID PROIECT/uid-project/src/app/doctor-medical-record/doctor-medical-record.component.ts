import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from '../service/PatientService';
import {Patient} from '../model/Patient';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleDialogComponent} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-doctor-medical-record',
  templateUrl: './doctor-medical-record.component.html',
  styleUrls: ['./doctor-medical-record.component.css']
})
export class DoctorMedicalRecordComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
    const username = this.route.snapshot.params['username'];
    this.patientService.initializePatients();
    this.patient = this.patientService.getPatientByUsername(username);
  }

  ngOnInit() {
  }
  onSaveChanges() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {title: 'Save changes', description: 'Are you sure you want to submit the changes?'},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        this.patientService.updatePatient(this.patient);
        this.router.navigate(['/my-patients/'], {relativeTo: this.route});
      } else {
        this.router.navigate(['/doctor-medical-record/' + this.patient.username], {relativeTo: this.route});
      }
    });
  }

  onCancelChanges() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {title: 'Discard changes', description: 'Are you sure you want to discard the changes?'},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (!result === true) {
        this.patientService.updatePatient(this.patient);
        this.router.navigate(['/my-patients/'], {relativeTo: this.route});
      } else {
        this.router.navigate(['/doctor-medical-record/' + this.patient.username], {relativeTo: this.route});
      }
    });
  }
  onSurgicalHistoryChange(i: number, value: string) {
    this.patient.medicalRecord.surgicalHistory[i] = value;
    console.log(value);
  }
  onAllergiesChange(i: number, value: string) {
    this.patient.medicalRecord.medicalAllergies[i] = value;

  }
  onHabitsChange(i: number, value: string) {
    this.patient.medicalRecord.habits[i] = value;
  }
  onFamilyHistoryChange(key: string, value: string) {
    this.patient.medicalRecord.familyHistory.set(key, value);
  }
}
