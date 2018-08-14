import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../login/shared/login.service';
import { Login } from './shared/login.model';
import {NgForm} from '@angular/forms';
import { MenuModel } from './shared/menu-model';
import{AppConfig} from '../app.config';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService,]

 
})
export class LoginComponent implements OnInit {
  
  errormessage:String='';
  host:string;
   user:Login=new Login();
   static dynamicMenuList:MenuModel[]=[];
  constructor(private _router:Router,private loginservice:LoginService,private toster:ToastrService,private config:AppConfig)
   { }

  ngOnInit() {
  this.host=this.config.getEnv('host');
  console.log(this.host);
  }
  logme (userName,password)
  {
    //this.errormessage='';
 //console.log(userName+" "+password);

//this.loginservice.getUserDetails(userName,password)[0].Passwrod;
   
     if(this.loginservice.getUserDetails(userName,password)!=null) 
     {
     this.user=this.loginservice.getUserDetails(userName,password) as Login
     if(userName==this.user.UserCode && password==this.user.Password)
      {
    localStorage.setItem('loggedUserRole', this.user.RoleID.toString());
      localStorage.setItem('loggedUserRoleName', this.user.RoleName);
      localStorage.setItem('loggedUserName', this.user.UserName);
     this.loginservice.getMenuDetails(this.user.RoleID)
    this._router.navigate(['/layout/home']);
    this.toster.success('Welcome to Synchrony Dashboard Application','Dashboard Application')
    }
    
    else
    { 
      
     this.errormessage="User name or password is incorrect";
    
    }
     }
    
      
    
     
    
    
   
  
  
    
      
    
   // console.log( this.user.UserCode+" "+this.user.Password +" abc " + this.user.RoleID);
   
  
 
  
   
  }
 
   
  
}
