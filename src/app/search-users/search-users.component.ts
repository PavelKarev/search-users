import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../services/search-users/search-users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})

export class SearchUsersComponent implements OnInit {
  error_text: boolean;
  placeText: string;
  languageText: string;
  emptyText: string;
  results: any;
  total_count: string;

  // MdPaginator Inputs
  page: 1;
  per_page: 30;
  length: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions = [5, 10, 30, 100];

  // MdPaginator Output
  pageEvent: PageEvent;  

  constructor(
    private _searchService: SearchUsersService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.reset();
    this.search();
  }

  search() {
    this._route.queryParams.subscribe(params => {
    this.emptyText = "";

      if (params['place'] || params['language']) {
        this.placeText = params['place'];
        this.languageText = params['language'];
        this.page = params['page'];
        this.per_page = params['per_page'];
        this.pageIndex = this.page - 1;
        this.error_text = false;
        
        this._searchService.getUsers(this.placeText, this.languageText, this.page, this.per_page).subscribe(
          body => {
            this.results = body.items;
            this.total_count = body.total_count;
            this.length = this.results ? +this.total_count : 0;
            this.pageSize = this.results ? this.results.length : 0;
          },
          error => {
            this.emptyText = "Sorry! No Users found. Try again";
            this.reset();
            console.error(error);
            return true;
          }
        )
      } else {
        this.reset();
      }
    });
  }

  searchRoute(place: string, language: string, page: number, per_page: number){
    if (place || language) {
      this._router.navigate(['/search'], { queryParams: { place: place, language: language, page: page, per_page: per_page } });
    }
  }

  reset() {
    this.error_text = true;
    this.results = [];
    this.total_count = '';
    this.placeText = '';
    this.languageText = '';
  }

  pager(event) {
    this.pageEvent = event;
    this.searchRoute(this.placeText, this.languageText, event.pageIndex + 1, event.pageSize);
  }
}
