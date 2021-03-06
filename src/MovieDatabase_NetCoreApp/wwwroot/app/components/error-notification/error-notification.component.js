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
var ErrorNotification = (function () {
    function ErrorNotification() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ErrorNotification.prototype, "errorMessage", void 0);
    ErrorNotification = __decorate([
        core_1.Component({
            selector: 'error-notification',
            template: "\n        <div [hidden]=\"!errorMessage\" class=\"alert-danger\">\n            <p>\n                An error has occurred.<br />\n                {{ errorMessage }}\n            </p>\n        </div>        \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorNotification);
    return ErrorNotification;
}());
exports.ErrorNotification = ErrorNotification;
//# sourceMappingURL=error-notification.component.js.map