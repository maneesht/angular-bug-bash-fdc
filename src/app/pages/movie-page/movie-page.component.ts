import { Component, inject } from '@angular/core';
import { MovieService } from '../../movie-service.service';
import { MovieListComponent } from '../../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-page',
  imports: [MovieListComponent],
  template: `
    <div class="page-bg container">
      <app-movie-list [movies$]="top10Movies$" title="Top 10 Movies" />
      <app-movie-list [movies$]="latestMovies$" title="Latest Movies" />
    </div>
  `,
  styleUrl: './movie-page.component.scss'
})
export class MoviePageComponent {
  movieService = inject(MovieService);
  // we can replace this with something like `injectListMovies({ limit: 10, orderByRating: OrderDirection.DESC });`
  top10Movies$ = this.movieService.handleGetTopMovies(10);
  latestMovies$ = this.movieService.handleGetLatestMovies(10);
}
