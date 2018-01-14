import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private term = '';
  private results = [];

  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() { // On coming to Details route fetch the stored data from service
    this._data.searchDataObservable.subscribe(res => {
      this.results = res;
    });
    this.term = this._data.getTerm();
  }

  clear() { // Clear results and navigate back to Home page
    this._data.clearResults();
    this.router.navigate(['']);
  }
}
