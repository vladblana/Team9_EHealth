import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {DoctorService} from "../service/DoctorService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogOverviewExampleDialogComponent} from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";


export interface Element {
  firstName: string;
  lastName: string;
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
    {columnDef: 'First Name', header: ' First Name', cell: (row: Element) => `${row.firstName}`},
    {columnDef: 'Last Name', header: 'Last Name', cell: (row: Element) => `${row.lastName}`},
    {columnDef: 'Specialisation', header: 'Specialisation', cell: (row: Element) => `${row.specialisation}`},
    {columnDef: 'Email', header: 'Email', cell: (row: Element) => `${row.email}`}
  ];
  displayedColumns = this.columns.map(x => x.columnDef);
  notNull = false;
  sympt : string;
  usernameFormGroup: FormGroup;
  doctorSpecFormGroup: FormGroup;
  doctorEmailFormGroup: FormGroup;

  constructor(private doctorService: DoctorService, private formBuilder: FormBuilder,private dialog: MatDialog) {
  }

  ngOnInit() {
    this.usernameFormGroup = this.formBuilder.group({
      usernameFormCtrl: ['', Validators.required]
    });
    this.doctorSpecFormGroup = this.formBuilder.group({
      doctorSpecFormCtrl: ['', Validators.required]
    });
    this.doctorEmailFormGroup = this.formBuilder.group({
      doctorEmailFormCtrl: ['', Validators.required]
    });
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
          firstName: doctor.firstName,
          lastName: doctor.lastName,
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {title: 'Registration request', description: 'Are you sure you want to confirm the registration?'},
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


  onRegistrationRequest(): void {
      console.log('Registration requested');
      console.log('Username is', this.usernameFormGroup.controls['usernameFormCtrl'].value);
      console.log('Doctor specialisation is', this.doctorSpecFormGroup.controls['doctorSpecFormCtrl'].value);
      console.log('Doctor Email is', this.doctorEmailFormGroup.controls['doctorEmailFormCtrl'].value);
      console.log('Symptoms', this.sympt);
      this.openDialog();
  }
}

