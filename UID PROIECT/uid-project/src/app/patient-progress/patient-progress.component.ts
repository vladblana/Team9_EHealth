import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-patient-progress',
  templateUrl: './patient-progress.component.html',
  styleUrls: ['./patient-progress.component.css']
})
export class PatientProgressComponent implements OnInit {


  constructor(public snackBar: MatSnackBar) {
    this.openSnackBar();
  }

  ngOnInit(): void {

  }

  private diseases = ['Infectious mononucleosis', 'Typhoid fever', 'Sarcoidosis'];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Cons 1', 'Cons 2', 'Cons 3', 'Cons 4', 'Cons 5', 'Cons 6'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [13, 18, 25, 48, 55, 70, 90], label: 'Me'},
    {data: [10, 20, 30, 40, 55, 75, 100], label: 'Average Patients'}
  ];
  private treatmentForDisease: string;

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  private update(chosenDisease): void {
    let treatmentResults1 = [13, 18, 25, 48, 55, 70, 90];
    let averageTreatmentResults1 = [15, 20, 30, 60, 72, 95, 97];
    let treatmentResults2 = [20, 40, 50, 60, 70, 100, 100];
    let averageTreatmentResults2 = [20, 40, 50, 72, 83, 97, 99];
    let treatmentResults3 = [10, 22, 30, 40, 50, 80, 100];
    let averageTreatmentResults3 = [10, 30, 40, 50, 60, 80, 85];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    if (chosenDisease === 'Infectious mononucleosis') {
      clone[0].data = treatmentResults1;
      clone[1].data = averageTreatmentResults1;
    }
    else if (chosenDisease === 'Typhoid fever') {
      clone[0].data = treatmentResults2;
      clone[1].data = averageTreatmentResults2;
    } else if (chosenDisease === 'Sarcoidosis') {
      clone[0].data = treatmentResults3;
      clone[1].data = averageTreatmentResults3;
    }
    this.barChartData = clone;
  }

  openSnackBar() {
    this.snackBar.open("Switch between the tabs(upper left) as you want", "Got it!", {
      duration: 15000,
    });
  }
}
