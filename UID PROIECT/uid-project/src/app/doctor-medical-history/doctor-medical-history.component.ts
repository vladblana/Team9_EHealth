import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/Patient';
import {PatientService} from '../service/PatientService';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogOverviewExampleDialogComponent} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-doctor-medical-history',
  templateUrl: './doctor-medical-history.component.html',
  styleUrls: ['./doctor-medical-history.component.css']
})
export class DoctorMedicalHistoryComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
    const username = this.route.snapshot.params['username'];
    this.patientService.initializePatients();
    this.patient = this.patientService.getPatientByUsername(username);
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
        this.router.navigate(['/doctor-medical-history/' + this.patient.username], {relativeTo: this.route});
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
        this.router.navigate(['/doctor-medical-history/' + this.patient.username], {relativeTo: this.route});
      }
    });
  }
  ngOnInit() {
  }
  onMedicationsChange(i: number, value: string) {
    this.patient.medicalHistory.medications[i] = value;
  }
  onLabResultChange(key: string, value: string) {
    this.patient.medicalHistory.labResults.set(key, value);
  }
}
