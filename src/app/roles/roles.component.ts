import { Component, OnInit } from '@angular/core';
import {RoleService} from './shared/role.service'
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers:[RoleService]
})
export class RolesComponent implements OnInit {

  constructor(private RoleService:RoleService) { }

  ngOnInit() {
  }

}
