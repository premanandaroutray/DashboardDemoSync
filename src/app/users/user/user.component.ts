import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private UserService:UserService,private toastrService:ToastrService) { }

    ngOnInit() {
    this.resetForm()
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();

    this.UserService.selectedUser= {
            ID :null,
	          UserCode:'', 
            UserName:'',
            Password:'',
	          RoleID :null
	    }
  }
  onSubmit(form:NgForm)
  {
    if(form.value.ID==null)
    {
      this.UserService.postUsers(form.value)
      .subscribe(data=>{
        this.resetForm(form);
        this.UserService.getUserList();
        this.toastrService.success('New record Added Sucessfully','User Register');
      })
    }
    else
    {
      this.UserService.putUsers(form.value.ID,form.value)
       .subscribe(data=>{
        this.resetForm(form);
        this.UserService.getUserList();
        this.toastrService.success('Record Updated Sucessfully','User Register');
          })
    }
  }

}


