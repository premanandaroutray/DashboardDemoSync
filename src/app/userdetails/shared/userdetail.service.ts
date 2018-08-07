import { Injectable } from '@angular/core';
import {Userdetail} from './userdetail.model';
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
  constructor(private _http:Http) {
    
    
   }
 
   postUserDetails(user:Userdetail)
      {
        var body= JSON.stringify(user);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Post,   headers:headerOptions});
        return this._http.post('http://10.200.44.21:1233/api/userdetails',body,requestOptions).map(x=>x.json());
      }
      putUserDetails(id,user)
      {
        var body=JSON.stringify(user);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Put,   headers:headerOptions});
        return this._http.put('http://10.200.44.21:1233/api/userdetails/'+id,body,requestOptions).map(res=>res.json());
      }
      getUserDetailsList()
      {
        this._http.get('http://10.200.44.21:1233/api/userdetails')
        .map((data:Response)=>{
          return data.json() as Userdetail[];
        }).
        toPromise().then(x=>{
          this.userDetailList=x;
        })
      }
      deleteUserDetails(id:number)
      {
return this._http.delete('http://10.200.44.21:1233/api/userdetails/'+id).map(res=>res.json());
      }
}
