import { Injectable } from '@angular/core';
import {Userdetail,Roles,ReportingManagers} from './userdetail.model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
@Injectable({
  providedIn: 'root'
})
export class UserdetailService {
selectedUserDetail:Userdetail;
userDetailList:Userdetail[];
<<<<<<< HEAD
constructor(private _http:Http) {
=======
roleList:Roles[];
reportingManagersList:ReportingManagers[];
  constructor(private _http:Http) {
>>>>>>> b016aeea29a81c346fa055f056e0decf2ffd07a1
    
    
   }
 
   postUserDetails(user:Userdetail)
      {
        var body= JSON.stringify(user);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Post,   headers:headerOptions});
        return this._http.post('http://10.200.44.42:1337/api/userdetails',body,requestOptions).map(x=>x.json());
      }
      putUserDetails(id,user)
      {
        var body=JSON.stringify(user);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Put,   headers:headerOptions});
        return this._http.put('http://10.200.44.42:1337/api/userdetails/'+id,body,requestOptions).map(res=>res.json());
      }
      getUserDetailsList()
      {
        this._http.get('http://10.200.44.42:1337/api/userdetails')
        .map((data:Response)=>{
          return data.json() as Userdetail[];
        }).
        toPromise().then(x=>{
          this.userDetailList=x;
        })
      }
      getRoletList()
      {
        this._http.get('http://10.200.44.42:1337/api/roles')
        .map((data:Response)=>{
          return data.json() as Roles[];
        }).
        toPromise().then(x=>{
          this.roleList=x;
        })

      }
      getManagersList()
      {
        
        this._http.get('http://10.200.44.42:1337/api/reportmanagers')
        .map((data:Response)=>{
          return data.json() as ReportingManagers[];
        }).
        toPromise().then(x=>{
        this.reportingManagersList=x;
        })

      }
      deleteUserDetails(id:number)
      {
<<<<<<< HEAD
        return this._http.delete('http://10.200.44.21:1233/api/userdetails/'+id).map(res=>res.json());
=======
          return this._http.delete('http://10.200.44.42:1337/api/userdetails/'+id).map(res=>res.json());
>>>>>>> b016aeea29a81c346fa055f056e0decf2ffd07a1
      }
}
