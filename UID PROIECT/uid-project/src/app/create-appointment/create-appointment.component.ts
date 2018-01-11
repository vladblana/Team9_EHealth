import {Component, OnInit, Injectable} from '@angular/core';
import {DoctorService} from "../service/DoctorService";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from "../service/PatientService";
import {DialogOverviewExampleDialogComponent} from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
@Injectable()
export class CreateAppointmentComponent implements OnInit {
  hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  minutes = ["00", "30"];
  doctors = [];
  doctorNames = <any>[];
  dateFormGroup: FormGroup;
  timeFormGroup: FormGroup;
  doctorNameFormGroup: FormGroup;
  optionRadioValues = ['Routine', 'Urgent'];
  currentDate: string;
  pickedStatus: string;
  symptoms: string;


  filteredHours() {
    return this.hours.filter(e => e % 2 === 0);
  }

  myFilter = (d: Date): boolean => {
    const chosenDay = d.getDate();
    const chosenMonth = d.getMonth();
    const sundays = d.getDay();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    console.log('Day of the month is: ', currentDay);
    if (chosenMonth === currentMonth) {
      return chosenDay > currentDay! && sundays !== 0;
    }
    else {
      return sundays !== 0;
    }
  };


  constructor(private doctorService: DoctorService, private patientService: PatientService, private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.doctors = doctorService.initializeDoctors();
    this.retrieveDoctorNames();
  }

  ngOnInit() {
    this.dateFormGroup = this.formBuilder.group({
      dateCtrl: ['', Validators.required]
    });
    this.timeFormGroup = this.formBuilder.group({
      timeHoursFormCtrl: ['', Validators.required],
      timeMinutesFormCtrl: ['', Validators.required]
    });
    this.doctorNameFormGroup = this.formBuilder.group({
      doctorNameFormCtrl: ['', Validators.required]
    });
  }

  retrieveDoctorNames() {
    this.doctors.forEach((doctor) => {
      console.log(this.pickedStatus);
      this.doctorNames.push(doctor.firstName + ' ' + doctor.lastName);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {title: 'Appointment request', description: 'Are you sure you want to confirm the appointment?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        console.log('Patient chose to send appointment');
      } else {
        console.log('Patient still modifying stuff');
      }
    });
  }


  onRequestAppointment() {
    console.log('Appointment requested');
    let currentDate = this.currentDate.toString();
    console.log('Date is: ', currentDate.slice(0,currentDate.indexOf("00")));
    console.log('Hour', this.timeFormGroup.controls['timeHoursFormCtrl'].value);
    console.log('Minutes', this.timeFormGroup.controls['timeMinutesFormCtrl'].value);
    console.log('Doctor Name is', this.doctorNameFormGroup.controls['doctorNameFormCtrl'].value);
    console.log('Picked Status is', this.pickedStatus);
    console.log('Symptoms', this.symptoms);
    this.openDialog();
  }
}
