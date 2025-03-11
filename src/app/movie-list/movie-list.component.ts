import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListMoviesData } from '@movie/dataconnect';
import { Observable } from 'rxjs';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe, MovieCardComponent],
    template: `
      <h1> {{ title }} </h1>
      <div class="flex carousel">
        @for(movie of movies$ | async; track movie.id) {
          <app-movie-card [movie]="movie"/>
        } @empty {
          <div> There are no movies </div>
        }
      </div>
    `,
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input({required: true }) movies$!: Observable<ListMoviesData['movies']>;
  @Input({required: true }) title!: string;
}
