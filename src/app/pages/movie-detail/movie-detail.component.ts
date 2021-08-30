import { Observable } from 'rxjs';
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

  constructor(private route:ActivatedRoute, private theMoviesServicesService: TheMoviesServicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movie$ = this.theMoviesServicesService.getMoviesById(params.id);
    })
  }

}