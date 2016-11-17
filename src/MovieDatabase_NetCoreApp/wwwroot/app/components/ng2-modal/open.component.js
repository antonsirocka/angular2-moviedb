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
// todo: add animate
// todo: add init and on change
var Open = (function () {
    function Open() {
        this.isExpanded = true;
    }
    Object.defineProperty(Open.prototype, "open", {
        get: function () {
            return this.isExpanded;
        },
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    Open.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Open.prototype.hide = function () {
        this.isExpanded = false;
        this.display = 'none';
        var backDrop = document.getElementsByClassName("modal-backdrop");
        if (backDrop.length > 0) {
            document.body.removeChild(backDrop[0]);
        }
    };
    Open.prototype.show = function () {
        var backDrop = document.createElement('div');
        backDrop.className = "modal-backdrop fade in";
        document.body.appendChild(backDrop);
        this.isExpanded = true;
        this.display = 'block';
    };
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', String)
    ], Open.prototype, "display", void 0);
    __decorate([
        core_1.HostBinding('class.in'),
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', Boolean)
    ], Open.prototype, "isExpanded", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], Open.prototype, "open", null);
    Open = __decorate([
        core_1.Directive({ selector: '[open]' }), 
        __metadata('design:paramtypes', [])
    ], Open);
    return Open;
}());
exports.Open = Open;
//# sourceMappingURL=open.component.js.map