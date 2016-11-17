"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var app_config_1 = require('../app-config');
var MovieService = (function () {
    function MovieService(_http, config) {
        this._http = _http;
        this.appConfig = config;
    }
    MovieService.prototype.getMovieRecords = function () {
        return this._http
            .get(this.appConfig.movieListUrl)
            .map(function (res) {
            return res.json();
        })
            .map(function (movies) {
            var result = [];
            if (movies) {
                movies.forEach(function (movie) {
                    var movieRecord = {
                        id: movie.id,
                        title: movie.title,
                        year_released: movie.yearReleased,
                        rating: movie.rating.name,
                        imdbUrl: movie.imdbUrl,
                        coverUrl: movie.coverUrl,
                        description: movie.description,
                        watched: movie.watched,
                        priority: movie.priority,
                        votes: movie.votes
                    };
                    result.push(movieRecord);
                });
            }
            return result;
        });
    };
    MovieService.prototype.getMovieRatings = function () {
        return this._http
            .get(this.appConfig.movieRatingsUrl)
            .map(function (res) {
            return res.json();
        })
            .map(function (res) {
            var result = [];
            if (res) {
                res.forEach(function (rating) {
                    var movieRating = {
                        id: rating.id,
                        name: rating.name,
                        description: rating.description
                    };
                    result.push(movieRating);
                });
            }
            return result;
        });
    };
    MovieService.prototype.saveMovieRecord = function (movieRecord) {
        var jsonObject = {
            "Id": movieRecord.id,
            "Title": movieRecord.title,
            "YearReleased": movieRecord.year_released,
            "Description": movieRecord.description,
            "ImdbUrl": movieRecord.imdbUrl,
            "CoverUrl": movieRecord.coverUrl,
            'Rating': {}
        };
        if (movieRecord.rating) {
            jsonObject.Rating = { name: movieRecord.rating };
        }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (movieRecord.id === this.appConfig.emptyGuid) {
            return this._http.post(this.appConfig.addMovieRecordUrl, JSON.stringify(jsonObject), {
                headers: headers
            }).map(function (res) {
                return res.json();
            });
        }
        else {
            return this._http.put(this.appConfig.updateMovieRecordUrl, JSON.stringify(jsonObject), {
                headers: headers
            }).map(function (res) {
                return res.json();
            });
        }
    };
    MovieService.prototype.markAsWatched = function (movieRecordId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this.appConfig.markAsWatchedUrl + '?movieRecordId=' + movieRecordId, null, {
            headers: headers
        }).map(function (res) {
            return true;
        });
    };
    MovieService.prototype.markAsUnwatched = function (movieRecordId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this.appConfig.markAsUnwatchedUrl + '?movieRecordId=' + movieRecordId, null, {
            headers: headers
        }).map(function (res) {
            return true;
        });
    };
    MovieService.prototype.upvoteMovie = function (movieRecordId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.appConfig.upvoteMovieUrl + '?movieRecordId=' + movieRecordId, null, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    MovieService.prototype.downvoteMovie = function (movieRecordId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.appConfig.downvoteMovieUrl + '?movieRecordId=' + movieRecordId, null, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    MovieService.prototype.deleteMovieRecord = function (movieRecord) {
        return this._http.delete(this.appConfig.deleteMovieRecordUrl + '?movieRecordId=' + movieRecord.id).map(function (res) {
            return true;
        });
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(app_config_1.APP_CONFIG_TOKEN)), 
        __metadata('design:paramtypes', [http_1.Http, Object])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie-service.js.map