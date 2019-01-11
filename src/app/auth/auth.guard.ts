import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import{Router}from '@angular/router'
import {LoginService} from '../login/shared/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(!this.loginService.isLoggeIn())
      {
        console.log('dsfsdf');
        this.router.navigate(['/login']);
        this.loginService.deleteToken();
        return false;
      }
      else{        console.log('logged in');
        return true;}
    
  }
}
