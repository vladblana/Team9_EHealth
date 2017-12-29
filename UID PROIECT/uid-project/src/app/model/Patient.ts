import {Doctor} from './Doctor';

// A patient has a single doctor
export class Patient {
  private username: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;
  private doctor: Doctor;
}
