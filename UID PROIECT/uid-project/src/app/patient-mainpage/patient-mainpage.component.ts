import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-mainpage',
  templateUrl: './patient-mainpage.component.html',
  styleUrls: ['./patient-mainpage.component.css']
})
export class PatientMainpageComponent implements OnInit {

  username: string;

  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
  }

  ngOnInit() {
  }

}
