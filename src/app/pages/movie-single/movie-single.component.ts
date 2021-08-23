import { Component, OnInit } from '@angular/core';
import { TheMoviesServicesService } from 'src/app/services/the-movies-services.service';
import { Movie } from '../movies-list/models/movie';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {
  public movieList: Movie[] = [];

  constructor(public theMoviesServicesService: TheMoviesServicesService) {
    this.myList();
   }

  ngOnInit(): void {
  }

  public myList(){
    this.theMoviesServicesService.getAllMovies().subscribe((data:any) => {
      const results: Movie[] = data.results;
      const formattedResults = results.map(({id, title, original_title, poster_path, overview, release_date, vote_acount, vote_average, genre_ids}) => ({
        title,
        original_title,
        poster_path,
        overview,
        release_date,
        vote_acount,
        vote_average,
        genre_ids,
        id
      }));
      return this.movieList = formattedResults;
    })
  }

}
