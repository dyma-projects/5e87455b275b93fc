import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(
    private userServiceService: UserServiceService
  ) { }

  ngOnInit() {
    this.users = this.userServiceService.users.value;
  }

}
