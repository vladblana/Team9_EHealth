import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  firstName = '';
  lastName = '';
  userTypes = ['Doctor', 'Patient'];
  doctorSp = ['Nephrology', 'Cardiology', 'Ophthalmology', 'Pedriatics', 'Dermatology','Orthopedy','Gynecology','Pneumology'];
  hidepass1 = true;
  hidepass2 = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  nb = new FormControl('', [Validators.required, Validators.minLength(10), Validators.min(10), Validators.pattern(/^\d+$/)]);

  p_username = '';
  p_firstName = '';
  p_lastName = '';
  p_hidepass1 = true;
  p_hidepass2 = true;
  p_email = new FormControl('', [Validators.required, Validators.email]);
  p_nb = new FormControl('', [Validators.required, Validators.minLength(10), Validators.min(10), Validators.pattern(/^\d+$/)]);
  patient_hidepass1 = '';
  patient_hidepass2 = '';
  doctor_hidepass1 = '';
  doctor_hidepass2 = '';


  getErrorMessageForEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageForNumber() {
    console.log(this.patient_hidepass1);
    console.log(this.patient_hidepass2);
    return this.nb.hasError('required') ? 'You must enter a number' :
      this.nb.hasError('pattern') ? 'Not a valid number' :
        this.nb.hasError('minLength') ? 'Not enough digits' :
          this.nb.hasError('min') ? 'Not enough digits' :
            '';

  }

  patientGetErrorMessageForEmail() {
    return this.p_email.hasError('required') ? 'You must enter a value' :
      this.p_email.hasError('email') ? 'Not a valid email' :
        '';
  }

  patientGetErrorMessageForNumber() {
    return this.p_nb.hasError('required') ? 'You must enter a number' :
      this.p_nb.hasError('pattern') ? 'Not a valid number' :
        this.p_nb.hasError('minLength') ? 'Not enough digits' :
          this.p_nb.hasError('min') ? 'Not enough digits' :
            '';
  }


  constructor() {
  }

  ngOnInit() {
  }

  //To be implemented =>>>
  onRegisterSubmit() {

  }
}
