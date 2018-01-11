import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/Patient';
import {PatientService} from '../service/PatientService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-doctor-medical-history',
  templateUrl: './doctor-medical-history.component.html',
  styleUrls: ['./doctor-medical-history.component.css']
})
export class DoctorMedicalHistoryComponent implements OnInit {

  patient: Patient;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {
    const username = this.route.snapshot.params['username'];
    this.patientService.getPatientByUsername(username);
  }

  ngOnInit() {
  }

}
