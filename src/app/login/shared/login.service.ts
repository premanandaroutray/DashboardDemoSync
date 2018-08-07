import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Login} from './login.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
loggedOnUser:Login;
  constructor(private _http:Http) { }
  getUserDetails(uid:string,pwd:string):Login
      {
        this._http.get('http://10.200.44.21:1233/api/login/'+uid+'/'+pwd)
        .map((data:Response)=>{
          return data.json() as Login;
        }).
        toPromise().then(x=>{
          this.loggedOnUser=x;
        })
        return this.loggedOnUser;
      }
}
