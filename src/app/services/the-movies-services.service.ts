
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieResponse } from "../pages/models/movie-response";
import { Movie } from "../pages/models/movie";

@Injectable({
  providedIn: 'root'
})
export class TheMoviesServicesService {
  constructor(private httpClient: HttpClient) { }

  getAllMovies() : Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES&page=1'
    )
  }
  getMovieById(id: string):Observable<Movie>{
    return this.httpClient.get<Movie>(
     `https://api.themoviedb.org/3/movie/${id}?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES&page=1/`
      )
  }
}
