import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private getUserDetailsEndPoint = "https://api.github.com/users/";

  constructor(private http: Http) { }
   
  getDetailsByUserName(username: string) {
    if (username) {
      let url = `${this.getUserDetailsEndPoint}${username}`;
      return this.http.get(url)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }
  }
 
  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }  
}
