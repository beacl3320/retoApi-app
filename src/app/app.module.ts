import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieItemComponent } from './pages/movie-item/movie-item.component';
import { PopularListComponent } from './pages/popular-list/popular-list.component';
import { PopularItemComponent } from './pages/popular-item/popular-item.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
