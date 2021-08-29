import { PopularResponse } from '../pages/movies-list/models/popular-response.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopularService {
  constructor(private httpClient: HttpClient) {}
  getPopular(): Observable<PopularResponse> {
    return this.httpClient.get<PopularResponse>(
      'https://api.themoviedb.org/3/movie/popular?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES&page=1'
    );
  }
}
