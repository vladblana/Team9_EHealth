import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class DoctorPageComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 8000;
    config.wrap = true;
  }

  ngOnInit() {
  }

}
