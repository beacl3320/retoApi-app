/* import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheMoviesServicesService } from 'src/app/services/the-movies-services.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>
  id: string;

  constructor(private route:ActivatedRoute, private theMoviesServicesService: TheMoviesServicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movie$ = this.theMoviesServicesService.getMovieById(params.id);
      this.id = params.id;
      console.log(params);
    })
  }

} */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheMoviesServicesService } from 'src/app/services/the-movies-services.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  Movie: Movie;
  id: number = null;
  title: string = null;
  poster_path: string = null;
  overview: string = null;
  constructor(private route:ActivatedRoute, private theMoviesServicesService: TheMoviesServicesService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.theMoviesServicesService.getMovieById(params.id).subscribe(
        (res) => {
          this.Movie = res;
          console.log(this.Movie);
          this.id = res.id;
          this.title = res.title;
          this.poster_path = res.poster_path;
          this.overview = res.overview;
        },
        (error) => {
          console.error(error)
        });
    });
  }
}
