import {Patient} from './Patient';

// A doctor has multiple patients
export class Doctor {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  specialisation: string;
  patients: Array<Patient>;
}
