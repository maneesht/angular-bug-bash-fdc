import { Component, inject, Input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { ListMoviesData } from '@movie/dataconnect';
import { MovieService } from '../movie-service.service';
import { Auth, authState } from '@angular/fire/auth';
import { firstValueFrom, NEVER, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movie-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatChipSet,
    MatChip,
    MatIcon,
  ],
  template: `
    <div class="bg-gray-800 card">
      <mat-card class="bg-gray-800 height-100">
        <img [src]="movie.imageUrl" [alt]="movie.title" height="16rem" />
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title class="title text-lg">{{
            movie.title
          }}</mat-card-title>
        </mat-card-header>
        <span class="genre">{{ movie.genre }}</span>
        <div class="flex padding justify-between">
          <div>
            <mat-icon
              aria-hidden="false"
              aria-label="Favorited"
              [fontIcon]="isFavorited$ ? 'favorite' : 'favorite_outline'"
              (click)="toggleIsFavorited()"
              class="text-red-500"
            ></mat-icon>
          </div>
          <div class="flex items-center">
            <mat-icon
              aria-hidden="false"
              aria-label="rating"
              fontIcon="star"
              class="text-yellow-500"
            ></mat-icon>
            <span>{{ movie.rating }}</span>
          </div>
        </div>
        <mat-card-actions>
          <mat-chip-set aria-label="Movie Genres">
            @for (item of movie.tags; track $index) {
            <mat-chip>{{ item }}</mat-chip>
            } @empty {
            <div>No Items</div>
            }
          </mat-chip-set>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: ListMoviesData['movies'][0];
  isFavorited$ = false;
  movieService = inject(MovieService);
  auth = inject(Auth);
  currentUser = authState(this.auth);
  currentUserSignal = toSignal(this.currentUser);
  ngOnInit() {
    // TODO: We can replace this whole block with injectGetIfFavoritedMovie({ movieId: this.movie.id }, () => ({ enabled: this.currentUserSignal()!! }));
    this.currentUser
      .pipe(
        switchMap((value) =>
          !!value
            ? this.movieService.handleGetIfFavoritedMovie(this.movie.id)
            : NEVER
        )
      )
      .subscribe((isFavorited) => {
        this.isFavorited$ = isFavorited;
      });
  }
  async toggleIsFavorited() {
    const isFavorited = await firstValueFrom(
      this.movieService.handleGetIfFavoritedMovie(this.movie.id)
    );
    if (isFavorited) {
      await this.movieService.handleDeleteFavoritedMovie(this.movie.id);
    } else {
      await this.movieService.handleAddFavoritedMovie(this.movie.id);
    }
    this.isFavorited$ = !this.isFavorited$;
  }
}
