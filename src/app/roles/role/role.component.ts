import { Component, OnInit } from '@angular/core';
import {RoleService} from '../shared/role.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

 constructor(private RoleService:RoleService,private toastrService:ToastrService) { }

    ngOnInit() {
    this.resetForm()
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();

    this.RoleService.selectedRole= {
            ID :null,
	    RoleName:'', 
            
	    }
  }
  onSubmit(form:NgForm)
  {
    if(form.value.ID==null)
    {
      this.RoleService.postRoles(form.value)
      .subscribe(data=>{
        this.resetForm(form);
        this.RoleService.getRoleList();
        this.toastrService.success('New record Added Sucessfully','Role Register');
      })
    }
    else
    {
       this.RoleService.putRoles(form.value.ID,form.value)
       .subscribe(data=>{
        this.resetForm(form);
        this.RoleService.getRoleList();
        this.toastrService.success('Record Updated Sucessfully','Role Register');
          })
    }
  }

}
