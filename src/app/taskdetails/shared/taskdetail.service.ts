import { Injectable } from '@angular/core';
import {Taskdetail,Projects,Roles} from './taskdetail-model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
@Injectable({
  providedIn: 'root'
})


export class TaskdetailService {
selectedTaskDetail:Taskdetail;
taskDetailList:Taskdetail[];
projectList:Projects[];
roleList:Roles[];

  constructor(private _http:Http) {
    
    
   }
 
   postTaskDetails(task:Taskdetail)
      {
        var body= JSON.stringify(task);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Post,   headers:headerOptions});
        return this._http.post('http://localhost:1233/api/taskdetails',body,requestOptions).map(x=>x.json());
      }
      putTaskDetails(id,task)
      {
        var body=JSON.stringify(task);
        var headerOptions=new Headers({'Content-Type':'application/json'});
        var requestOptions=new RequestOptions({method:RequestMethod.Put,   headers:headerOptions});
        return this._http.put('http://localhost:1233/api/taskdetails/'+id,body,requestOptions).map(res=>res.json());
      }
      getTaskDetailsList()
      {
        this._http.get('http://localhost:1233/api/taskdetails')
        .map((data:Response)=>{
          return data.json() as Taskdetail[];
        }).
        toPromise().then(x=>{
          this.taskDetailList=x;
        })
      }
      getProjectList()
      {
        
        this._http.get('http://localhost:1233/api/projects')
        .map((data:Response)=>{
          return data.json() as Projects[];
        }).
        toPromise().then(x=>{
        this.projectList=x;
        })

      }
      getRoletList()
      {
        this._http.get('http://localhost:1233/api/roles')
        .map((data:Response)=>{
          return data.json() as Roles[];
        }).
        toPromise().then(x=>{
          this.roleList=x;
        })

      }
      deleteTaskDetails(id:number)
      {
          return this._http.delete('http://localhost:1233/api/taskdetails/'+id).map(res=>res.json());
      }
}
