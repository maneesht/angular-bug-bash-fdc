import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListMoviesData } from '@movie/dataconnect';
import { Observable } from 'rxjs';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { FlattenedQueryResult } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe, MovieCardComponent],
    template: `
      <h1> {{ title }} </h1>
      <div class="flex carousel">
        @if (
          movies.data(); as data
        ) {
          @for(movie of data.movies; track movie.id) {
            <app-movie-card [movie]="movie"/>
          } @empty {
            <div> There are no movies </div>
          }
        }
      </div>
    `,
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  // this.movieService.handleGetLatestMovies(10);
  // CreateQueryResult<FlattenedQueryResult<ListMoviesData, FirebaseError>>
  @Input({required: true }) movies!: CreateQueryResult<FlattenedQueryResult<ListMoviesData, FirebaseError>>;
  // @Input({required: true }) movies!: Observable<ListMoviesData['movies']>;
  @Input({required: true }) title!: string;
}
