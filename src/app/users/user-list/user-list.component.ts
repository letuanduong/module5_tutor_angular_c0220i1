import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'Angular OverView'
  users: IUser[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // this.userFilter = this.users;
    this.users = this.getUserList();
  }

  getUserList(): IUser[] {
    const users = [
      {
        id: 1,
        name: 'duc',
        email: 'duc@gmail.com'
      },
      {
        id: 2,
        name: 'vinh',
        email: 'vinh@gmail.com'
      },
      {
        id: 3,
        name: 'tuan',
        email: 'tuan@gmail.com'
      }
    ];
    return users;
  }

  search(event) {
    let keyword = event;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.getUserList();
  }

  filterByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    });
  }

  delete(id) {
    let userDeleted = [];
    this.users.map(user => {
      if (user.id != id) {
        userDeleted.push(user);
      }
    });
    this.users = userDeleted;
  }
}
