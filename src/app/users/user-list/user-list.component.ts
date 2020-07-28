import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] =  [
    {
      id: 1,
      name: 'tuan',
      email: 'tuan@gmail',
    },
    {
      id: 2,
      name: 'le',
      email: 'le@gmail',
    },
    {
      id: 3,
      name: 'manh',
      email: 'manh@gmail',
    }
  ];

  title_page = 'ANGULAR OVERVIEW';

  userFilter = [];

  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }

  search(event) {
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filterByKeyWord(keyword) : this.users;
  }

  filterByKeyWord(keyWord){
    return this.users.filter(user => {
      return user.name.indexOf(keyWord) != -1;
    })
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
