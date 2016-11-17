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
var movie_record_model_factory_1 = require('../../factories/movie-record-model-factory');
var modal_1 = require('../ng2-modal/modal');
var app_config_1 = require('../../app-config');
var MovieFormComponent = (function () {
    function MovieFormComponent(_movieService, _movieRecordModelFactory, _modal, config) {
        this._movieService = _movieService;
        this._movieRecordModelFactory = _movieRecordModelFactory;
        this._modal = _modal;
        this.submitted = false;
        this.isnew = false;
        this.appConfig = config;
    }
    MovieFormComponent.prototype.close = function () {
        this._modal.close();
    };
    MovieFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this._movieService
            .saveMovieRecord(this.movieRecord)
            .subscribe(function (data) {
            _this.movieRecord = data;
            _this.close();
            _this.submitted = false;
            _this._modal.modalOutput.emit("ReloadMovieList");
        }, function (err) {
            _this.submitted = false;
            _this.displayError(err);
        }, function () {
        });
    };
    MovieFormComponent.prototype.displayError = function (err) {
        if (err._body) {
            this.errorMessage = err._body;
        }
        else if (err.message) {
            this.errorMessage = err.message;
        }
    };
    MovieFormComponent.prototype.ngOnInit = function () {
        if (this._modal.modalContentObject) {
            this.movieRecord = this._modal.modalContentObject;
        }
        else {
            this.movieRecord = this._movieRecordModelFactory.createNew()._movieRecord;
        }
        this.isnew = this.movieRecord.id == this.appConfig.emptyGuid;
    };
    MovieFormComponent.prototype.ngAfterViewInit = function () {
    };
    MovieFormComponent = __decorate([
        core_1.Component({
            selector: 'movie-form',
            templateUrl: 'app/components/movie-form/movie-form.component.html'
        }),
        __param(3, core_1.Inject(app_config_1.APP_CONFIG_TOKEN)), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, movie_record_model_factory_1.MovieRecordModelFactory, modal_1.Modal, Object])
    ], MovieFormComponent);
    return MovieFormComponent;
}());
exports.MovieFormComponent = MovieFormComponent;
//# sourceMappingURL=movie-form.component.js.map