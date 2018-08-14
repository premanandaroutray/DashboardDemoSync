import { Component, OnInit } from '@angular/core';
import {ProjectdetailService} from '../shared/projectdetail.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  constructor(private projectDetailService:ProjectdetailService, private toastrService:ToastrService) { } 

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();

    this.projectDetailService.selectedProjectDetail= {
      ProjectID :null,
	    ProjectName :'',
	    }
  }
  
  onSubmit(form:NgForm) {
    if(form.value.ProjectID == null)
    {
      this.projectDetailService.postProjectDetails(form.value)
      .subscribe(data=>{
        this.resetForm(form);
        this.projectDetailService.getProjectDetailsList();
        this.toastrService.success('New record Added Sucessfully','ProjectDetails');
      })
    }
    else
    {
      this.projectDetailService.putProjectDetails(form.value.ProjectID,form.value)
      .subscribe(data=>{
        this.resetForm(form);
        this.projectDetailService.getProjectDetailsList();
        this.toastrService.success('Record Updated Sucessfully','ProjectDetails');
      })
    }
  }
}
