import {Doctor} from './Doctor';

// A patient has a single doctor
export class Patient {
  private _username: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _previousMedicalRecord: string;
  private _doctor: Doctor;


  constructor(username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: string, previousMedicalRecord: string, doctor: Doctor) {
    this._username = username;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._previousMedicalRecord = previousMedicalRecord;
    this._doctor = doctor;
  }


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

  get previousMedicalRecord(): string {
    return this._previousMedicalRecord;
  }

  set previousMedicalRecord(value: string) {
    this._previousMedicalRecord = value;
  }

  get doctor(): Doctor {
    return this._doctor;
  }

  set doctor(value: Doctor) {
    this._doctor = value;
  }
}
