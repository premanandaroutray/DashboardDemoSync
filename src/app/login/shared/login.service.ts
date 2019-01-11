import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Login} from './login.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MenuModel } from './menu-model';
import { Dashboard } from './dashboard.model';
import { Dashboardtask } from './dashboardtask.model';
import{AppConfig} from '../../app.config';
import { JsonPipe } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 loggedOnUser:Login=new Login();
 dasboardUserList:Dashboard[];
 dashboardTaskList:Dashboardtask[];
 menuList:MenuModel[];
username:string;
rolename:string;
host:string;
noAuthHeader={headers : new HttpHeaders({'Content-Type':'application/json','Authorization':'False'})}; 
 
  constructor(private _http:HttpClient,private config:AppConfig) { }
  logIn(authCredentials){
    
return this._http.post('http://'+localStorage.getItem('url_host').toString()+'/api/login/jwt',authCredentials,this.noAuthHeader); //,this.noAuthHeader
  }

  setToken(token:string)
  {
localStorage.setItem('token',token);
  }
  deleteToken()
    {
localStorage.removeItem('token');
    }
  
getUserPayload()
  {
   var token= localStorage.getItem('token');
   if(token){
     var userPayLoad=atob(token.split('.')[1]);
     return JSON.parse(userPayLoad);
     
   }
   else
   {
     return null;
   }
  }
  isLoggeIn()
  {
    var userpayload=this.getUserPayload();
    if(userpayload)
    {
      return userpayload.exp > Date.now()/1000;
    }
    else
    return false;
  }

  getToken()
  {
    return localStorage.getItem('token');
  }
  getUserDetails(uid:string,pwd:string)
      {
        //this.host=localStorage.getItem('url_host').toString();
        this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/login/'+uid+'/'+pwd)
        .map((data:Response)=>{
          return data as any;    
         
        })
       
       . toPromise().then(x=>{
         // this.loggedOnUser.ID=x[0].ID,
         this.loggedOnUser.UserCode=x[0].UserCode,
         this.loggedOnUser.Password=x[0].Password,
         this.loggedOnUser.RoleID=x[0].RoleID,
         this.loggedOnUser.RoleName=x[0].RoleName,
         this.loggedOnUser.UserName=x[0].UserName
         
        console.log(this.loggedOnUser.UserCode+"foo");
        //return this.loggedOnUser;
        })
        .catch(this.handleError)
        
       
        return this.loggedOnUser;
      }

      getMenuDetails(roleID)
      {
        this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/menus/'+roleID)
        .map((data:Response)=>{
          return data as any;    
         
        })
       . toPromise().then(x=>{
         // this.loggedOnUser.ID=x[0].ID,
         this.menuList=x
       
         
        //console.log(this.loggedOnUser.UserCode+"foo");
        //return this.loggedOnUser;
        })
        .catch(this.handleError)
        
       
      }
getMenu(roleID)
{

  return this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/menus/'+roleID);
}
    
    getUserDetail(userName,roleName)
    {
         this.username=userName;
         this.rolename=roleName
    }

    getProjectAndUserDetailsForDashboard(roleID)
    {
      this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/dashboard/'+roleID)
        .map((data:Response)=>{
          return data as any;    
         
        })
       . toPromise().then(x=>{
         // this.loggedOnUser.ID=x[0].ID,
         this.dasboardUserList=x
       
        })
        .catch(this.handleError)
    }

    getDashboardTaskByRole(roleID)
    {
      this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/dashboardtask/'+roleID)
        .map((data:Response)=>{
          return data as any;    
       
        })
       . toPromise().then(x=>{
         // this.loggedOnUser.ID=x[0].ID,
         this.dashboardTaskList=x
       console.log(this.dashboardTaskList);
        })
        .catch(this.handleError)
    }
  
    handleError(error:Response)
    {
        console.error(error);
        return Observable.throw(error);

    }

}
