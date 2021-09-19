import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieItemComponent } from './pages/movie-item/movie-item.component';
import { PopularListComponent } from './pages/popular-list/popular-list.component';
import { PopularItemComponent } from './pages/popular-item/popular-item.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MoviesListComponent,
    MovieListComponent,
    MovieItemComponent,
    PopularItemComponent,
    PopularListComponent,
    FilterPipePipe,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
