System.register(['@angular/core', '../../services/movie-service', '../../services/spinner-service', '../../factories/movie-record-model-factory', '../movie-form/movie-form.component', '../movie-display/movie-display.component', '../ng2-modal/modal', '../ng2-modal/alert', '../../app-config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, movie_service_1, spinner_service_1, movie_record_model_factory_1, movie_form_component_1, movie_display_component_1, modal_1, alert_1, app_config_1;
    var MovieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            },
            function (movie_record_model_factory_1_1) {
                movie_record_model_factory_1 = movie_record_model_factory_1_1;
            },
            function (movie_form_component_1_1) {
                movie_form_component_1 = movie_form_component_1_1;
            },
            function (movie_display_component_1_1) {
                movie_display_component_1 = movie_display_component_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            MovieListComponent = (function () {
                function MovieListComponent(_movieService, _spinner, viewContainerRef, _movieRecordModelFactory, config) {
                    this._movieService = _movieService;
                    this._spinner = _spinner;
                    this.viewContainerRef = viewContainerRef;
                    this._movieRecordModelFactory = _movieRecordModelFactory;
                    this.movieRecords = [];
                    this.appConfig = config;
                }
                MovieListComponent.prototype.getModalOutputData = function (data) {
                    if (data == "ReloadMovieList") {
                        this.getMovieRecords();
                    }
                };
                MovieListComponent.prototype.confirmAlertClose = function (data) {
                };
                MovieListComponent.prototype.getMovieRecords = function (initialLoad) {
                    var _this = this;
                    if (initialLoad === void 0) { initialLoad = false; }
                    this.movieRecords = [];
                    this._spinner.start(this.viewContainerRef).then(function (spinnerCompRef) {
                        _this._spinner.set(spinnerCompRef);
                        _this._movieService
                            .getMovieRecords()
                            .subscribe(function (data) {
                            data.forEach(function (record) {
                                _this.movieRecords.push(record);
                            });
                            if (initialLoad) {
                                _this.initialLoadCompleted = true;
                            }
                        }, function (err) {
                            _this.displayError(err);
                            _this._spinner.stop();
                        }, function () {
                            _this._spinner.stop();
                        });
                    });
                };
                MovieListComponent.prototype.reloadList = function () {
                    this.getMovieRecords();
                };
                MovieListComponent.prototype.showMovieRecord = function (movieRecord) {
                    this.modal.modalTitle = movieRecord.title;
                    this.modal.modalFooter = false;
                    this.modal.open(movie_display_component_1.MovieDisplayComponent, movieRecord);
                };
                MovieListComponent.prototype.editRecord = function (movieRecord) {
                    this.modal.modalTitle = "Edit movie record";
                    this.modal.modalFooter = false;
                    this.modal.open(movie_form_component_1.MovieFormComponent, movieRecord);
                };
                MovieListComponent.prototype.deleteRecord = function (movieRecord) {
                    var _this = this;
                    if (movieRecord.id !== this.appConfig.emptyGuid) {
                        var movieRecordModel = this._movieRecordModelFactory.create(movieRecord);
                        movieRecordModel.delete(this._movieService)
                            .subscribe(function (data) {
                            _this.removeFromArray(movieRecord);
                        }, function (err) {
                            _this.displayError(err);
                        }, function () {
                        });
                    }
                    else {
                        this.removeFromArray(movieRecord);
                    }
                };
                MovieListComponent.prototype.saveChanges = function (movieRecord) {
                    var _this = this;
                    var movieRecordModel = this._movieRecordModelFactory.create(movieRecord);
                    movieRecordModel.save(this._movieService)
                        .subscribe(function (data) {
                    }, function (err) {
                        _this.displayError(err);
                    }, function () {
                    });
                };
                MovieListComponent.prototype.cancelChanges = function (movieRecord) {
                    if (movieRecord.id === this.appConfig.emptyGuid) {
                        this.removeFromArray(movieRecord);
                    }
                    this.getMovieRecords();
                };
                MovieListComponent.prototype.removeFromArray = function (movieRecord) {
                    var index = this.movieRecords.findIndex(function (m) { return m.id === movieRecord.id; });
                    if (index > -1) {
                        this.movieRecords.splice(index, 1);
                    }
                };
                MovieListComponent.prototype.addNewEntry = function () {
                    var newMovieRecordModel = this._movieRecordModelFactory.createNew();
                    this.modal.modalTitle = "Add new movie record";
                    this.modal.modalFooter = false;
                    this.modal.open(movie_form_component_1.MovieFormComponent, newMovieRecordModel._movieRecord);
                };
                MovieListComponent.prototype.displayError = function (err) {
                    var errorMessage;
                    if (err.headers && err.headers.toJSON() && err.headers.toJSON()['Content-Type'][0].indexOf('text/html') > -1) {
                        errorMessage = "Error " + err.status + " has occurred calling URL " + err.url;
                    }
                    else if (err._body) {
                        errorMessage = err._body;
                    }
                    else if (err.message) {
                        errorMessage = err.message;
                    }
                    this.alert.alertFooter = true;
                    this.alert.cancelButton = true;
                    this.alert.okButton = false;
                    this.alert.alertHeader = true;
                    this.alert.alertTitle = "An error has occurred.";
                    this.alert.message = errorMessage;
                    this.alert.cancelButtonText = "Close.";
                    this.alert.open();
                };
                MovieListComponent.prototype.ngOnInit = function () {
                };
                MovieListComponent.prototype.ngAfterViewInit = function () {
                    this.getMovieRecords(true);
                };
                MovieListComponent.prototype.ngAfterViewChecked = function () {
                };
                MovieListComponent.prototype.ngAfterContentInit = function () {
                };
                MovieListComponent.prototype.ngOnChanges = function (changes) {
                    if (this.initialLoadCompleted === true) {
                        this.getMovieRecords();
                    }
                };
                __decorate([
                    core_1.ViewChild(alert_1.Alert), 
                    __metadata('design:type', Object)
                ], MovieListComponent.prototype, "alert", void 0);
                __decorate([
                    core_1.ViewChild(modal_1.Modal), 
                    __metadata('design:type', Object)
                ], MovieListComponent.prototype, "modal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MovieListComponent.prototype, "loggedInUsername", void 0);
                MovieListComponent = __decorate([
                    core_1.Component({
                        selector: 'movie-list',
                        templateUrl: 'app/components/movie-list/movie-list.component.html',
                        directives: [modal_1.Modal, alert_1.Alert]
                    }),
                    __param(4, core_1.Inject(app_config_1.APP_CONFIG_TOKEN)), 
                    __metadata('design:paramtypes', [movie_service_1.MovieService, spinner_service_1.SpinnerService, core_1.ViewContainerRef, movie_record_model_factory_1.MovieRecordModelFactory, Object])
                ], MovieListComponent);
                return MovieListComponent;
            }());
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map