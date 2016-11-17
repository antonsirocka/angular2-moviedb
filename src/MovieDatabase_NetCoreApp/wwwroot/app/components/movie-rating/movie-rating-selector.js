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
var core_1 = require('@angular/core');
var movie_service_1 = require('../../services/movie-service');
var MovieRatingSelector = (function () {
    function MovieRatingSelector(_movieService) {
        this._movieService = _movieService;
        this.select = new core_1.EventEmitter();
        this.ratings = [];
    }
    MovieRatingSelector.prototype.emitValue = function () {
        var selectedRating = this.ratings.find(function (f) { return f.selected == true; });
        if (selectedRating) {
            this.select.emit(selectedRating.name);
        }
        else if (this.ratings.length > 0) {
            this.select.emit(this.ratings[0].name);
        }
    };
    MovieRatingSelector.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        if (!this.ratings || this.ratings.length == 0) {
            this._movieService
                .getMovieRatings()
                .subscribe(function (data) {
                data.forEach(function (rating) { return _this.ratings.push({
                    name: rating.name,
                    selected: rating.name == _this.selectedValue
                }); });
                self.emitValue();
            });
        }
        else {
            self.emitValue();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MovieRatingSelector.prototype, "selectedValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MovieRatingSelector.prototype, "select", void 0);
    MovieRatingSelector = __decorate([
        core_1.Component({
            selector: 'movie-rating-selector',
            template: "\n        <select #sel (change)=\"select.emit(sel.value)\" name=\"rating\">\n            <option *ngFor=\"let rating of ratings\" [selected]=\"rating.selected == true\">{{rating.name}}</option>\n        </select>"
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], MovieRatingSelector);
    return MovieRatingSelector;
}());
exports.MovieRatingSelector = MovieRatingSelector;
//# sourceMappingURL=movie-rating-selector.js.map