import { Component, OnInit } from '@angular/core';
import { ProjectdetailService } from '../shared/projectdetail.service'
import { Projectdetail} from '../shared/projectdetail.model'
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-projectdetail-list',
  templateUrl: './projectdetail-list.component.html',
  styleUrls: ['./projectdetail-list.component.css']
})
export class ProjectdetailListComponent implements OnInit {

  constructor(private projectDetailService:ProjectdetailService, private toastr:ToastrService) { }

  ngOnInit() {
    this.projectDetailService.getProjectDetailsList();
  }

  showForEdit(projectDetails:Projectdetail)
  {
    this.projectDetailService.selectedProjectDetail=Object.assign({},projectDetails);
  }

  onDelete(id:number)
  {
    if(confirm('Are you sure to delete the record')==true)
    this.projectDetailService.deleteProjectDetails(id)
    .subscribe(x=>{
      this.projectDetailService.getProjectDetailsList();
      this.toastr.warning('Record Deleted Sucessfully','Project Details')
    })
  }
}
