import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorService} from '../service/DoctorService';
import {Doctor} from '../model/Doctor';
import {Appointment} from '../model/Appointment';


export interface AppointmentElement {
  date: string;
  hours: string;
  minutes: string;
  urgency: string;
  symptoms: string;
}

let APPOINTMENT_ELEMENT_DATA: AppointmentElement[] = [];

@Component({
  selector: 'app-doctor-all-appointments',
  templateUrl: './doctor-all-appointments.component.html',
  styleUrls: ['./doctor-all-appointments.component.css']
})
export class DoctorAllAppointmentsComponent implements OnInit {

  dataSource = new MatTableDataSource<AppointmentElement>();
  doctor: Doctor;

  columns = [
    {columnDef: 'Date', header: 'Date'},
    {columnDef: 'Time', header: 'Time'},
    {columnDef: 'Urgency', header: 'Urgency'},
    {columnDef: 'Symptoms', header: 'Symptoms'},
  ];
  displayedColumns = this.columns.map(x => x.columnDef);

  constructor(private doctorService: DoctorService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
    this.doctorService.initializeDoctors();
    this.doctor = doctorService.getDoctorByUsername('blana');
    this.dataSource = new MatTableDataSource<AppointmentElement>(APPOINTMENT_ELEMENT_DATA);
  }

  ngOnInit() {
  }

  getMyAppointments() {
    APPOINTMENT_ELEMENT_DATA.push({
        date: this.doctor.patients[0].appointments[0].date,
        hours: this.doctor.patients[0].appointments[0].hours,
        minutes: this.doctor.patients[0].appointments[0].minutes,
        urgency: this.doctor.patients[0].appointments[0].urgency,
        symptoms: this.doctor.patients[0].appointments[0].symptoms
      });

    APPOINTMENT_ELEMENT_DATA.push({
      date: this.doctor.patients[1].appointments[0].date,
      hours: this.doctor.patients[1].appointments[0].hours,
      minutes: this.doctor.patients[1].appointments[0].minutes,
      urgency: this.doctor.patients[1].appointments[0].urgency,
      symptoms: this.doctor.patients[1].appointments[0].symptoms
    });

    APPOINTMENT_ELEMENT_DATA.push({
      date: this.doctor.patients[2].appointments[0].date,
      hours: this.doctor.patients[2].appointments[0].hours,
      minutes: this.doctor.patients[2].appointments[0].minutes,
      urgency: this.doctor.patients[2].appointments[0].urgency,
      symptoms: this.doctor.patients[2].appointments[0].symptoms
    });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
