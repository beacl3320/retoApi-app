import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieItemComponent } from './pages/movie-item/movie-item.component';
import { PopularListComponent } from './pages/popular-list/popular-list.component';
import { PopularItemComponent } from './pages/popular-item/popular-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SpinnerComponent,
    MoviesListComponent,
    MovieListComponent,
    MovieItemComponent,
    PopularItemComponent,
    PopularListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
