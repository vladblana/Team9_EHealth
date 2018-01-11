import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../service/PatientService';
import {DoctorService} from '../service/DoctorService';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleDialogComponent} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-doctor-review',
  templateUrl: './doctor-review.component.html',
  styleUrls: ['./doctor-review.component.css']
})
export class DoctorReviewComponent implements OnInit {

  doctors = [];
  doctorNames = <any>[];
  doctorNameFormGroup: FormGroup;
  pickedStatus: string;

  constructor(private doctorService: DoctorService, private patientService: PatientService, private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.doctors = doctorService.initializeDoctors();
    this.retrieveDoctorNames();
  }

  ngOnInit() {
    this.doctorNameFormGroup = this.formBuilder.group({
      doctorNameFormCtrl: ['', Validators.required]
    });
  }

  retrieveDoctorNames() {
    this.doctors.forEach((doctor, index) => {
      console.log(this.pickedStatus);
      this.doctorNames.push(doctor.firstName + ' ' + doctor.lastName);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {title: 'Doctor review', description: 'Are you sure you want to submit the review?'},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        console.log('Patient chose to confirm action');
      } else {
        console.log('Patient still modifying stuff');
      }
    });
  }

  onRequestAppointment() {
    console.log('Submit Feedback');
    this.openDialog();
  }
}
