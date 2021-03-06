import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleDialogComponent} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {title: 'Emergency Notification!!', description: 'Are you sure you want to send notification?'},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        console.log('Patient chose to confirm action');
      } else {
        console.log('Patient still modifying stuff');
      }
    });
  }

  onEmergencyClick() {
    console.log('Submit Feedback');
    this.openDialog();
  }

}
