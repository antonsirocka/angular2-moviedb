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
var movie_service_1 = require('../services/movie-service');
var login_service_1 = require('../services/login-service');
var spinner_service_1 = require('../services/spinner-service');
var movie_record_model_factory_1 = require('../factories/movie-record-model-factory');
var app_config_1 = require('../app-config');
var app_config_2 = require('../app-config');
var modal_1 = require('../components/ng2-modal/modal');
var alert_1 = require('../components/ng2-modal/alert');
var login_1 = require('../components/login/login');
var register_component_1 = require('../components/register/register.component');
var MainComponent = (function () {
    function MainComponent(_loginService) {
        this._loginService = _loginService;
        this.loggedInUsername = null;
    }
    MainComponent.prototype.getModalOutputData = function (data) {
        if (data) {
            if (data.username) {
                this.loggedInUsername = data.username;
            }
            else if (data.userName) {
                this.loggedInUsername = data.userName;
            }
        }
    };
    MainComponent.prototype.confirmAlertClose = function (data) {
    };
    MainComponent.prototype.openLoginDialog = function () {
        this.modal.modalTitle = "Login";
        this.modal.modalFooter = false;
        this.modal.open(login_1.Login);
    };
    MainComponent.prototype.logout = function () {
        var _this = this;
        this._loginService.logout()
            .subscribe(function (data) {
            localStorage.removeItem('userId');
            _this.loggedInUsername = null;
        }, function (err) {
        });
    };
    MainComponent.prototype.register = function () {
        this.modal.modalTitle = "Register";
        this.modal.modalFooter = false;
        this.modal.open(register_component_1.Register);
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.getLoggedInUsername()
            .subscribe(function (data) {
            localStorage.setItem('userId', data.id);
            _this.loggedInUsername = data.userName;
        }, function (err) {
        });
    };
    __decorate([
        core_1.ViewChild(alert_1.Alert), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "alert", void 0);
    __decorate([
        core_1.ViewChild(modal_1.Modal), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "modal", void 0);
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-component',
            templateUrl: 'app/components/main.component.html',
            providers: [
                { provide: movie_service_1.MovieService, useClass: movie_service_1.MovieService },
                { provide: app_config_2.APP_CONFIG_TOKEN, useValue: app_config_1.MovieDatabaseConfig },
                { provide: spinner_service_1.SpinnerService, useClass: spinner_service_1.SpinnerService },
                { provide: movie_record_model_factory_1.MovieRecordModelFactory, useClass: movie_record_model_factory_1.MovieRecordModelFactory },
                { provide: login_service_1.LoginService, useClass: login_service_1.LoginService }
            ]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map