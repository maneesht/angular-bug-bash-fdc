import { UpsertUserData, UpsertUserVariables, AddFavoritedMovieData, AddFavoritedMovieVariables, DeleteFavoritedMovieData, DeleteFavoritedMovieVariables, AddReviewData, AddReviewVariables, UpdateReviewData, UpdateReviewVariables, DeleteReviewData, DeleteReviewVariables, NoArgsData, NoArgsVariables, ListMoviesData, ListMoviesVariables, GetMovieByIdData, GetMovieByIdVariables, GetActorByIdData, GetActorByIdVariables, GetCurrentUserData, GetIfFavoritedMovieData, GetIfFavoritedMovieVariables, SearchAllData, SearchAllVariables } from '../';
import { FlattenedQueryResult, useDataConnectQueryOptions, FlattenedMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseMutationResult<FlattenedMutationResult<UpsertUserData, UpsertUserVariables>, FirebaseError, UpsertUserVariables>;
export function useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseMutationResult<FlattenedMutationResult<UpsertUserData, UpsertUserVariables>, FirebaseError, UpsertUserVariables>;

export function useAddFavoritedMovie(options?: useDataConnectMutationOptions<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<AddFavoritedMovieData, AddFavoritedMovieVariables>, FirebaseError, AddFavoritedMovieVariables>;
export function useAddFavoritedMovie(dc: DataConnect, options?: useDataConnectMutationOptions<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<AddFavoritedMovieData, AddFavoritedMovieVariables>, FirebaseError, AddFavoritedMovieVariables>;

export function useDeleteFavoritedMovie(options?: useDataConnectMutationOptions<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>, FirebaseError, DeleteFavoritedMovieVariables>;
export function useDeleteFavoritedMovie(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>, FirebaseError, DeleteFavoritedMovieVariables>;

export function useAddReview(options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseMutationResult<FlattenedMutationResult<AddReviewData, AddReviewVariables>, FirebaseError, AddReviewVariables>;
export function useAddReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseMutationResult<FlattenedMutationResult<AddReviewData, AddReviewVariables>, FirebaseError, AddReviewVariables>;

export function useUpdateReview(options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseMutationResult<FlattenedMutationResult<UpdateReviewData, UpdateReviewVariables>, FirebaseError, UpdateReviewVariables>;
export function useUpdateReview(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseMutationResult<FlattenedMutationResult<UpdateReviewData, UpdateReviewVariables>, FirebaseError, UpdateReviewVariables>;

export function useDeleteReview(options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseMutationResult<FlattenedMutationResult<DeleteReviewData, DeleteReviewVariables>, FirebaseError, DeleteReviewVariables>;
export function useDeleteReview(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseMutationResult<FlattenedMutationResult<DeleteReviewData, DeleteReviewVariables>, FirebaseError, DeleteReviewVariables>;

export function useNoArgs(options?: useDataConnectMutationOptions<NoArgsData, FirebaseError, NoArgsVariables | void>): UseMutationResult<FlattenedMutationResult<NoArgsData, NoArgsVariables>, FirebaseError, NoArgsVariables | void>;
export function useNoArgs(dc: DataConnect, options?: useDataConnectMutationOptions<NoArgsData, FirebaseError, NoArgsVariables | void>): UseMutationResult<FlattenedMutationResult<NoArgsData, NoArgsVariables>, FirebaseError, NoArgsVariables | void>;

export function useListMovies(vars?: ListMoviesVariables, options?: useDataConnectQueryOptions<ListMoviesData>): UseQueryResult<FlattenedQueryResult<ListMoviesData, ListMoviesVariables>, FirebaseError>;
export function useListMovies(dc: DataConnect, vars?: ListMoviesVariables, options?: useDataConnectQueryOptions<ListMoviesData>): UseQueryResult<FlattenedQueryResult<ListMoviesData, ListMoviesVariables>, FirebaseError>;

export function useGetMovieById(vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseQueryResult<FlattenedQueryResult<GetMovieByIdData, GetMovieByIdVariables>, FirebaseError>;
export function useGetMovieById(dc: DataConnect, vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseQueryResult<FlattenedQueryResult<GetMovieByIdData, GetMovieByIdVariables>, FirebaseError>;

export function useGetActorById(vars: GetActorByIdVariables, options?: useDataConnectQueryOptions<GetActorByIdData>): UseQueryResult<FlattenedQueryResult<GetActorByIdData, GetActorByIdVariables>, FirebaseError>;
export function useGetActorById(dc: DataConnect, vars: GetActorByIdVariables, options?: useDataConnectQueryOptions<GetActorByIdData>): UseQueryResult<FlattenedQueryResult<GetActorByIdData, GetActorByIdVariables>, FirebaseError>;

export function useGetCurrentUser(options?: useDataConnectQueryOptions<GetCurrentUserData>): UseQueryResult<FlattenedQueryResult<GetCurrentUserData, undefined>, FirebaseError>;
export function useGetCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseQueryResult<FlattenedQueryResult<GetCurrentUserData, undefined>, FirebaseError>;

export function useGetIfFavoritedMovie(vars: GetIfFavoritedMovieVariables, options?: useDataConnectQueryOptions<GetIfFavoritedMovieData>): UseQueryResult<FlattenedQueryResult<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>, FirebaseError>;
export function useGetIfFavoritedMovie(dc: DataConnect, vars: GetIfFavoritedMovieVariables, options?: useDataConnectQueryOptions<GetIfFavoritedMovieData>): UseQueryResult<FlattenedQueryResult<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>, FirebaseError>;

export function useSearchAll(vars: SearchAllVariables, options?: useDataConnectQueryOptions<SearchAllData>): UseQueryResult<FlattenedQueryResult<SearchAllData, SearchAllVariables>, FirebaseError>;
export function useSearchAll(dc: DataConnect, vars: SearchAllVariables, options?: useDataConnectQueryOptions<SearchAllData>): UseQueryResult<FlattenedQueryResult<SearchAllData, SearchAllVariables>, FirebaseError>;
