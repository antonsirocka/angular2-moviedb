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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var main_component_1 = require('./components/main.component');
var movie_list_component_1 = require('./components/movie-list/movie-list.component');
var modal_1 = require('./components/ng2-modal/modal');
var alert_1 = require('./components/ng2-modal/alert');
var login_1 = require('./components/login/login');
var register_component_1 = require('./components/register/register.component');
var open_component_1 = require('./components/ng2-modal/open.component');
var movie_rating_selector_1 = require('./components/movie-rating/movie-rating-selector');
var year_released_validator_1 = require('./validators/year-released-validator');
var error_notification_component_1 = require('./components/error-notification/error-notification.component');
var spinner_component_1 = require('./components/spinner/spinner.component');
var movie_form_component_1 = require('./components/movie-form/movie-form.component');
var movie_display_component_1 = require('./components/movie-display/movie-display.component');
var movie_score_component_1 = require('./components/movie-score/movie-score.component');
var movie_service_1 = require('./services/movie-service');
var login_service_1 = require('./services/login-service');
var spinner_service_1 = require('./services/spinner-service');
var movie_record_model_factory_1 = require('./factories/movie-record-model-factory');
var app_config_1 = require('./app-config');
var app_config_2 = require('./app-config');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [main_component_1.MainComponent, error_notification_component_1.ErrorNotification, movie_list_component_1.MovieListComponent, modal_1.Modal, alert_1.Alert, login_1.Login, register_component_1.Register, open_component_1.Open, movie_rating_selector_1.MovieRatingSelector, year_released_validator_1.YearReleasedValidator, spinner_component_1.SpinnerComponent, movie_score_component_1.MovieScoreComponent, movie_display_component_1.MovieDisplayComponent, movie_form_component_1.MovieFormComponent],
            entryComponents: [spinner_component_1.SpinnerComponent, login_1.Login, register_component_1.Register, alert_1.Alert, movie_display_component_1.MovieDisplayComponent, movie_form_component_1.MovieFormComponent],
            bootstrap: [main_component_1.MainComponent],
            providers: [
                { provide: movie_service_1.MovieService, useClass: movie_service_1.MovieService },
                { provide: app_config_2.APP_CONFIG_TOKEN, useValue: app_config_1.MovieDatabaseConfig },
                { provide: spinner_service_1.SpinnerService, useClass: spinner_service_1.SpinnerService },
                { provide: movie_record_model_factory_1.MovieRecordModelFactory, useClass: movie_record_model_factory_1.MovieRecordModelFactory },
                { provide: login_service_1.LoginService, useClass: login_service_1.LoginService }
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map