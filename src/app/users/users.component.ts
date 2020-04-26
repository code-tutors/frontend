import { Component, OnInit } from '@angular/core';
import {GetService} from '../get.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private getService : GetService) { }

  ngOnInit(): void {
  }

  getProfiles(){
    this.getService.onGetData();
  }
}
