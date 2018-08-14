import { Injectable } from '@angular/core';
import {Projectdetail} from './projectdetail.model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

@Injectable({
  providedIn: 'root'
})

export class ProjectdetailService {
//region
selectedProjectDetail:Projectdetail;
projectDetailList:Projectdetail[];
//end region

  constructor(private _http:Http) { }
 
      postProjectDetails(proj:Projectdetail)
      {
        var body= JSON.stringify(proj);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Post,   headers:headerOptions});
        return this._http.post('http://localhost:1233/api/projects',body,requestOptions).map(x=>x.json());
      }
      putProjectDetails(id,proj)
      {
        var body=JSON.stringify(proj);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Put,   headers:headerOptions});
        return this._http.put('http://localhost:1233/api/projects'+id,body,requestOptions).map(res=>res.json());
      }
      getProjectDetailsList()
      {
        this._http.get('http://localhost:1233/api/projects')
        .map((data:Response)=>{
          return data.json() as Projectdetail[];
        }). 
        toPromise().then(x=>{
          this.projectDetailList=x;
        })
      }
      deleteProjectDetails(id)
      {
        return this._http.delete('http://localhost:1233/api/projects'+id).map(res=>res.json());
      }
}
