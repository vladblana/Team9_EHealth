import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient-mainpage',
  templateUrl: './patient-mainpage.component.html',
  styleUrls: ['./patient-mainpage.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class PatientMainpageComponent implements OnInit {

  currentLoggedInUsername: string;

  constructor(private route: ActivatedRoute, private authService: AuthService, config: NgbCarouselConfig) {
    this.currentLoggedInUsername = this.authService.loggedInUsername;
    config.interval = 8000;
    config.wrap = true;
  }

  ngOnInit() {
  }

}
