import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  minutes = ["00", "30"];

  filteredHours() {
    return this.hours.filter(e => e % 2 == 0);
  }

  myFilter = (d: Date): boolean => {
    const chosenDay = d.getDate();
    const chosenMonth = d.getMonth();
    const sundays = d.getDay();
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();
    console.log('Day of the month is: ', currentDay);
    if (chosenMonth === currentMonth) {
      return chosenDay > currentDay! && sundays != 0;
    }
    else {
      return sundays != 0;
    }
  };


  constructor() {
  }

  ngOnInit() {
  }

}
