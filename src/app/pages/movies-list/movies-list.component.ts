import { Component, OnInit } from '@angular/core';
import { TheMoviesServicesService } from 'src/app/services/the-movies-services.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movieList: Movie[] = [];

  constructor(public theMoviesServicesService: TheMoviesServicesService) {
    this.myList();
  }

  ngOnInit(): void {
  }

  public myList(){
    this.theMoviesServicesService.getAllMovies().subscribe((data:any) => {
      const results: Movie[] = data.results;
      const formattedResults = results.map(({id, title, original_title, poster_path, overview, genre_ids, vote_average, release_date, vote_acount}) => ({
        id,
        title,
        original_title,
        poster_path,
        overview,
        genre_ids,
        vote_average,
        release_date,
        vote_acount
      }));
      return this.movieList = formattedResults;
    })
  }

}
