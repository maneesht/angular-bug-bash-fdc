import { inject, Injectable } from '@angular/core';
import { DataConnect } from '@angular/fire/data-connect';
import {
  ListMoviesData,
  listMovies,
  OrderDirection,
  getIfFavoritedMovie,
  deleteFavoritedMovie,
  addFavoritedMovie,
} from '@movie/dataconnect';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  dc = inject(DataConnect);
  constructor() {}
  handleGetTopMovies = (
    limit: number
  ): Observable<ListMoviesData['movies']> => {
    return from(
      listMovies(this.dc, {
        orderByRating: OrderDirection.DESC,
        limit,
      }).then((res) => res.data.movies)
    );
  };

  // Fetch latest movies
  handleGetLatestMovies = (
    limit: number
  ): Observable<ListMoviesData['movies'] | null> => {
    return from(
      listMovies(this.dc, {
        orderByReleaseYear: OrderDirection.DESC,
        limit,
      }).then((res) => res.data.movies)
    );
  };
  handleGetIfFavoritedMovie = (movieId: string): Observable<boolean> => {
    return from(getIfFavoritedMovie({ movieId })).pipe(
      map((res) => !!res.data.favorite_movie)
    );
  };
  handleAddFavoritedMovie = async (movieId: string): Promise<void> => {
    try {
      await addFavoritedMovie({ movieId });
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
      throw error;
    }
  };

  // Remove a movie from user's favorites
  handleDeleteFavoritedMovie = async (movieId: string): Promise<void> => {
    try {
      await deleteFavoritedMovie({ movieId });
    } catch (error) {
      console.error('Error removing movie from favorites:', error);
      throw error;
    }
  };
}
