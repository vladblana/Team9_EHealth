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
  doctorSp = ['Nephrology', 'Cardiology', 'Ophthalmology', 'Pedriatics', 'Dermatology'];
  hidepass1 = true;
  hidepass2 = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  nb = new FormControl('', [Validators.required, Validators.minLength(10), Validators.min(10), Validators.pattern(/^\d+$/)]);


  getErrorMessageForEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageForNumber() {
    return this.nb.hasError('required') ? 'You must enter a number' :
      this.nb.hasError('pattern') ? 'Not a valid number' :
        this.nb.hasError('minLength') ? 'Not enough digits' :
          this.nb.hasError('min') ? 'Not enough digits' :
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
