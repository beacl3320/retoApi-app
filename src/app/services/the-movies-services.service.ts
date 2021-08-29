
/* Forma hecha como upgrade */
/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheMoviesServicesService {

  public endPointMovies: string = 'https://api.themoviedb.org/3/movie/popular?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES';

  constructor(private http: HttpClient) { }

  public getAllMovies(){
    return this.http.get(this.endPointMovies);
  }
} */

/* forma hecha como geekshub */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieResponse } from "../pages/movies-list/models/movie-response";

@Injectable({
  providedIn: 'root'
})
export class TheMoviesServicesService {
  constructor(private httpClient: HttpClient) { }

  getAllMovies() : Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(
      /* 'https://api.themoviedb.org/3/movie/popular?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES' */
      'https://api.themoviedb.org/3/movie/upcoming?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES&page=1'
    )
  }
}
