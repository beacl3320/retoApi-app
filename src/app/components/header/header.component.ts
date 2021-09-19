import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/pages/models/movie';
import { MovieResponse } from 'src/app/pages/models/movie-response';
import { TheMoviesServicesService } from 'src/app/services/the-movies-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movies$: Observable<MovieResponse>;

  constructor(private theMoviesServicesService: TheMoviesServicesService) { }

  filterMovie = '';
  movie: Movie;

  ngOnInit(): void {
    this.movies$ = this.theMoviesServicesService.getAllMovies()
  }

}
