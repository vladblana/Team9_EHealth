import {Patient} from '../model/Patient';
import {MedicalRecord} from '../model/MedicalRecord';
import {MedicalHistory} from '../model/MedicalHistory';
import {Appointment} from '../model/Appointment';
import {Injectable} from "@angular/core";

@Injectable()
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

    // apointments
    const appointment1 = new Appointment('2018-12-10', '8', '00', 'Blana Vlad', 'urgent', 'mild headache');
    const appointment2 = new Appointment('2018-01-10', '12', '30', 'Blana Vlad', 'routine', 'internal bleeding');
    const appointment3 = new Appointment('2018-01-10', '9', '30', 'Blana Vlad', 'urgent', 'tummy ache');
    let appointmentArray = Array<Appointment>(0);
    appointmentArray.push(appointment1);

    let appointmentArray2 = Array<Appointment>(0);
    appointmentArray2.push(appointment2);

    let appointmentArray3 = Array<Appointment>(0);
    appointmentArray3.push(appointment3);


    let surgicalHistory = Array<string>(0);
    let medicalAllergies = Array<string>(0);
    let habits = Array<string>(0);
    let familyHistory = new Map<string, string>();

    surgicalHistory.push('Vasectomy');
    surgicalHistory.push('Coronary artery bypass');
    medicalAllergies.push('Lactose intolerant');
    medicalAllergies.push('Dust allergy');
    medicalAllergies.push('Latex allergy');
    habits.push('Smoking');
    habits.push('Drinking');
    habits.push('Heroine');
    familyHistory.set('Mother', 'Alzheimer\'s disease');
    familyHistory.set('Grandmother', 'Arrhythmia');

    let medications = Array<string>(0);
    let labResults = new Map<string, string>();

    medications.push('Xanax');
    medications.push('Viagra');
    medications.push('Aspirin');
    labResults.set('Blood', 'Healthy');
    labResults.set('Throat', 'Streptococcus');

    const testMedicalRecord = new MedicalRecord(surgicalHistory, medicalAllergies, familyHistory, habits);
    const testMedicalHistory = new MedicalHistory(medications, labResults);

    const patient1 = new Patient('anapop', 'anapop', 'Ana', 'Pop', 'ana.pop@gmail.com', '1234567890', testMedicalRecord, testMedicalHistory, appointmentArray);
    const patient2 = new Patient('andreipopescu', 'andreipopescu', 'Andrei', 'Popescu', 'andrei.popescu@gmail.com', '0987654321', testMedicalRecord, testMedicalHistory, appointmentArray2);
    const patient3 = new Patient('patriciadeac', 'patriciadeac', 'Patricia', 'Deac', 'patricia.deac@gmail.com', '1234567890', testMedicalRecord, testMedicalHistory, appointmentArray3);
    const patient4 = new Patient('alexandrugroza', 'alexandrugroza', 'Alexandru', 'Groza', 'alexandrugroza@gmail.com', '0987654321', testMedicalRecord, testMedicalHistory, appointmentArray);


    let patientArray = Array<Patient>(0);
    patientArray.push(patient1);
    patientArray.push(patient2);
    patientArray.push(patient3);
    patientArray.push(patient4);

    this._patients = patientArray;

    return patientArray;
  }

  addPatients(patient: Patient) {
    this.patients.push(patient);
  }

  updatePatient(patient: Patient) {
    for (let p of this._patients){
      if (p.username === patient.username) {
        p = patient;
      }
    }
  }

  getPatientByUsername(username: string): any {

    for (let patient of this._patients) {
      if (patient.username === username) {
        return patient;
      }
    }
  }

}
