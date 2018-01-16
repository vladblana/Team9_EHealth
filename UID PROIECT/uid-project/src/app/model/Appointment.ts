
export class Appointment {

  private _date: string;
  private _hours: string;
  private _minutes: string;
  private _doctor: string;
  private _urgency: string;
  private _symptoms: string;


  constructor(date: string, hours: string, minutes: string, doctor: string, urgency: string, symptoms: string) {
    this._date = date;
    this._hours = hours;
    this._minutes = minutes;
    this._doctor = doctor;
    this._urgency = urgency;
    this._symptoms = symptoms;
  }


  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get hours(): string {
    return this._hours;
  }

  set hours(value: string) {
    this._hours = value;
  }

  get minutes(): string {
    return this._minutes;
  }

  set minutes(value: string) {
    this._minutes = value;
  }

  get doctor(): string {
    return this._doctor;
  }

  set doctor(value: string) {
    this._doctor = value;
  }

  get urgency(): string {
    return this._urgency;
  }

  set urgency(value: string) {
    this._urgency = value;
  }

  get symptoms(): string {
    return this._symptoms;
  }

  set symptoms(value: string) {
    this._symptoms = value;
  }
}
