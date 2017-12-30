import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DoctorService} from '../service/DoctorService';
import {forEach} from '@angular/router/src/utils/collection';
import {Doctor} from '../model/Doctor';


export interface Element {
  name: string;
  position: number;
  specialisation: string;


  // constructor( position: number, name: string, specialisation: string) {
  //   this.name = name;
  //   this.position = position;
  //   this.specialisation = specialisation;
  // }
}


@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
@Injectable()
export class ViewDoctorsComponent implements OnInit {

  doctorSp = ['Nephrology', 'Cardiology', 'Ophthalmology', 'Pedriatics', 'Dermatology', 'Orthopedy', 'Gynecology', 'Pneumology'];
  doctor_spec = '';
  dataSource = new MatTableDataSource<Element>();
  displayedColumns = ['position', 'name', 'specialisation'];
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private doctorService: DoctorService) {

     this.getDoctors();
    this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getDoctors(): void {

    let doctors = new Array<Doctor>(2);
    doctors = this.doctorService.initializeDoctors();

    doctors.forEach((doctor, index) => {
      console.log(doctor); //
      console.log(index);
      ELEMENT_DATA.push({position:index, name:doctor.firstName, specialisation:doctor.specialisation});
    });

  }

}


const ELEMENT_DATA: Element[] = [



  //
  // {position: 1, name: 'Timbus Calin', specialisation: 'Ophthalmology'},
  // {position: 2, name: 'Blana Vlad', specialisation: 'Pneumology'},
  // {position: 3, name: 'Razvan Florea', specialisation: 'Cardiology'},
  // {position: 4, name: 'Damsa Andreea', specialisation: 'Pedriatics'},
  // {position: 5, name: 'Timbus Calin', specialisation: 'Ophthalmology'},
  // {position: 6, name: 'Blana Vlad', specialisation: 'Pneumology'},
  // {position: 7, name: 'Razvan Florea', specialisation: 'Cardiology'},
  // {position: 8, name: 'Damsa Andreea', specialisation: 'Pedriatics'},
  // {position: 9, name: 'Timbus Calin', specialisation: 'Ophthalmology'},
  // {position: 10, name: 'Blana Vlad', specialisation: 'Pneumology'},
  // {position: 11, name: 'Razvan Florea', specialisation: 'Cardiology'},
  // {position: 12, name: 'Damsa Andreea', specialisation: 'Pedriatics'},
  // {position: 13, name: 'Timbus Calin', specialisation: 'Ophthalmology'},
  // {position: 14, name: 'Blana Vlad', specialisation: 'Pneumology'},
  // {position: 15, name: 'Razvan Florea', specialisation: 'Cardiology'},
  // {position: 16, name: 'Damsa Andreea', specialisation: 'Pedriatics'},
  // {position: 17, name: 'Timbus Calin', specialisation: 'Ophthalmology'},
  // {position: 18, name: 'Blana Vlad', specialisation: 'Pneumology'},
  // {position: 19, name: 'Razvan Florea', specialisation: 'Cardiology'},
  // {position: 20, name: 'Damsa Andreea', specialisation: 'Pedriatics'},

];


