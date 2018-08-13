import { Component, OnInit } from '@angular/core';
import {RoleService} from '../shared/role.service'
import {Roles} from '../shared/role.model'
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  constructor(private RoleService:RoleService,private toster:ToastrService) { }

   ngOnInit() {
    this.RoleService.getRoleList();
    //this.UserService.getManagersList();
    //this.UserService.getRoletList();
  }
  showForEdit(Roles:Roles)
  {
    this.RoleService.selectedRole=Object.assign({},Roles);
  }
  onDelete(id:number)
  {
    
    if(confirm('Are you sure to delete the record')==true)
    this.RoleService.deleteRole(id)
    .subscribe(x=>{
      this.RoleService.getRoleList();
      this.toster.warning('Record Deleted Sucessully','Role Register')
    })
  }


}
