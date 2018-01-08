import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DoctorService} from '../service/DoctorService';


export interface Element {
  name: string;
  position: number;
  specialisation: string;
}

const ELEMENT_DATA: Element[] = [];


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
    let doctors = this.doctorService.initializeDoctors();
    doctors.forEach((doctor, index) => {
      console.log(doctor); //
      console.log(index);
      ELEMENT_DATA.push({position: index, name: doctor.firstName, specialisation: doctor.specialisation});
    });
  }
}




