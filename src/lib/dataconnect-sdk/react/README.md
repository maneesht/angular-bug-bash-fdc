# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListMovies*](#listmovies)
  - [*GetMovieById*](#getmoviebyid)
  - [*GetActorById*](#getactorbyid)
  - [*GetCurrentUser*](#getcurrentuser)
  - [*GetIfFavoritedMovie*](#getiffavoritedmovie)
  - [*SearchAll*](#searchall)
- [**Mutations**](#mutations)
  - [*UpsertUser*](#upsertuser)
  - [*AddFavoritedMovie*](#addfavoritedmovie)
  - [*DeleteFavoritedMovie*](#deletefavoritedmovie)
  - [*AddReview*](#addreview)
  - [*UpdateReview*](#updatereview)
  - [*DeleteReview*](#deletereview)
  - [*noArgs*](#noargs)

# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `movie-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@movie/dataconnect/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `movie-connector`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#install_tanstack_query_firebase_packages), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `movie-connector`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@movie/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react).

```javascript
import { connectDataConnectEmulator, getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@movie/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries). To learn how to make "lazy loading" Queries, you can also read [this post](https://stackoverflow.com/a/70516680/21417394) by [TkDodo](https://tkdodo.eu/blog/) (Dominik Dorfmeister), a maintainer of TanStack React Query.

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no arguments, the Query hook function does not require arguments.
- If the Query accepts any arguments (including optional arguments), the Query hook function will require at least one argument: an object that contains all the required variables (and the optional variables) for the Query.
  - If all of the Query's arguments are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks also accept an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).

Below are examples of how to use the `movie-connector` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#use_queries_and_mutations_in_your_react_client).

## ListMovies
You can execute the `ListMovies` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):
```javascript
useListMovies(vars?: ListMoviesVariables, options?: useDataConnectQueryOptions<ListMoviesData>): UseQueryResult<FlattenedQueryResult<ListMoviesData, ListMoviesVariables>, FirebaseError>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListMovies(dc: DataConnect, vars?: ListMoviesVariables, options?: useDataConnectQueryOptions<ListMoviesData>): UseQueryResult<FlattenedQueryResult<ListMoviesData, ListMoviesVariables>, FirebaseError>;
```

### Variables
The `ListMovies` Query requires an argument of type `ListMoviesVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListMoviesVariables {
  orderByRating?: OrderDirection | null;
  orderByReleaseYear?: OrderDirection | null;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListMovies` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListMovies` Query is of type `ListMoviesData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    releaseYear?: number | null;
    genre?: string | null;
    rating?: number | null;
    tags?: string[] | null;
    description?: string | null;
  } & Movie_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListMovies`'s Query hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, ListMoviesVariables } from '@movie/dataconnect';
import { useListMovies } from '@movie/dataconnect/react'

export default function ListMoviesComponent() {
  // The `useListMovies` Query hook requires an argument of type `ListMoviesVariables`:
  const listMoviesVars: ListMoviesVariables = {
    orderByRating: ..., // optional
    orderByReleaseYear: ..., // optional
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListMovies(listMoviesVars);
  // Variables can be defined inline as well.
  const query = useListMovies({ orderByRating: ..., orderByReleaseYear: ..., limit: ..., });
  // Since all variables are optional for this Query, you can omit the `ListMoviesVariables` argument.
  const query = useListMovies();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListMovies(dataConnect, listMoviesVars);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.movies);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetMovieById
You can execute the `GetMovieById` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):
```javascript
useGetMovieById(vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseQueryResult<FlattenedQueryResult<GetMovieByIdData, GetMovieByIdVariables>, FirebaseError>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetMovieById(dc: DataConnect, vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseQueryResult<FlattenedQueryResult<GetMovieByIdData, GetMovieByIdVariables>, FirebaseError>;
```

### Variables
The `GetMovieById` Query requires an argument of type `GetMovieByIdVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetMovieByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetMovieById` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetMovieById` Query is of type `GetMovieByIdData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetMovieByIdData {
  movie?: {
    id: UUIDString;
    title: string;
    imageUrl: string;
    releaseYear?: number | null;
    genre?: string | null;
    rating?: number | null;
    description?: string | null;
    tags?: string[] | null;
    metadata: ({
      director?: string | null;
    })[];
      mainActors: ({
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key)[];
        supportingActors: ({
          id: UUIDString;
          name: string;
          imageUrl: string;
        } & Actor_Key)[];
          reviews: ({
            id: UUIDString;
            reviewText?: string | null;
            reviewDate: DateString;
            rating?: number | null;
            user: {
              id: string;
              username: string;
            } & User_Key;
          })[];
  } & Movie_Key;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetMovieById`'s Query hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, GetMovieByIdVariables } from '@movie/dataconnect';
import { useGetMovieById } from '@movie/dataconnect/react'

export default function GetMovieByIdComponent() {
  // The `useGetMovieById` Query hook requires an argument of type `GetMovieByIdVariables`:
  const getMovieByIdVars: GetMovieByIdVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetMovieById(getMovieByIdVars);
  // Variables can be defined inline as well.
  const query = useGetMovieById({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetMovieById(dataConnect, getMovieByIdVars);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.movie);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetActorById
You can execute the `GetActorById` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):
```javascript
useGetActorById(vars: GetActorByIdVariables, options?: useDataConnectQueryOptions<GetActorByIdData>): UseQueryResult<FlattenedQueryResult<GetActorByIdData, GetActorByIdVariables>, FirebaseError>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetActorById(dc: DataConnect, vars: GetActorByIdVariables, options?: useDataConnectQueryOptions<GetActorByIdData>): UseQueryResult<FlattenedQueryResult<GetActorByIdData, GetActorByIdVariables>, FirebaseError>;
```

### Variables
The `GetActorById` Query requires an argument of type `GetActorByIdVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetActorByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetActorById` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetActorById` Query is of type `GetActorByIdData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetActorByIdData {
  actor?: {
    id: UUIDString;
    name: string;
    imageUrl: string;
    mainActors: ({
      id: UUIDString;
      title: string;
      genre?: string | null;
      tags?: string[] | null;
      imageUrl: string;
    } & Movie_Key)[];
      supportingActors: ({
        id: UUIDString;
        title: string;
        genre?: string | null;
        tags?: string[] | null;
        imageUrl: string;
      } & Movie_Key)[];
  } & Actor_Key;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetActorById`'s Query hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, GetActorByIdVariables } from '@movie/dataconnect';
import { useGetActorById } from '@movie/dataconnect/react'

export default function GetActorByIdComponent() {
  // The `useGetActorById` Query hook requires an argument of type `GetActorByIdVariables`:
  const getActorByIdVars: GetActorByIdVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetActorById(getActorByIdVars);
  // Variables can be defined inline as well.
  const query = useGetActorById({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetActorById(dataConnect, getActorByIdVars);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.actor);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetCurrentUser
You can execute the `GetCurrentUser` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):
```javascript
useGetCurrentUser(options?: useDataConnectQueryOptions<GetCurrentUserData>): UseQueryResult<FlattenedQueryResult<GetCurrentUserData, undefined>, FirebaseError>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseQueryResult<FlattenedQueryResult<GetCurrentUserData, undefined>, FirebaseError>;
```

### Variables
The `GetCurrentUser` Query has no variables.
### Return Type
Recall that calling the `GetCurrentUser` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetCurrentUser` Query is of type `GetCurrentUserData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetCurrentUserData {
  user?: {
    id: string;
    username: string;
    reviews: ({
      id: UUIDString;
      rating?: number | null;
      reviewDate: DateString;
      reviewText?: string | null;
      movie: {
        id: UUIDString;
        title: string;
      } & Movie_Key;
    })[];
      favoriteMovies: ({
        movie: {
          id: UUIDString;
          title: string;
          genre?: string | null;
          imageUrl: string;
          releaseYear?: number | null;
          rating?: number | null;
          description?: string | null;
          tags?: string[] | null;
          metadata: ({
            director?: string | null;
          })[];
        } & Movie_Key;
      })[];
  } & User_Key;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetCurrentUser`'s Query hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@movie/dataconnect';
import { useGetCurrentUser } from '@movie/dataconnect/react'

export default function GetCurrentUserComponent() {

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetCurrentUser();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetCurrentUser(dataConnect);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.user);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetIfFavoritedMovie
You can execute the `GetIfFavoritedMovie` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):
```javascript
useGetIfFavoritedMovie(vars: GetIfFavoritedMovieVariables, options?: useDataConnectQueryOptions<GetIfFavoritedMovieData>): UseQueryResult<FlattenedQueryResult<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>, FirebaseError>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetIfFavoritedMovie(dc: DataConnect, vars: GetIfFavoritedMovieVariables, options?: useDataConnectQueryOptions<GetIfFavoritedMovieData>): UseQueryResult<FlattenedQueryResult<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>, FirebaseError>;
```

### Variables
The `GetIfFavoritedMovie` Query requires an argument of type `GetIfFavoritedMovieVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetIfFavoritedMovieVariables {
  movieId: UUIDString;
}
```
### Return Type
Recall that calling the `GetIfFavoritedMovie` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetIfFavoritedMovie` Query is of type `GetIfFavoritedMovieData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetIfFavoritedMovieData {
  favorite_movie?: {
    movieId: UUIDString;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetIfFavoritedMovie`'s Query hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, GetIfFavoritedMovieVariables } from '@movie/dataconnect';
import { useGetIfFavoritedMovie } from '@movie/dataconnect/react'

export default function GetIfFavoritedMovieComponent() {
  // The `useGetIfFavoritedMovie` Query hook requires an argument of type `GetIfFavoritedMovieVariables`:
  const getIfFavoritedMovieVars: GetIfFavoritedMovieVariables = {
    movieId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetIfFavoritedMovie(getIfFavoritedMovieVars);
  // Variables can be defined inline as well.
  const query = useGetIfFavoritedMovie({ movieId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetIfFavoritedMovie(dataConnect, getIfFavoritedMovieVars);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.favorite_movie);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## SearchAll
You can execute the `SearchAll` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):
```javascript
useSearchAll(vars: SearchAllVariables, options?: useDataConnectQueryOptions<SearchAllData>): UseQueryResult<FlattenedQueryResult<SearchAllData, SearchAllVariables>, FirebaseError>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useSearchAll(dc: DataConnect, vars: SearchAllVariables, options?: useDataConnectQueryOptions<SearchAllData>): UseQueryResult<FlattenedQueryResult<SearchAllData, SearchAllVariables>, FirebaseError>;
```

### Variables
The `SearchAll` Query requires an argument of type `SearchAllVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface SearchAllVariables {
  input?: string | null;
  minYear: number;
  maxYear: number;
  minRating: number;
  maxRating: number;
  genre: string;
}
```
### Return Type
Recall that calling the `SearchAll` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `SearchAll` Query is of type `SearchAllData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface SearchAllData {
  moviesMatchingTitle: ({
    id: UUIDString;
    title: string;
    genre?: string | null;
    rating?: number | null;
    imageUrl: string;
  } & Movie_Key)[];
    moviesMatchingDescription: ({
      id: UUIDString;
      title: string;
      genre?: string | null;
      rating?: number | null;
      imageUrl: string;
    } & Movie_Key)[];
      actorsMatchingName: ({
        id: UUIDString;
        name: string;
        imageUrl: string;
      } & Actor_Key)[];
        reviewsMatchingText: ({
          id: UUIDString;
          rating?: number | null;
          reviewText?: string | null;
          reviewDate: DateString;
          movie: {
            id: UUIDString;
            title: string;
          } & Movie_Key;
            user: {
              id: string;
              username: string;
            } & User_Key;
        })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `SearchAll`'s Query hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, SearchAllVariables } from '@movie/dataconnect';
import { useSearchAll } from '@movie/dataconnect/react'

export default function SearchAllComponent() {
  // The `useSearchAll` Query hook requires an argument of type `SearchAllVariables`:
  const searchAllVars: SearchAllVariables = {
    input: ..., // optional
    minYear: ..., 
    maxYear: ..., 
    minRating: ..., 
    maxRating: ..., 
    genre: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useSearchAll(searchAllVars);
  // Variables can be defined inline as well.
  const query = useSearchAll({ input: ..., minYear: ..., maxYear: ..., minRating: ..., maxRating: ..., genre: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useSearchAll(dataConnect, searchAllVars);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.moviesMatchingTitle);
    console.log(query.data.moviesMatchingDescription);
    console.log(query.data.actorsMatchingName);
    console.log(query.data.reviewsMatchingText);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no arguments, the `mutate()` function does not require arguments.
- If the Mutation accepts any arguments (including optional arguments), the `mutate()` function will require at least one argument: an object that contains all the required variables (and the optional variables) for the Mutation.
  - If all of the Mutation's arguments are optional, the `mutate()` function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments, and you want to pass options to `UseMutationResult.mutate()`, you must pass `undefined` as the first argument (where you would normally pass the Mutation's arguments) to `UseMutationResult.mutate()`, and then the options as the second argument.

Below are examples of how to use the `movie-connector` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#use_queries_and_mutations_in_your_react_client).

## UpsertUser
You can execute the `UpsertUser` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseMutationResult<FlattenedMutationResult<UpsertUserData, UpsertUserVariables>, FirebaseError, UpsertUserVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseMutationResult<FlattenedMutationResult<UpsertUserData, UpsertUserVariables>, FirebaseError, UpsertUserVariables>;
```

### Variables
The `UpsertUser` Mutation requires an argument of type `UpsertUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpsertUserVariables {
  username: string;
}
```
### Return Type
Recall that calling the `UpsertUser` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpsertUser` Mutation is of type `UpsertUserData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpsertUserData {
  user_upsert: User_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpsertUser`'s Mutation hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, UpsertUserVariables } from '@movie/dataconnect';
import { useUpsertUser } from '@movie/dataconnect/react'

export default function UpsertUserComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpsertUser();
  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpsertUser(dataConnect);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpsertUser` Mutation requires an argument of type `UpsertUserVariables`:
  const upsertUserVars: UpsertUserVariables = {
    username: ..., 
  };
  mutation.mutate(upsertUserVars);
  // Variables can be defined inline as well.
  mutation.mutate({ username: ..., });

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AddFavoritedMovie
You can execute the `AddFavoritedMovie` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useAddFavoritedMovie(options?: useDataConnectMutationOptions<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<AddFavoritedMovieData, AddFavoritedMovieVariables>, FirebaseError, AddFavoritedMovieVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAddFavoritedMovie(dc: DataConnect, options?: useDataConnectMutationOptions<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<AddFavoritedMovieData, AddFavoritedMovieVariables>, FirebaseError, AddFavoritedMovieVariables>;
```

### Variables
The `AddFavoritedMovie` Mutation requires an argument of type `AddFavoritedMovieVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AddFavoritedMovieVariables {
  movieId: UUIDString;
}
```
### Return Type
Recall that calling the `AddFavoritedMovie` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AddFavoritedMovie` Mutation is of type `AddFavoritedMovieData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AddFavoritedMovieData {
  favorite_movie_upsert: FavoriteMovie_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AddFavoritedMovie`'s Mutation hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, AddFavoritedMovieVariables } from '@movie/dataconnect';
import { useAddFavoritedMovie } from '@movie/dataconnect/react'

export default function AddFavoritedMovieComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAddFavoritedMovie();
  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAddFavoritedMovie(dataConnect);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAddFavoritedMovie` Mutation requires an argument of type `AddFavoritedMovieVariables`:
  const addFavoritedMovieVars: AddFavoritedMovieVariables = {
    movieId: ..., 
  };
  mutation.mutate(addFavoritedMovieVars);
  // Variables can be defined inline as well.
  mutation.mutate({ movieId: ..., });

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.favorite_movie_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteFavoritedMovie
You can execute the `DeleteFavoritedMovie` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteFavoritedMovie(options?: useDataConnectMutationOptions<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>, FirebaseError, DeleteFavoritedMovieVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteFavoritedMovie(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>): UseMutationResult<FlattenedMutationResult<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>, FirebaseError, DeleteFavoritedMovieVariables>;
```

### Variables
The `DeleteFavoritedMovie` Mutation requires an argument of type `DeleteFavoritedMovieVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteFavoritedMovieVariables {
  movieId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteFavoritedMovie` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteFavoritedMovie` Mutation is of type `DeleteFavoritedMovieData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteFavoritedMovieData {
  favorite_movie_delete?: FavoriteMovie_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteFavoritedMovie`'s Mutation hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteFavoritedMovieVariables } from '@movie/dataconnect';
import { useDeleteFavoritedMovie } from '@movie/dataconnect/react'

export default function DeleteFavoritedMovieComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteFavoritedMovie();
  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteFavoritedMovie(dataConnect);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteFavoritedMovie` Mutation requires an argument of type `DeleteFavoritedMovieVariables`:
  const deleteFavoritedMovieVars: DeleteFavoritedMovieVariables = {
    movieId: ..., 
  };
  mutation.mutate(deleteFavoritedMovieVars);
  // Variables can be defined inline as well.
  mutation.mutate({ movieId: ..., });

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.favorite_movie_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AddReview
You can execute the `AddReview` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useAddReview(options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseMutationResult<FlattenedMutationResult<AddReviewData, AddReviewVariables>, FirebaseError, AddReviewVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAddReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseMutationResult<FlattenedMutationResult<AddReviewData, AddReviewVariables>, FirebaseError, AddReviewVariables>;
```

### Variables
The `AddReview` Mutation requires an argument of type `AddReviewVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AddReviewVariables {
  movieId: UUIDString;
  rating: number;
  reviewText: string;
}
```
### Return Type
Recall that calling the `AddReview` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AddReview` Mutation is of type `AddReviewData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AddReviewData {
  review_insert: Review_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AddReview`'s Mutation hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, AddReviewVariables } from '@movie/dataconnect';
import { useAddReview } from '@movie/dataconnect/react'

export default function AddReviewComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAddReview();
  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAddReview(dataConnect);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAddReview` Mutation requires an argument of type `AddReviewVariables`:
  const addReviewVars: AddReviewVariables = {
    movieId: ..., 
    rating: ..., 
    reviewText: ..., 
  };
  mutation.mutate(addReviewVars);
  // Variables can be defined inline as well.
  mutation.mutate({ movieId: ..., rating: ..., reviewText: ..., });

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.review_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateReview
You can execute the `UpdateReview` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateReview(options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseMutationResult<FlattenedMutationResult<UpdateReviewData, UpdateReviewVariables>, FirebaseError, UpdateReviewVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateReview(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseMutationResult<FlattenedMutationResult<UpdateReviewData, UpdateReviewVariables>, FirebaseError, UpdateReviewVariables>;
```

### Variables
The `UpdateReview` Mutation requires an argument of type `UpdateReviewVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateReviewVariables {
  movieId: UUIDString;
  rating: number;
  reviewText: string;
}
```
### Return Type
Recall that calling the `UpdateReview` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateReview` Mutation is of type `UpdateReviewData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateReviewData {
  review_update?: Review_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateReview`'s Mutation hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateReviewVariables } from '@movie/dataconnect';
import { useUpdateReview } from '@movie/dataconnect/react'

export default function UpdateReviewComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateReview();
  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateReview(dataConnect);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateReview` Mutation requires an argument of type `UpdateReviewVariables`:
  const updateReviewVars: UpdateReviewVariables = {
    movieId: ..., 
    rating: ..., 
    reviewText: ..., 
  };
  mutation.mutate(updateReviewVars);
  // Variables can be defined inline as well.
  mutation.mutate({ movieId: ..., rating: ..., reviewText: ..., });

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.review_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteReview
You can execute the `DeleteReview` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteReview(options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseMutationResult<FlattenedMutationResult<DeleteReviewData, DeleteReviewVariables>, FirebaseError, DeleteReviewVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteReview(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseMutationResult<FlattenedMutationResult<DeleteReviewData, DeleteReviewVariables>, FirebaseError, DeleteReviewVariables>;
```

### Variables
The `DeleteReview` Mutation requires an argument of type `DeleteReviewVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteReviewVariables {
  movieId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteReview` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteReview` Mutation is of type `DeleteReviewData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteReviewData {
  review_delete?: Review_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteReview`'s Mutation hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteReviewVariables } from '@movie/dataconnect';
import { useDeleteReview } from '@movie/dataconnect/react'

export default function DeleteReviewComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteReview();
  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteReview(dataConnect);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteReview` Mutation requires an argument of type `DeleteReviewVariables`:
  const deleteReviewVars: DeleteReviewVariables = {
    movieId: ..., 
  };
  mutation.mutate(deleteReviewVars);
  // Variables can be defined inline as well.
  mutation.mutate({ movieId: ..., });

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.review_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## noArgs
You can execute the `noArgs` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useNoArgs(options?: useDataConnectMutationOptions<NoArgsData, FirebaseError, NoArgsVariables | void>): UseMutationResult<FlattenedMutationResult<NoArgsData, NoArgsVariables>, FirebaseError, NoArgsVariables | void>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useNoArgs(dc: DataConnect, options?: useDataConnectMutationOptions<NoArgsData, FirebaseError, NoArgsVariables | void>): UseMutationResult<FlattenedMutationResult<NoArgsData, NoArgsVariables>, FirebaseError, NoArgsVariables | void>;
```

### Variables
The `noArgs` Mutation requires an argument of type `NoArgsVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface NoArgsVariables {
  title?: string | null;
}
```
### Return Type
Recall that calling the `noArgs` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `noArgs` Mutation is of type `NoArgsData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface NoArgsData {
  movie_insert: Movie_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `noArgs`'s Mutation hook function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, NoArgsVariables } from '@movie/dataconnect';
import { useNoArgs } from '@movie/dataconnect/react'

export default function NoArgsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useNoArgs();
  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useNoArgs(dataConnect);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useNoArgs` Mutation requires an argument of type `NoArgsVariables`:
  const noArgsVars: NoArgsVariables = {
    title: ..., // optional
  };
  mutation.mutate(noArgsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ title: ..., });
  // Since all variables are optional for this Mutation, you can omit the `NoArgsVariables` argument.
  mutation.mutate();

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.movie_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

