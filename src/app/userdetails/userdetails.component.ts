import { Component, OnInit } from '@angular/core';
import {UserdetailService} from './shared/userdetail.service'
 
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers:[UserdetailService]
})
export class UserdetailsComponent implements OnInit {

  constructor(private userDetailService:UserdetailService) { }

  ngOnInit() {
  }

}
