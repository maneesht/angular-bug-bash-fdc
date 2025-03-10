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
        <div class="flex padding">
          <div>
            @if (isFavorited$) {
              <mat-icon aria-hidden="false" aria-label="Favorited" fontIcon="favorite" (click)="toggleIsFavorited()"></mat-icon>
            } @else {
              <mat-icon aria-hidden="false" aria-label="Favorited" fontIcon="favorite_outline" (click)="toggleIsFavorited()"></mat-icon>
            }
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
  ngOnInit() {
    this.movieService.handleGetIfFavoritedMovie(this.movie.id).subscribe((isFavorited) => {
      this.isFavorited$ = isFavorited;
    });
  }
  async toggleIsFavorited() {
    if(this.isFavorited$) {
      await this.movieService.handleDeleteFavoritedMovie(this.movie.id);
    } else {
      await this.movieService.handleDeleteFavoritedMovie(this.movie.id);
    }
    this.isFavorited$ = !this.isFavorited$;
  }
}
