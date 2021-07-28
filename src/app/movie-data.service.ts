import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  public page = 1;
  getData(): Observable<any> {
    return this.http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=' + this.page);
  }
  constructor(private http: HttpClient) { }
}
