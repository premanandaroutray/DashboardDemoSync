import { Component, OnInit } from '@angular/core';
import {TaskdetailService} from './shared/taskdetail.service'
 
@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css'],
  providers:[TaskdetailService]
})
export class TaskdetailsComponent implements OnInit {

  constructor(private taskDetailService:TaskdetailService) { }

  ngOnInit() {
  }

}
