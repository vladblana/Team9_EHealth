import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-patient-unlisting-request',
  templateUrl: './patient-unlisting-request.component.html',
  styleUrls: ['./patient-unlisting-request.component.css']
})
export class PatientUnlistingRequestComponent implements OnInit {

  myDoctors = ["Timbus Calin", "Vlad Blana"];
  doctorControl = new FormControl('', [Validators.required]);
  currentUser: string;

  constructor(private route: ActivatedRoute, private router: Router, public snackBar: MatSnackBar) {
    this.currentUser = this.route.snapshot.params['username'];
    this.snackBar.open("Hello " + this.currentUser + ", fill the form so we can provide our patients with a better service", "Ok", {
      duration: 10000,
    });
  }

  ngOnInit() {

  }

  onSendDelisting() {

  }

}









