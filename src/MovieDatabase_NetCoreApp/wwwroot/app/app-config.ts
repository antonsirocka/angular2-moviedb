import { AppConfig } from './interfaces/app-config';
import { OpaqueToken } from '@angular/core';

export const MovieDatabaseConfig: AppConfig = {
    emptyGuid: '00000000-0000-0000-0000-000000000000',
    movieListUrl: 'api/Movie/List',
    movieRatingsUrl: '/api/Movie/GetRatings',
    addMovieRecordUrl: 'api/Movie/Add',
    updateMovieRecordUrl: 'api/Movie/Update',
    markAsWatchedUrl: 'api/Movie/MarkAsWatched',
    markAsUnwatchedUrl: 'api/Movie/MarkAsUnwatched',
    upvoteMovieUrl: 'api/Movie/Upvote',
    downvoteMovieUrl: 'api/Movie/Downvote',
    deleteMovieRecordUrl: 'api/Movie/Delete',
    loginUrl: 'api/Account/Login',
    logoutUrl: 'api/Account/Logout',
    registerUrl: 'api/Account/Register',
    GetLoggedInUserUrl: 'api/Account/GetLoggedInUser'
}

export let APP_CONFIG_TOKEN = new OpaqueToken('app.config');
