import {Patient} from './Patient';

// A doctor has multiple patients
export class Doctor {
  private _username: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _specialisation: string;
  private _patients: Array<Patient>;


  constructor(username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: string, specialisation: string, patients: Array<Patient>) {
    this._username = username;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._specialisation = specialisation;
    this._patients = patients;
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

  get specialisation(): string {
    return this._specialisation;
  }

  set specialisation(value: string) {
    this._specialisation = value;
  }

  get patients(): Array<Patient> {
    return this._patients;
  }

  set patients(value: Array<Patient>) {
    this._patients = value;
  }
}
