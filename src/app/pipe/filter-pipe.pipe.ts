import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultMovie = [];
    for(const movie of value){
      if(movie.title.tolowerCase().indexOf(arg) > -1){

        console.log('hola')
        resultMovie.push(movie);
      }
      }
      return resultMovie;
  }}
