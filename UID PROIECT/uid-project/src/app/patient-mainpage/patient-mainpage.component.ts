import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-patient-mainpage',
  templateUrl: './patient-mainpage.component.html',
  styleUrls: ['./patient-mainpage.component.css']
})

export class PatientMainpageComponent implements OnInit {

  currentLoggedInUsername: string;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.currentLoggedInUsername = this.authService.loggedInUsername;
  }

  ngOnInit() {
  }

}
