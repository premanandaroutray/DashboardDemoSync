import { Component, OnInit } from '@angular/core';
import {TaskdetailService} from '../shared/taskdetail.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  constructor(private taskDetailService:TaskdetailService,private toastrService:ToastrService) { }

  ngOnInit() {
    this.resetForm()
    
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();

     this.taskDetailService.selectedTaskDetail= {
      TaskID :null,
	    TaskName:'', 
      ProjectID :null,
      ProjectName:'',
	    HoursSpend :null,
      RoleID :null,
      RoleName:'',
      }
      
  }
  onChangeRole(event: any)
  {
     //alert(event.target.value)

  }
  onSubmit(form:NgForm)
  {
  
  
    if(form.value.TaskID==null)
    {
        this.taskDetailService.postTaskDetails(form.value)
        .subscribe(data=>{
        this.resetForm(form);
        this.taskDetailService.getTaskDetailsList();
       // this.taskDetailService.getProjectList();
        //this.taskDetailService.getRoletList();
        this.toastrService.success('New record Added Sucessfully','TaskDetail Register');
    })
    }
    else
    {
        this.taskDetailService.putTaskDetails(form.value.TaskID,form.value)
        .subscribe(data=>{
        this.resetForm(form);
        this.taskDetailService.getTaskDetailsList();
        //this.taskDetailService.getProjectList();
       // this.taskDetailService.getRoletList();
        this.toastrService.success('Record Updated Sucessfully','TaskDetail Register');
    })
  }
  }

}
