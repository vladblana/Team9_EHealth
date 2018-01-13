import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  private _loggedInUsername: string;

  constructor() {
  }


  get loggedInUsername(): string {
    return this._loggedInUsername;
  }

  set loggedInUsername(value: string) {
    this._loggedInUsername = value;
  }
}
