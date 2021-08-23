
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies-list/models/movie';
import { TheMoviesServicesService } from 'src/app/services/the-movies-services.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private theMoviesServicesService: TheMoviesServicesService) { }

  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.theMoviesServicesService.getAllMovies().subscribe(
      (res) => {
        this.movies = res.results;
      },
    )
  }

}
