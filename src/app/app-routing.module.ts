import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularListComponent } from './pages/popular-list/popular-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'popular', component:  PopularListComponent},
  { path: '', redirectTo: 'movies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
