"use strict";
var core_1 = require('@angular/core');
exports.MovieDatabaseConfig = {
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
};
exports.APP_CONFIG_TOKEN = new core_1.OpaqueToken('app.config');
//# sourceMappingURL=app-config.js.map