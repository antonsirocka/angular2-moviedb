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
//import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
var modal_1 = require('../ng2-modal/modal');
var spinner_service_1 = require('../../services/spinner-service');
var login_service_1 = require('../../services/login-service');
var Login = (function () {
    function Login(_modal, _loginService, _spinner) {
        this._modal = _modal;
        this._loginService = _loginService;
        this._spinner = _spinner;
    }
    Login.prototype.login = function (username, password) {
        var _this = this;
        this._loginService.login(username, password)
            .subscribe(function (data) {
            localStorage.setItem('userId', data.userId);
            _this._modal.close(data);
        }, function (err) {
            _this.displayError(err);
        });
    };
    Login.prototype.displayError = function (err) {
        if (err._body) {
            this.errorMessage = err._body;
        }
        else if (err.message) {
            this.errorMessage = err.message;
        }
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/components/login/login.html',
            styleUrls: ['app/components/login/login.css']
        }), 
        __metadata('design:paramtypes', [modal_1.Modal, login_service_1.LoginService, spinner_service_1.SpinnerService])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map