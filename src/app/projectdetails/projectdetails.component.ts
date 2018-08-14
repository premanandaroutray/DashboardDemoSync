import { Component, OnInit } from '@angular/core';

import {ProjectdetailService} from './shared/projectdetail.service'

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
  providers: [ProjectdetailService]
})
export class ProjectdetailsComponent implements OnInit {

  constructor(private projectDetailService:ProjectdetailService) { }

  ngOnInit() {
  }

}
