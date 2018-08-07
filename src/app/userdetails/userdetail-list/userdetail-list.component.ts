import { Component, OnInit } from '@angular/core';
import {UserdetailService} from '../shared/userdetail.service'
import {Userdetail} from '../shared/userdetail.model'
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-userdetail-list',
  templateUrl: './userdetail-list.component.html',
  styleUrls: ['./userdetail-list.component.css']
})
export class UserdetailListComponent implements OnInit {

  constructor(private userDetailService:UserdetailService,private toster:ToastrService) { }

  ngOnInit() {
    this.userDetailService.getUserDetailsList();
  }
  showForEdit(userDetails:Userdetail)
  {
    this.userDetailService.selectedUserDetail=Object.assign({},userDetails);
  }
  onDelete(id:number)
  {
    if(confirm('Are you sure to delete the record')==true)
    this.userDetailService.deleteUserDetails(id)
    .subscribe(x=>{
      this.userDetailService.getUserDetailsList();
      this.toster.warning('Record Deleted Sucessully','User Details Register')
    })
  }

}
