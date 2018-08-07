import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../login/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  
  errormessage:String;
  constructor(private _router:Router,private loginservice:LoginService) { }

  ngOnInit() {
  }
  ValidateUserLogIn(uid:string,pwd:string)
  {
   
   if(this.loginservice.getUserDetails(uid,pwd)!==null)
   {
    this._router.navigate(['/UserDetails']);
   }
   else
   {
    if(uid.length>0 && length>0)
    this.errormessage="Invalid Username/Password.";
    else
    this.errormessage="Enter valid Username/Password.";
   }
   
  }
}
