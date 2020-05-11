import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIsAuthenticated1 = false;

  get userIsAuthenticated() {
    return this.userIsAuthenticated1;
  }

  constructor() { }

  login() {
    this.userIsAuthenticated1 = true;
  }

  logout(){
    this.userIsAuthenticated1 = false;
  }
}
