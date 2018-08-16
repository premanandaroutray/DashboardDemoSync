import { Component, OnInit } from '@angular/core';
import { ProjectdetailService } from '../shared/projectdetail.service'
import { Projectdetail} from '../shared/projectdetail.model'
import {ToastrService} from 'ngx-toastr';
import {PaginatePipe} from 'ngx-pagination';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { Ng2OrderPipe } from 'ng2-order-pipe';

@Component({
  selector: 'app-projectdetail-list',
  templateUrl: './projectdetail-list.component.html',
  styleUrls: ['./projectdetail-list.component.css']
})
export class ProjectdetailListComponent implements OnInit {

    //initializing (p)page to one as default page setting
    p: number = 1;

    //sorting
    key: string = 'ProjectName';
    reverse: boolean = false;
    sort(key){
      this.key = key;
      this.reverse = !this.reverse;
    }
  

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
