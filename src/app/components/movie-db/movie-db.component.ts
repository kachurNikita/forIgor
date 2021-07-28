import { Component, OnInit } from '@angular/core';
import {MovieDataService} from "../../movie-data.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-movie-db',
  templateUrl: './movie-db.component.html',
  styleUrls: ['./movie-db.component.css']
})
export class MovieDBComponent implements OnInit {
  pageSize: number = 5;
  fiveMovies: any;
  tenMovies: any;
  fifteenMovies: any;
  totalPages:any;
  dot :any = '...'
  public page: any;
  data: any;
  dataMovies: any =  [];
  public displayedColumns: string[] = ['title', 'release_date', 'vote_average', 'overview']
  constructor(private service: MovieDataService) { }

  ngOnInit(): void {
    this.getFullData(this.service.page)
}

getFullData(page: any, size?: number): void {
    this.service.getData().subscribe(data => {
    this.data = data;
    this.dataMovies = data.results;
    if (this.pageSize === 5) {
      this.dataMovies.splice(this.pageSize)
    }
     else if (this.pageSize === 10) {
      this.dataMovies.splice(this.pageSize)
    } else  {
      this.dataMovies.splice(this.pageSize)
    }
     this.dataMovies.splice(this.pageSize);

    this.totalPages = data.total_pages;
  })
}
  getEvent(event: any) {
    const {pageSize} = event;
    this.pageSize = pageSize;
    this.service.page = ++event.pageIndex;
    this.getFullData(this.service.page, pageSize);
  }




}
