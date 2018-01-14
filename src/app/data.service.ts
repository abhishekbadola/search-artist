import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private searchData = new BehaviorSubject<any>([]);
  searchDataObservable = this.searchData.asObservable();

  private endpoint = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  private term = '';
  private limit = 0;

  getResults(term, limit): Observable<any[]> {
    const data = this.searchData.value;

    if (!data.length) {
      this.term = term;
      this.limit = limit;
      this.endpoint += ('?term=' + term + '&limit=' + limit);
      return this.http.get<any>(this.endpoint).map(
        res => {
          this.searchData.next(res.results);
          return res;
        }
      );
    } else {
      return this.searchDataObservable;
    }
  }

  getTerm() {
    return this.term;
  }

  clearResults() {
    this.searchData.next([]);
  }
}
