System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var MovieDatabaseConfig, APP_CONFIG_TOKEN;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("MovieDatabaseConfig", MovieDatabaseConfig = {
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
            });
            exports_1("APP_CONFIG_TOKEN", APP_CONFIG_TOKEN = new core_1.OpaqueToken('app.config'));
        }
    }
});
//# sourceMappingURL=app-config.js.map