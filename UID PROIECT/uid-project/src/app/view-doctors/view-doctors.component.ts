import {Component, Injectable, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DoctorService} from '../service/DoctorService';
import {forEach} from '@angular/router/src/utils/collection';
import {Doctor} from '../model/Doctor';


export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  specialisation: string;
}


let ELEMENT_DATA: Element[] = [];


@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
@Injectable()
export class ViewDoctorsComponent implements OnInit, OnDestroy {


  doctorSp = ['None', 'Nephrology', 'Cardiology', 'Ophthalmology', 'Pedriatics', 'Dermatology', 'Orthopedy', 'Gynecology', 'Pneumology'];
  doctor_spec = 'None';
  dataSource = new MatTableDataSource<Element>();
  //displayedColumns = ['position', 'firstName', 'lastName', 'specialisation'];
  columns = [
    {columnDef: 'Position', header: 'Position', cell: (row: Element) => `${row.position}`},
    {columnDef: 'First Name', header: ' First Name', cell: (row: Element) => `${row.firstName}`},
    {columnDef: 'Last Name', header: 'Last Name', cell: (row: Element) => `${row.lastName}`},
    {columnDef: 'Specialisation', header: 'Specialisation', cell: (row: Element) => `${row.specialisation}`},
  ];
  displayedColumns = this.columns.map(x => x.columnDef);
  notNull = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private doctorService: DoctorService) {
    this.getDoctors();
    this.getDoctorsByFilter('None');
    this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    ELEMENT_DATA.length = 0;
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

    let doctors = this.doctorService.initializeDoctors();

    doctors.forEach((doctor, index) => {
      console.log(doctor); //
      console.log(index);
      ELEMENT_DATA.push({
        position: index,
        firstName: doctor.firstName,
        lastName: doctor.lastName,
        specialisation: doctor.specialisation
      });
    });
  }


  getDoctorsByFilter(doctor_specialisation): void {
    ELEMENT_DATA = [];
    this.notNull = false;
    console.log(doctor_specialisation);
    let doctors = this.doctorService.initializeDoctors();
    doctors.forEach((doctor, index) => {
      if (doctor.specialisation === this.doctor_spec) {
        ELEMENT_DATA.push({
          position: index,
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          specialisation: doctor.specialisation,
        });
      }
    });


    if ('None' === this.doctor_spec) {
      doctors.forEach((doctor, index) => {
        ELEMENT_DATA.push({
          position: index,
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          specialisation: doctor.specialisation,
        });
      });
    }


    console.log(ELEMENT_DATA.length);
    if (ELEMENT_DATA.length !== 0) {
      this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
      this.notNull = true;
    }
  }

}




