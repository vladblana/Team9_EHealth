import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Also AuthenticationService to be injected....
  // private authService
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['/register'], {relativeTo: this.route});
  }

  onRegister() {
    this.router.navigate(['/register'], {relativeTo: this.route});
  }

}
