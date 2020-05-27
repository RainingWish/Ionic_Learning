import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIsAuthenticated1 = true;
  private userId1 = 'user1';

  get userIsAuthenticated() {
    return this.userIsAuthenticated1;
  }

  get userId() {
    return this.userId1;
  }

  constructor() { }

  login() {
    this.userIsAuthenticated1 = true;
  }

  logout() {
    this.userIsAuthenticated1 = false;
  }
}
