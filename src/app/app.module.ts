import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';

import { SearchUsersService } from './services/search-users/search-users.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SearchUsersService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
