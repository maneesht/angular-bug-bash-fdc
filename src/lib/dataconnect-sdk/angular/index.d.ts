import { UpsertUserData, UpsertUserVariables, AddFavoritedMovieData, AddFavoritedMovieVariables, DeleteFavoritedMovieData, DeleteFavoritedMovieVariables, AddReviewData, AddReviewVariables, UpdateReviewData, UpdateReviewVariables, DeleteReviewData, DeleteReviewVariables, NoArgsData, NoArgsVariables, ListMoviesData, ListMoviesVariables, GetMovieByIdData, GetMovieByIdVariables, GetActorByIdData, GetActorByIdVariables, GetCurrentUserData, GetIfFavoritedMovieData, GetIfFavoritedMovieVariables, SearchAllData, SearchAllVariables } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { FlattenedQueryResult, CreateDataConnectQueryOptions, FlattenedMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';

export { TimestampString, UUIDString, Int64String, DateString } from '../';
export { OrderDirection } from '../';


type UpsertUserOptions = DataConnectMutationOptionsUndefinedMutationFn<UpsertUserData, FirebaseError, UpsertUserVariables>;
export function injectUpsertUser(options?: UpsertUserOptions, injector?: Injector): CreateMutationResult<UpsertUserData, FirebaseError, UpsertUserVariables>;

type AddFavoritedMovieOptions = DataConnectMutationOptionsUndefinedMutationFn<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>;
export function injectAddFavoritedMovie(options?: AddFavoritedMovieOptions, injector?: Injector): CreateMutationResult<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>;

type DeleteFavoritedMovieOptions = DataConnectMutationOptionsUndefinedMutationFn<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>;
export function injectDeleteFavoritedMovie(options?: DeleteFavoritedMovieOptions, injector?: Injector): CreateMutationResult<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>;

type AddReviewOptions = DataConnectMutationOptionsUndefinedMutationFn<AddReviewData, FirebaseError, AddReviewVariables>;
export function injectAddReview(options?: AddReviewOptions, injector?: Injector): CreateMutationResult<AddReviewData, FirebaseError, AddReviewVariables>;

type UpdateReviewOptions = DataConnectMutationOptionsUndefinedMutationFn<UpdateReviewData, FirebaseError, UpdateReviewVariables>;
export function injectUpdateReview(options?: UpdateReviewOptions, injector?: Injector): CreateMutationResult<UpdateReviewData, FirebaseError, UpdateReviewVariables>;

type DeleteReviewOptions = DataConnectMutationOptionsUndefinedMutationFn<DeleteReviewData, FirebaseError, DeleteReviewVariables>;
export function injectDeleteReview(options?: DeleteReviewOptions, injector?: Injector): CreateMutationResult<DeleteReviewData, FirebaseError, DeleteReviewVariables>;

type NoArgsOptions = DataConnectMutationOptionsUndefinedMutationFn<NoArgsData, FirebaseError, NoArgsVariables | void>;
export function injectNoArgs(options?: NoArgsOptions, injector?: Injector): CreateMutationResult<NoArgsData, FirebaseError, NoArgsVariables | void>;

type ListMoviesArgs = ListMoviesVariables | (() => ListMoviesVariables);
export type ListMoviesOptions = () => Omit<CreateDataConnectQueryOptions<ListMoviesData, ListMoviesVariables>, 'queryFn'>;
export function injectListMovies(args?: ListMoviesArgs, options?: ListMoviesOptions, injector?: Injector): CreateQueryResult<FlattenedQueryResult<ListMoviesData, FirebaseError>>;

type GetMovieByIdArgs = GetMovieByIdVariables | (() => GetMovieByIdVariables);
export type GetMovieByIdOptions = () => Omit<CreateDataConnectQueryOptions<GetMovieByIdData, GetMovieByIdVariables>, 'queryFn'>;
export function injectGetMovieById(args: GetMovieByIdArgs, options?: GetMovieByIdOptions, injector?: Injector): CreateQueryResult<FlattenedQueryResult<GetMovieByIdData, FirebaseError>>;

type GetActorByIdArgs = GetActorByIdVariables | (() => GetActorByIdVariables);
export type GetActorByIdOptions = () => Omit<CreateDataConnectQueryOptions<GetActorByIdData, GetActorByIdVariables>, 'queryFn'>;
export function injectGetActorById(args: GetActorByIdArgs, options?: GetActorByIdOptions, injector?: Injector): CreateQueryResult<FlattenedQueryResult<GetActorByIdData, FirebaseError>>;

export type GetCurrentUserOptions = () => Omit<CreateDataConnectQueryOptions<GetCurrentUserData, undefined>, 'queryFn'>;
export function injectGetCurrentUser(options?: GetCurrentUserOptions, injector?: Injector): CreateQueryResult<FlattenedQueryResult<GetCurrentUserData, FirebaseError>>;

type GetIfFavoritedMovieArgs = GetIfFavoritedMovieVariables | (() => GetIfFavoritedMovieVariables);
export type GetIfFavoritedMovieOptions = () => Omit<CreateDataConnectQueryOptions<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>, 'queryFn'>;
export function injectGetIfFavoritedMovie(args: GetIfFavoritedMovieArgs, options?: GetIfFavoritedMovieOptions, injector?: Injector): CreateQueryResult<FlattenedQueryResult<GetIfFavoritedMovieData, FirebaseError>>;

type SearchAllArgs = SearchAllVariables | (() => SearchAllVariables);
export type SearchAllOptions = () => Omit<CreateDataConnectQueryOptions<SearchAllData, SearchAllVariables>, 'queryFn'>;
export function injectSearchAll(args: SearchAllArgs, options?: SearchAllOptions, injector?: Injector): CreateQueryResult<FlattenedQueryResult<SearchAllData, FirebaseError>>;
