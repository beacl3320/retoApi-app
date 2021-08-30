import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../pages/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input()
  movie: Movie
  @Output()
  movieSelected = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

}
