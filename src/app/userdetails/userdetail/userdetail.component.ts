import { Component, OnInit } from '@angular/core';
import {UserdetailService} from '../shared/userdetail.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private userDetailService:UserdetailService,private toastrService:ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();

    this.userDetailService.selectedUserDetail= {
      ID :null,
	    SSOID :'',
	    FirstName:'', 
	    LastName :'',
	    Gender :'',
	    Phone :'',
	    ProfEmailID :'',
	    PersonalEmailID:'', 
	    ReportingManagerID:null, 
	    RoleID :null
	    }
  }
  onSubmit(form:NgForm)
  {
    if(form.value.ID==null)
    {
this.userDetailService.postUserDetails(form.value)
.subscribe(data=>{
  this.resetForm(form);
  this.userDetailService.getUserDetailsList();
  this.toastrService.success('New record Added Sucessfully','UserDetail Register');
})
    }
    else
    {
      this.userDetailService.putUserDetails(form.value.ID,form.value)
.subscribe(data=>{
  this.resetForm(form);
  this.userDetailService.getUserDetailsList();
  this.toastrService.success('Record Updated Sucessfully','UserDetail Register');
    })
  }
  }

}
