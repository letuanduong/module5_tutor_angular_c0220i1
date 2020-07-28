import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { InputSearchComponent } from './input-search/input-search.component';
import {GroupListComponent} from './groups/group-list/group-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    GroupListComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
