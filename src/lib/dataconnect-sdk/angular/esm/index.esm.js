import { upsertUserRef, addFavoritedMovieRef, deleteFavoritedMovieRef, addReviewRef, updateReviewRef, deleteReviewRef, noArgsRef, listMoviesRef, getMovieByIdRef, getActorByIdRef, getCurrentUserRef, getIfFavoritedMovieRef, searchAllRef } from '../../';
import { DataConnect, CallerSdkTypeEnum } from '@angular/fire/data-connect';
import { injectDataConnectQuery, injectDataConnectMutation } from '@tanstack-query-firebase/angular/data-connect';
import { inject, EnvironmentInjector } from '@angular/core';
export function injectUpsertUser(args, injector) {
  return injectDataConnectMutation(upsertUserRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectAddFavoritedMovie(args, injector) {
  return injectDataConnectMutation(addFavoritedMovieRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectDeleteFavoritedMovie(args, injector) {
  return injectDataConnectMutation(deleteFavoritedMovieRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectAddReview(args, injector) {
  return injectDataConnectMutation(addReviewRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectUpdateReview(args, injector) {
  return injectDataConnectMutation(updateReviewRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectDeleteReview(args, injector) {
  return injectDataConnectMutation(deleteReviewRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectNoArgs(args, injector) {
  return injectDataConnectMutation(noArgsRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListMovies(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listMoviesRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetMovieById(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getMovieByIdRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetActorById(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getActorByIdRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetCurrentUser(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getCurrentUserRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetIfFavoritedMovie(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getIfFavoritedMovieRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectSearchAll(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  searchAllRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

