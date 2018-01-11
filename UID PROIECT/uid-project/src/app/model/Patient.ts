import {MedicalHistory} from './MedicalHistory';
import {MedicalRecord} from './MedicalRecord';

import {Doctor} from './Doctor';
import {Appointment} from './Appointment';

// A patient has a single doctor
export class Patient {
  private _username: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _previousMedicalRecord: string;
  private _appointments: Array<Appointment>;


  constructor(username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: string, medicalRecord: MedicalRecord, medicalHistory: MedicalHistory, appointments: Array<Appointment>) {
    this._username = username;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._medicalRecord = medicalRecord;
    this._medicalHistory = medicalHistory;
    this._appointments = appointments;
  }

  private _medicalRecord: MedicalRecord;
  private _medicalHistory: MedicalHistory;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get medicalRecord(): MedicalRecord {
    return this._medicalRecord;
  }

  set medicalRecord(value: MedicalRecord) {
    this._medicalRecord = value;
  }

  get medicalHistory(): MedicalHistory {
    return this._medicalHistory;
  }

  set medicalHistory(value: MedicalHistory) {
    this._medicalHistory = value;
  }

}
