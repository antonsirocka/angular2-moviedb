System.register(['@angular/core', '../components/spinner/spinner.component'], function(exports_1, context_1) {
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
    var core_1, spinner_component_1;
    var SpinnerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            SpinnerService = (function () {
                function SpinnerService(componentLoader) {
                    this.componentLoader = componentLoader;
                }
                SpinnerService.prototype.setViewcontainerRef = function (viewContainerRef) {
                    this._viewContainerRef = viewContainerRef;
                };
                SpinnerService.prototype.set = function (compRef) {
                    this.spinnerComp = compRef;
                };
                SpinnerService.prototype.start = function (viewContainerRef) {
                    var spinnerRef;
                    if (viewContainerRef) {
                        spinnerRef = this.componentLoader.loadNextToLocation(spinner_component_1.SpinnerComponent, viewContainerRef);
                    }
                    else {
                        spinnerRef = this.componentLoader.loadNextToLocation(spinner_component_1.SpinnerComponent, this._viewContainerRef);
                    }
                    return spinnerRef;
                };
                SpinnerService.prototype.stop = function () {
                    if (this.spinnerComp) {
                        this.spinnerComp.destroy();
                    }
                };
                SpinnerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader])
                ], SpinnerService);
                return SpinnerService;
            }());
            exports_1("SpinnerService", SpinnerService);
        }
    }
});
//# sourceMappingURL=spinner-service.js.map