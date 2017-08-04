import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 

@Injectable()
export class SearchUsersService {
 
  private searchUsersEndPoint = "https://api.github.com/search/users?q=";
  constructor(private http: Http) { }
 
  getUsers(place: string, language: string, page: number, per_page: number) {
    let url;

    if (place && !language) {
      url = `${this.searchUsersEndPoint}location:${place}&page=${page}&per_page=${per_page}`;
    } else if (!place && language) {
      url = `${this.searchUsersEndPoint}language:${language}&page=${page}&per_page=${per_page}`;
    } else {
      url = `${this.searchUsersEndPoint}location:${place}+language:${language}&page=${page}&per_page=${per_page}`;
    }
 
    return this.http.get(url).map(this.extractData).catch(this.handleError);
  }
 
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
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