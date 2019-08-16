import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // this is an easy place to observe the state of a user. Just subscribe to it.
  // Ideally this won't be a string. Instead it should be a blob of user data to assess across the application
  public user: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  fakeUserNames: string[] = ['Alex', 'Hobart', 'Jean', 'Bob', 'Drew', 'Adelaide']
  constructor() { }

  login() {
    this.user.next('Bob');
  }

  logout() {
    this.user.next(null);
  }

  private getCurrentUser(): string {
    // Query an API to find the current user
    return this.user.getValue()
  }
}
