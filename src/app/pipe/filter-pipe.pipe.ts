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
