import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // Also AuthenticationService to be injected....
  // private authService

  myRandomString = 'E-Health';
  username: string;
  password: string;


  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {

  }


  ngOnInit() {
  }

  onLogin() {
    this.authService.loggedInUsername = this.username;
    this.router.navigate(['/patient-mainpage/'], {relativeTo: this.route});
  }

  onRegister() {
    this.router.navigate(['/register/'], {relativeTo: this.route});
  }

}
