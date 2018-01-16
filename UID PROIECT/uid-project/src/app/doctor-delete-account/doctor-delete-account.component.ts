import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleDialogComponent} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-doctor-delete-account',
  templateUrl: './doctor-delete-account.component.html',
  styleUrls: ['./doctor-delete-account.component.css']
})
export class DoctorDeleteAccountComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {title: 'Delete Account', description: 'Are you sure you want to delete your account?'},
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

  onDelete() {
    console.log('Submit Feedback');
    this.openDialog();
  }


}
