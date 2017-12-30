import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Also AuthenticationService to be injected....
  // private authService

  myRandomString = 'E-Health';
  username: String;
  password: String;


  constructor(private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit() {
  }

  onDoing(){
    console.log(this.username);
    console.log(this.password);
  }

  onLogin() {
   // this.router.navigate(['/register'], {relativeTo: this.route});
   // this.onDoing();
    this.username = 'Damsa';
  }

  onRegister() {
    this.router.navigate(['/register/'], {relativeTo: this.route});
  }

}
