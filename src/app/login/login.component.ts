import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../login/shared/login.service';
import { Login } from './shared/login.model';
import {NgForm} from '@angular/forms';
import { MenuModel } from './shared/menu-model';
import{AppConfig} from '../app.config';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from 'selenium-webdriver/http';
import { Users } from '../users/shared/user.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]

 
})
export class LoginComponent implements OnInit {
  
  errormessage:String='';
  host:string;
   user:Login=new Login();
   
   static dynamicMenuList:MenuModel[]=[];
  constructor(private _router:Router,private loginservice:LoginService,private toster:ToastrService,private config:AppConfig)
   { }
   model={
     userid:'',
     password:''
   };
   logedUser={
     UserCode:'',
     Password:'',
     RoleID:'',
     RoleName:'',
     UserName:''

   }
  

   
  ngOnInit() {
    localStorage.setItem('url_host',this.config.getConfig('host'));
  // this.host=this.config.getEnv('host');
  // console.log(this.host);
  
  }
  logme (userName,password)
  {
    
    //this.errormessage='';
 //console.log(userName+" "+password);

//this.loginservice.getUserDetails(userName,password)[0].Passwrod;
   this.user=this.loginservice.getUserDetails(userName,password)
     if(this.user!=null) 
     {
    
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
    }
     onSubmit(form :NgForm)
     {
      this.loginservice.logIn(form.value).subscribe(
        res=>{
        //  console.log(res['token'])
this.loginservice.setToken(res['token']);

this.user.RoleID=this.loginservice.getUserPayload()['payload'][0]['RoleID'];
    localStorage.setItem('loggedUserRole', this.loginservice.getUserPayload()['payload'][0]['RoleID']);
    localStorage.setItem('loggedUserRoleName', this.loginservice.getUserPayload()['payload'][0]['RoleName']);
      localStorage.setItem('loggedUserName', this.loginservice.getUserPayload()['payload'][0]['UserName']);
      
     this.loginservice.getMenuDetails(this.user.RoleID);
//this.getMenu(this.user.RoleID)
    //this.user.UserCode=this.loginservice.getUserPayload()['payload'][0]['UserCode'];
    console.log(this.user.RoleID);
    this._router.navigate(['/layout/home']);
    this.toster.success('Welcome to Synchrony Dashboard Application','Dashboard Application');
    
        },
        err=>{
this.errormessage="User name or password is incorrect";

        }
      );
     }
    getMenu(roleId)
    {

      this.loginservice.getMenu(roleId).subscribe(
res=>{
  //console.log(JSON.stringify(res)+' someMenu')
 this.loginservice.menuList= JSON.stringify(res)  as any
 //console.log(this.loginservice.menuList+' someMenu')
},
err=>{

  this.errormessage="No Menu";
}
      );
    }
      
    
     
    
    
   
  
  
    
      
    
   // console.log( this.user.UserCode+" "+this.user.Password +" abc " + this.user.RoleID);
   
  
 
  
   
  }
 
   
  

