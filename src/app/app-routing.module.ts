import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {GroupListComponent} from './groups/group-list/group-list.component';
import {MenuComponent} from './core/menu/menu.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'groups', component: GroupListComponent},
  {path: 'home', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
