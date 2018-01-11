export class MedicalRecord {

  private _surgicalHistory: Array<string>;
  private _medicalAllergies: Array<string>;
  private _familyHistory: Map<string, string>;
  private _habits: Array<string>;


  constructor(surgicalHistory: Array<string>, medicalAllergies: Array<string>, familyHistory: Map<string, string>, habits: Array<string>) {
    this._surgicalHistory = surgicalHistory;
    this._medicalAllergies = medicalAllergies;
    this._familyHistory = familyHistory;
    this._habits = habits;
  }


  get surgicalHistory(): Array<string> {
    return this._surgicalHistory;
  }

  set surgicalHistory(value: Array<string>) {
    this._surgicalHistory = value;
  }

  get medicalAllergies(): Array<string> {
    return this._medicalAllergies;
  }

  set medicalAllergies(value: Array<string>) {
    this._medicalAllergies = value;
  }

  get familyHistory(): Map<string, string> {
    return this._familyHistory;
  }

  set familyHistory(value: Map<string, string>) {
    this._familyHistory = value;
  }

  get habits(): Array<string> {
    return this._habits;
  }

  set habits(value: Array<string>) {
    this._habits = value;
  }
}
