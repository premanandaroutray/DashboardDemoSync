import { Injectable } from '@angular/core';
import {Users,Roles} from './user.model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedUser:Users;
userList:Users[];
roleList:Roles[];
constructor(private _http:Http) {
    
    
   }
 
   postUsers(user:Users)
      {
        var body= JSON.stringify(user);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Post,   headers:headerOptions});
        return this._http.post('http://'+localStorage.getItem('url_host').toString()+'/api/users',body,requestOptions).map(x=>x.json());
      }
      putUsers(id,user)
      {
        var body=JSON.stringify(user);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Put,   headers:headerOptions});
        return this._http.put('http://'+localStorage.getItem('url_host').toString()+'/api/users/'+id,body,requestOptions).map(res=>res.json());
      }
      getUserList()
      {
        this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/users')
        .map((data:Response)=>{
          return data.json() as Users[];
        }).
        toPromise().then(x=>{
          this.userList=x;
        })
      }
      getRoletList()
      {
        this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/roles')
        .map((data:Response)=>{
          return data.json() as Roles[];
        }).
        toPromise().then(x=>{
          this.roleList=x;
        })

      }
      deleteUser(id:number)
      {
          return this._http.delete('http://'+localStorage.getItem('url_host').toString()+'/api/users/'+id).map(res=>res.json());
      }
}
