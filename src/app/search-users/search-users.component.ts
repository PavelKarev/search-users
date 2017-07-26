import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../services/search-users/search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})

export class SearchUsersComponent implements OnInit {
  place: string;
  language: string;
 
  results: any[] = [];
  selected: boolean = false;
  selectedUser: any;
  error_text: string = "";
 
  constructor(private _searchService: SearchUsersService) {}
  ngOnInit() {
    // this.activities = this._activityService.getActivities();
    // this.totalActivities = this._activityService.getTotalActivities(this.activities);
    // this.totalDistance = this._activityService.getTotalDistance(this.activities);
    // this.firstDate = this._activityService.getFirstDate(this.activities);    
  }
 
  search(place: string, language: string) {
    this.selected = false;
    this.error_text = "";
    if (place || language) {
      this.place = place;
      this.language = language;
      this._searchService.getUsersByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = "Sorry! No Users found. Try again";
          console.error(error);
        }
      )
    }
  }
}
