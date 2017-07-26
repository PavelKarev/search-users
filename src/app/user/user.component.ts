import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../shared/user.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private _userService: UserService, 
    private _route: ActivatedRoute
  ) { }
  user: any;
  login: string;
  name: string;
  email: string;
  avatar_url: string
  html_url: string

  ngOnInit() {
    this._userService.getDetailsByUserName(this._route.snapshot.params['username']).subscribe(
      userDetails => {
        this.login = userDetails.login;
        this.name = userDetails.name;
        this.email = userDetails.email;
        this.avatar_url = userDetails.avatar_url;
        this.html_url = userDetails.html_url;
      },
      error => {
        console.error(error);
      }
    )
  }
}
