import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { AdminHelperService } from './admin-helper.service';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    //return this.loggedIn.asObservable();
    const loggedOnUser = this.adminHelper.getData('loggedOnUser');
    //console.log('loggedOnUser: ', loggedOnUser);
    if (loggedOnUser == null)
      return false;
    else 
      return true;

  }

  constructor(
    private router: Router,
    private adminHelper: AdminHelperService
  ) {}

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}