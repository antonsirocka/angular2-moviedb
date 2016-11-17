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
var movie_service_1 = require('../../services/movie-service');
var modal_1 = require('../ng2-modal/modal');
var app_config_1 = require('../../app-config');
var MovieDisplayComponent = (function () {
    function MovieDisplayComponent(_movieService, _modal, config) {
        this._movieService = _movieService;
        this._modal = _modal;
        this.upVoteCount = 0;
        this.downVoteCount = 0;
    }
    MovieDisplayComponent.prototype.markAsWatched = function () {
        var _this = this;
        this._movieService
            .markAsWatched(this.movieRecord.id)
            .subscribe(function (data) {
            _this._modal.close();
            _this._modal.modalOutput.emit("ReloadMovieList");
        }, function (err) {
            _this.displayError(err);
        }, function () {
        });
    };
    MovieDisplayComponent.prototype.markAsUnwatched = function () {
        var _this = this;
        this._movieService
            .markAsUnwatched(this.movieRecord.id)
            .subscribe(function (data) {
            _this._modal.close();
            _this._modal.modalOutput.emit("ReloadMovieList");
        }, function (err) {
            _this.displayError(err);
        }, function () {
        });
    };
    MovieDisplayComponent.prototype.processVote = function (vote) {
        var _this = this;
        if (vote == "upvote") {
            this._movieService
                .upvoteMovie(this.movieRecord.id)
                .subscribe(function (data) {
                _this.upVoteCount++;
                _this.movieRecord.votes.push(data);
            }, function (err) {
            }, function () {
            });
        }
        else if (vote == "downvote") {
            this._movieService
                .downvoteMovie(this.movieRecord.id)
                .subscribe(function (data) {
                _this.downVoteCount++;
                _this.movieRecord.votes.push(data);
            }, function (err) {
                _this.displayError(err);
            }, function () {
            });
        }
    };
    MovieDisplayComponent.prototype.displayError = function (err) {
        if (err._body) {
            this.errorMessage = err._body;
        }
        else if (err.message) {
            this.errorMessage = err.message;
        }
    };
    MovieDisplayComponent.prototype.ngOnInit = function () {
        if (this._modal.modalContentObject) {
            this.movieRecord = this._modal.modalContentObject;
            this.downVoteCount = this.movieRecord.votes.filter(function (x) {
                return x.isDownvote === true;
            }).length;
            this.upVoteCount = this.movieRecord.votes.filter(function (x) {
                return x.isUpvote === true;
            }).length;
        }
    };
    MovieDisplayComponent = __decorate([
        core_1.Component({
            selector: 'movie-record-display',
            templateUrl: 'app/components/movie-display/movie-display.component.html'
        }),
        __param(2, core_1.Inject(app_config_1.APP_CONFIG_TOKEN)), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, modal_1.Modal, Object])
    ], MovieDisplayComponent);
    return MovieDisplayComponent;
}());
exports.MovieDisplayComponent = MovieDisplayComponent;
//# sourceMappingURL=movie-display.component.js.map