import { Injectable } from '@angular/core';
import {Roles} from './role.model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
selectedRole:Roles;
roleList:Roles[];
constructor(private _http:Http) {
    
    
   }
 
      postRoles(role:Roles)
      {
        var body= JSON.stringify(role);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Post,   headers:headerOptions});
        return this._http.post('http://'+localStorage.getItem('url_host').toString()+'/api/roles',body,requestOptions).map(x=>x.json());
      }
      putRoles(id,role)
      {
        var body=JSON.stringify(role);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Put,   headers:headerOptions});
        return this._http.put('http://'+localStorage.getItem('url_host').toString()+'/api/roles/'+id,body,requestOptions).map(res=>res.json());
      }
      getRoleList()
      {
        this._http.get('http://'+localStorage.getItem('url_host').toString()+'/api/roles')
        .map((data:Response)=>{
          return data.json() as Roles[];
        }).
        toPromise().then(x=>{
          this.roleList=x;
        })
      }
      deleteRole(id:number)
      {
          return this._http.delete('http://'+localStorage.getItem('url_host').toString()+'/api/roles/'+id).map(res=>res.json());
      }
    }