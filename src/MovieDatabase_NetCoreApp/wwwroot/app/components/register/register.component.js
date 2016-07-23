System.register(['@angular/core', '../ng2-modal/modal', '../../services/spinner-service', '../../services/login-service', '../error-notification/error-notification.component'], function(exports_1, context_1) {
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
    var core_1, modal_1, spinner_service_1, login_service_1, error_notification_component_1;
    var Register;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (error_notification_component_1_1) {
                error_notification_component_1 = error_notification_component_1_1;
            }],
        execute: function() {
            Register = (function () {
                function Register(_modal, _loginService, _spinner) {
                    this._modal = _modal;
                    this._loginService = _loginService;
                    this._spinner = _spinner;
                }
                Register.prototype.register = function (username, password, key) {
                    var _this = this;
                    this._loginService.register(username, password, key)
                        .subscribe(function (data) {
                        localStorage.setItem('userId', data.id);
                        _this._modal.close(data);
                    }, function (err) {
                        _this.displayError(err);
                    });
                };
                Register.prototype.displayError = function (err) {
                    if (err._body) {
                        this.errorMessage = err._body;
                    }
                    else if (err.message) {
                        this.errorMessage = err.message;
                    }
                };
                Register = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'app/components/register/register.component.html',
                        directives: [error_notification_component_1.ErrorNotification]
                    }), 
                    __metadata('design:paramtypes', [modal_1.Modal, login_service_1.LoginService, spinner_service_1.SpinnerService])
                ], Register);
                return Register;
            }());
            exports_1("Register", Register);
        }
    }
});
//# sourceMappingURL=register.component.js.map