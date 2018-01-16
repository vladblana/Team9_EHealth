import {Doctor} from '../model/Doctor';
import {Patient} from '../model/Patient';
import {Appointment} from '../model/Appointment';
import {Injectable} from '@angular/core';

@Injectable()
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


    // apointments
    const appointment1 = new Appointment('2018-12-10', '8', '00', 'Blana Vlad', 'urgent', 'symptoms');
    let appointmentArray = Array<Appointment>(1);
    appointmentArray.push(appointment1);

    // patients
    const patient1 = new Patient('calinPat', 'calin', 'CalinPat', 'Timbus', 'calin@calin.com', '1234567890', null, null, appointmentArray);

    let patientArray = Array<Patient>(0);
    patientArray.push(patient1);

    // doctors
    const doctor1 = new Doctor('calin', 'calin', 'Calin', 'Timbus', 'calintimbus@gmail.com', '1234567890', 'Pedriatics', patientArray);
    const doctor2 = new Doctor('blana', 'blana', 'Vlad', 'Blana', 'blanavlad@gmail.com', '1234567890', 'Dermatology', patientArray);
    const doctor3 = new Doctor('razvan', 'razvan', 'Razvan', 'Florea', 'razvanflorea@gmail.com', '1234567890', 'Dermatology', patientArray);
    const doctor4 = new Doctor('andreea', 'andreea', 'Andreea', 'Damsa', 'andreeadamsa@gmail.com', '1234567890', 'Pediatrics', patientArray);
    const doctor5 = new Doctor('stefania', 'stefania', 'Stefania', 'Sucitu', 'stefaniasucitu@gmail.com', '1234567890', 'Nephrology', patientArray);
    const doctor6 = new Doctor('vlad', 'vlad', 'Vlad', 'Pop', 'popvlad@gmail.com', '1234567890', 'Cardiology', patientArray);
    const doctor7 = new Doctor('robert', 'robert', 'Robert', 'Groza', 'robertgroza@gmail.com', '1234567890', 'Gynecology', patientArray);
    const doctor8 = new Doctor('tudor', 'tudor', 'Tudor', 'Bologa', 'tudorbologa@gmail.com', '1234567890', 'Orthopedy', patientArray);
    const doctor9 = new Doctor('alexandra', 'alexandra', 'Alexandra', 'Florescu', 'alexandraflorescu@gmail.com', '1234567890', 'Pneumology', patientArray);

    let doctorArray = Array<Doctor>(0);
    doctorArray.push(doctor1);
    doctorArray.push(doctor2);
    doctorArray.push(doctor3);
    doctorArray.push(doctor4);
    doctorArray.push(doctor5);
    doctorArray.push(doctor6);
    doctorArray.push(doctor7);
    doctorArray.push(doctor8);
    doctorArray.push(doctor9);

    return doctorArray;
  }


  addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }
}
