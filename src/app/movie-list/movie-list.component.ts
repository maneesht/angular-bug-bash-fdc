import { Component, inject } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { AsyncPipe } from '@angular/common';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { addFavoritedMovie } from '@movie/dataconnect';

@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe, MovieCardComponent],
  template: `
    <div class="page-bg container">
      <h1> Top 10 Movies </h1>
      <div class="flex carousel">
        @for(movie of top10Movies$ | async; track movie.id) {
          <app-movie-card [movie]="movie"/>
        } @empty {
          <div> There are no movies </div>
        }
      </div>
      <h1> Latest Movies </h1>
      <div class="flex carousel">
        @for(movie of latestMovies$ | async; track movie.id) {
          <app-movie-card [movie]="movie"/>
        } @empty {
          <div> There are no movies </div>
        }
      </div>
    </div>
  `,
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movieService = inject(MovieService);
  top10Movies$ = this.movieService.handleGetTopMovies(10);
  latestMovies$ = this.movieService.handleGetLatestMovies(10);
}
