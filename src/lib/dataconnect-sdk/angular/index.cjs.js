const { upsertUserRef, addFavoritedMovieRef, deleteFavoritedMovieRef, addReviewRef, updateReviewRef, deleteReviewRef, noArgsRef, listMoviesRef, getMovieByIdRef, getActorByIdRef, getCurrentUserRef, getIfFavoritedMovieRef, searchAllRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectUpsertUser = function injectUpsertUser(args, injector) {
  return injectDataConnectMutation(upsertUserRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectAddFavoritedMovie = function injectAddFavoritedMovie(args, injector) {
  return injectDataConnectMutation(addFavoritedMovieRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectDeleteFavoritedMovie = function injectDeleteFavoritedMovie(args, injector) {
  return injectDataConnectMutation(deleteFavoritedMovieRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectAddReview = function injectAddReview(args, injector) {
  return injectDataConnectMutation(addReviewRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectUpdateReview = function injectUpdateReview(args, injector) {
  return injectDataConnectMutation(updateReviewRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectDeleteReview = function injectDeleteReview(args, injector) {
  return injectDataConnectMutation(deleteReviewRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectNoArgs = function injectNoArgs(args, injector) {
  return injectDataConnectMutation(noArgsRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectListMovies = function injectListMovies(args, options, injector) {
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

exports.injectGetMovieById = function injectGetMovieById(args, options, injector) {
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

exports.injectGetActorById = function injectGetActorById(args, options, injector) {
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

exports.injectGetCurrentUser = function injectGetCurrentUser(options, injector) {
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

exports.injectGetIfFavoritedMovie = function injectGetIfFavoritedMovie(args, options, injector) {
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

exports.injectSearchAll = function injectSearchAll(args, options, injector) {
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

