System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', '../app-config'], function(exports_1, context_1) {
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
    var core_1, http_1, app_config_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(_http, config) {
                    this._http = _http;
                    this.appConfig = config;
                }
                LoginService.prototype.login = function (username, password) {
                    var jsonObject = {
                        Username: username,
                        Password: password
                    };
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.appConfig.loginUrl, JSON.stringify(jsonObject), {
                        headers: headers
                    }).map(function (res) {
                        return res.json();
                    });
                };
                LoginService.prototype.logout = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.appConfig.logoutUrl, null, {
                        headers: headers
                    }).map(function (res) {
                        return true;
                    });
                };
                LoginService.prototype.register = function (username, password, secretkey) {
                    var jsonObject = {
                        Username: username,
                        Password: password,
                        SecretKey: secretkey
                    };
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.appConfig.registerUrl, JSON.stringify(jsonObject), {
                        headers: headers
                    }).map(function (res) {
                        return res.json();
                    });
                };
                LoginService.prototype.getLoggedInUsername = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.get(this.appConfig.GetLoggedInUserUrl)
                        .map(function (res) {
                        return res.json();
                    });
                };
                LoginService = __decorate([
                    __param(1, core_1.Inject(app_config_1.APP_CONFIG_TOKEN)), 
                    __metadata('design:paramtypes', [http_1.Http, Object])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login-service.js.map