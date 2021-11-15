/* import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/pages/models/movie';
import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

const Movie$:Observable<title> = this.HttpClient.get(`https://api.themoviedb.org/3/movie/${title}?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES&page=1/`).pipe(
  map((response: Response) => response.json()),
  map((array:title[]) => {
    return array.map((item:title) => {
      item.newProperty = 'value';
    })
  })
)

}

this.HttpClient.get(`https://api.themoviedb.org/3/movie/${title}?api_key=1a8dd1775176c33f207ec8b1dbf63559&language=es-ES&page=1/`)
.pipe(map((response:Response) => Response.json()))
.subscribe((array:title[]) => {
  let modifiedArray = array.map((item:any) => {
    item.newProperty = 'value';
  })
  this.title = modifiedArray;


  transform(listMovies: any[], text:string): any[] {
    console.log(text);
    console.log(listMovies);
    listMovies.forEach(element => {
      console.log(element.title);
    });

    if(!text) return listMovies;

    return listMovies.filter(movie => movie.toUppercase().includes(text.toUpperCase()))

  } */

import { Movie } from 'src/app/pages/models/movie';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(listMovies: any[], text:string): any[] {
    if(!text) return listMovies
    return listMovies.filter(movie => movie.toUppercase().includes(text.toUpperCase()))

  }}
