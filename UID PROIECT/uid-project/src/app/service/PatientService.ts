import {Patient} from '../model/Patient';
import {Doctor} from '../model/Doctor';

export class PatientService {

  private _patients: Array<Patient>;


  constructor() {
  }


  get patients(): Array<Patient> {
    return this._patients;
  }

  set patients(value: Array<Patient>) {
    this._patients = value;
  }


  initializePatients(): Array<Patient> {

    // username,password,firstName,lastName,email,phoneNumber,previousMedicalRecord,doctor: Doc

    const patient1 = new Patient('anapop', 'anapop', 'Ana', 'Pop', 'ana.pop@gmail.com', '1234567890', '-');
    const patient2 = new Patient('andreipopescu', 'andreipopescu', 'Andrei', 'Popescu', 'andrei.popescu@gmail.com', '0987654321', '-');
    const patient3 = new Patient('patriciadeac', 'patriciadeac', 'Patricia', 'Deac', 'patricia.deac@gmail.com', '1234567890', '-');
    const patient4 = new Patient('alexandrugroza', 'alexandrugroza', 'Alexandru', 'Groza', 'alexandrugroza@gmail.com', '0987654321', '-');


    let patientArray = Array<Patient>(4);
    patientArray.push(patient1);
    patientArray.push(patient2);
    patientArray.push(patient3);
    patientArray.push(patient4);

    return patientArray;
  }

  addPatients(patient: Patient) {
    this.patients.push(patient);
  }

}
