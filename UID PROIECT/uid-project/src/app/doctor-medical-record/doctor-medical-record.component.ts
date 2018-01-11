import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../service/PatientService';
import {Patient} from '../model/Patient';

@Component({
  selector: 'app-doctor-medical-record',
  templateUrl: './doctor-medical-record.component.html',
  styleUrls: ['./doctor-medical-record.component.css']
})
export class DoctorMedicalRecordComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {
    const username = this.route.snapshot.params['username'];
    this.patientService.getPatientByUsername(username);
  }

  ngOnInit() {
  }

}
