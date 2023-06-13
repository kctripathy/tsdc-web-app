
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminHelperService } from './admin-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   
  constructor(private adminHelper: AdminHelperService) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const loggedOnUser = this.adminHelper.getData('loggedOnUser');
    console.log('loggedOnUser: ', loggedOnUser);
    if (loggedOnUser == null)
      return false;
    else 
      return true;
  }
  
}
