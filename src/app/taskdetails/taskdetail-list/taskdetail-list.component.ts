import { Component, OnInit } from '@angular/core';
import {TaskdetailService} from '../shared/taskdetail.service'
import {Taskdetail,Projects,Roles} from '../shared/taskdetail-model'
import {ToastrService} from 'ngx-toastr'
import { projectionDef } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-taskdetail-list',
  templateUrl: './taskdetail-list.component.html',
  styleUrls: ['./taskdetail-list.component.css']
})
export class TaskdetailListComponent implements OnInit {

  constructor(private taskDetailService:TaskdetailService,private toster:ToastrService) { }

  ngOnInit() {
    this.taskDetailService.getTaskDetailsList();
    this.taskDetailService.getProjectList();
    this.taskDetailService.getRoletList();
  }
  showForEdit(taskDetails:Taskdetail)
  {
 
    
    this.taskDetailService.selectedTaskDetail=Object.assign({},taskDetails);
  
  }
  onDelete(id:number)
  {
    if(confirm('Are you sure to delete the record')==true)
    this.taskDetailService.deleteTaskDetails(id)
    .subscribe(x=>{
      this.taskDetailService.getTaskDetailsList();
      this.toster.warning('Record Deleted Sucessully','Task Details Register')
    })
  }

}
