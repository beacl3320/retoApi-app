import { MovieResponse } from './../movies-list/models/movie-response';
import { Component, OnInit } from '@angular/core';
import { TheMoviesServicesService } from 'src/app/services/the-movies-services.service';
import { Movie } from '../movies-list/models/movie';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<MovieResponse>;

  constructor(private theMoviesServicesService: TheMoviesServicesService) { }

  ngOnInit(): void {
    /* console.log('El componente se ha inicializado'); */
    this.movies$ = this.theMoviesServicesService.getAllMovies()
  }

  setMovie(movie: Movie): void {
    console.log(movie)
  }

}
