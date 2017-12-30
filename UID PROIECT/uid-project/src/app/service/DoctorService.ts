import {Doctor} from '../model/Doctor';
import {Patient} from '../model/Patient';
import {Injectable} from '@angular/core';


export class DoctorService {

  private _doctors: Array<Doctor>;


  constructor() {
  }


  get doctors(): Array<Doctor> {
    return this._doctors;
  }

  set doctors(value: Array<Doctor>) {
    this._doctors = value;
  }

  initializeDoctors(): Array<Doctor> {

    // username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: string, previousMedicalRecord: string, doctor: Doc

    const patient1 = new Patient('calinPat', 'calin', 'CalinPat', 'Timbus', 'calin@calin.com', '1234567890', 'hai pa');

    let patientArray = Array<Patient>(2);
    patientArray.push(patient1);

    const doctor1 = new Doctor('calin', 'calin', 'Calin', 'Timbus', 'calin@calin.com', '1234567890', 'Pedriatics', patientArray);
    const doctor2 = new Doctor('blana', 'blana', 'Vlad', 'Blana', 'blana@vlad.com', '1234567890', 'Dermatology', patientArray);

    let doctorArray = Array<Doctor>(2);
    doctorArray.push(doctor1);
    doctorArray.push(doctor2);

    return doctorArray;
  }

  addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }
}
