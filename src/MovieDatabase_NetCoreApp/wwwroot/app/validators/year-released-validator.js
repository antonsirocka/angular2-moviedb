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
var YearReleasedValidator = (function () {
    function YearReleasedValidator() {
    }
    YearReleasedValidator = __decorate([
        core_1.Directive({
            selector: '[validateYearReleased][ngControl]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS,
                    useValue: checkValidYearRange,
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], YearReleasedValidator);
    return YearReleasedValidator;
}());
exports.YearReleasedValidator = YearReleasedValidator;
function checkValidYearRange(c) {
    if (c.value == "") {
        return null;
    }
    if (isNaN(c.value) || c.value < 1000 || c.value > 2999) {
        return { 'yearReleasedValid': false };
    }
    return null;
}
//# sourceMappingURL=year-released-validator.js.map