"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var movie_service_1 = require('../services/movie-service');
var MovieMockedService = (function (_super) {
    __extends(MovieMockedService, _super);
    function MovieMockedService() {
        _super.apply(this, arguments);
    }
    MovieMockedService.prototype.getMovieRecords = function () {
        var MOVIERECORDS = [
            { "id": '1', "title": "Revenant", 'year_released': '2016', 'rating': 'R', 'imdbUrl': '', 'coverUrl': '', 'description': 'some description', 'watched': false, 'priority': 0, 'votes': [] },
            { "id": '2', "title": "Spotlight", 'year_released': '2016', 'rating': 'R', 'imdbUrl': '', 'coverUrl': '', 'description': 'some description', 'watched': false, 'priority': 0, 'votes': [] }
        ];
        var result = Observable_1.Observable.create(function (observer) {
            observer.next(MOVIERECORDS);
            observer.complete();
        });
        return result;
    };
    MovieMockedService.prototype.getMovieRatings = function () {
        var MOVIERATINGS = [
            { "Name": "G" },
            { "Name": "PG" },
            { "Name": "M" },
            { "Name": "MA" },
            { "Name": "R" }
        ];
        return Observable_1.Observable.create(function (observer) {
            observer.next(MOVIERATINGS);
            observer.complete();
        });
    };
    MovieMockedService.prototype.saveMovieRecord = function (movieRecord) {
        var savedMovieRecord = movieRecord;
        return Observable_1.Observable.create(function (observer) {
            observer.next(savedMovieRecord);
            observer.complete();
        });
    };
    MovieMockedService.prototype.deleteMovieRecord = function (movieRecord) {
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    MovieMockedService.prototype.markAsWatched = function (movieRecordId) {
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    MovieMockedService.prototype.markAsUnwatched = function (movieRecordId) {
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    MovieMockedService.prototype.upvoteMovie = function (movieRecordId) {
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    MovieMockedService.prototype.downvoteMovie = function (movieRecordId) {
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    MovieMockedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MovieMockedService);
    return MovieMockedService;
}(movie_service_1.MovieService));
exports.MovieMockedService = MovieMockedService;
//# sourceMappingURL=movie-mocked-service.js.map