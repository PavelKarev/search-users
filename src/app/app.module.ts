import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UserComponent } from './user/user.component';

import { SearchUsersService } from './services/search-users/search-users.service';
import { UserService } from './services/user/user.service';

import { appRoutes } from '../routes';

import { MdCardModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ SearchUsersService, UserService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
