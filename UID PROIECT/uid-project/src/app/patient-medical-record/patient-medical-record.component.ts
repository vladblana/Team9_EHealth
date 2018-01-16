import {Component, OnInit} from '@angular/core';
import {DialogOverviewExampleDialogComponent} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {Patient} from '../model/Patient';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from '../service/PatientService';

@Component({
  selector: 'app-patient-medical-record',
  templateUrl: './patient-medical-record.component.html',
  styleUrls: ['./patient-medical-record.component.css']
})
export class PatientMedicalRecordComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
    this.patientService.initializePatients();
    this.patient = this.patientService.getPatientByUsername('anapop');
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

      }
      this.router.navigate(['/patient-medical-record/'], {relativeTo: this.route});
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
      }
      this.router.navigate(['/patient-medical-record/'], {relativeTo: this.route});
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
