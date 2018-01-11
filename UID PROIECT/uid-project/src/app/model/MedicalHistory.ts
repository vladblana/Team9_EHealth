export class MedicalHistory {

  private _medications: Array<string>;
  private _labResults: Map<string, string>;


  constructor(medications: Array<string>, labResults: Map<string, string>) {
    this._medications = medications;
    this._labResults = labResults;
  }


  get medications(): Array<string> {
    return this._medications;
  }

  set medications(value: Array<string>) {
    this._medications = value;
  }

  get labResults(): Map<string, string> {
    return this._labResults;
  }

  set labResults(value: Map<string, string>) {
    this._labResults = value;
  }
}
