import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  private yesClicked: boolean;

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.yesClicked = false;
    this.dialogRef.close(this.yesClicked);
  }

  onYesClick(): void {
    this.yesClicked = true;
    this.dialogRef.close(this.yesClicked);
  }

  ngOnInit() {
  }
}
