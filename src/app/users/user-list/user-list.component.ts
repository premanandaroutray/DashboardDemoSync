import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {Users} from '../shared/user.model'
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private UserService:UserService,private toster:ToastrService) { }

   ngOnInit() {
    this.UserService.getUserList();
    //this.UserService.getManagersList();
    this.UserService.getRoletList();
  }
  showForEdit(Users:Users)
  {
    this.UserService.selectedUser=Object.assign({},Users);
  }
  onDelete(id:number)
  {

    if(confirm('Are you sure to delete the record')==true)
    this.UserService.deleteUser(id)
    .subscribe(x=>{
      this.UserService.getUserList();
      this.toster.warning('Record Deleted Sucessully','User Register')
    })
  }

}
