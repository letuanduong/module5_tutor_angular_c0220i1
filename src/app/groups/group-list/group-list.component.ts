import { Component, OnInit } from '@angular/core';
import {IGroup} from '../igroup';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  
  groups: IGroup[] = [];

   group_list: IGroup[] = [
    {
      id: 1,
      name: 'c0220i1',
      description: 'java fullTime'
    },

    {
      id: 1,
      name: 'c1219i1',
      description: 'java fullTime'
    },

    {
      id: 1,
      name: 'c0320h1',
      description: 'java fullTime'
    },

  ]
  constructor() { }

  ngOnInit(): void {
     this.groups = this.group_list;
  }

  search(event) {
    let keyword = event;
    this.groups = (keyword) ? this.filterByKeyword(keyword) : this.group_list
  }

  filterByKeyword(keyword) {
    return this.groups.filter(user => {
      return user.name.indexOf(keyword) != -1;
    });
  }



}
