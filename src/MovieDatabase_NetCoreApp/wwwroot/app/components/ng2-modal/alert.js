System.register(['@angular/core', './open.component'], function(exports_1, context_1) {
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
    var core_1, open_component_1;
    var Alert;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (open_component_1_1) {
                open_component_1 = open_component_1_1;
            }],
        execute: function() {
            Alert = (function () {
                function Alert(dcl) {
                    this.dcl = dcl;
                    /**
                       * Describes if the alert contains Ok Button.
                       * The default Ok button will close the alert and emit the callback.
                       * Defaults to true.
                       */
                    this.okButton = true;
                    /**
                       * Caption for the OK button.
                       * Default: Ok
                       */
                    this.okButtonText = 'Ok';
                    /**
                       * Describes if the alert contains cancel Button.
                       * The default Cancelbutton will close the alert.
                       * Defaults to true.
                       */
                    this.cancelButton = true;
                    /**
                       * Caption for the Cancel button.
                       * Default: Cancel
                       */
                    this.cancelButtonText = 'Cancel';
                    /**
                       * if the alertMessage is true it will show the contentString inside alert body.
                       */
                    this.alertMessage = true;
                    /**
                      * if the value is true alert footer will be visible or else it will be hidden.
                      */
                    this.alertFooter = true;
                    /**
                      * shows alert header if the value is true.
                      */
                    this.alertHeader = true;
                    /**
                      * if the value is true alert will be visible or else it will be hidden.
                      */
                    this.isOpen = false;
                    /**
                      * Emitted when a ok button was clicked
                      * or when Ok method is called.
                      */
                    this.alertOutput = new core_1.EventEmitter();
                }
                /**
                     * Opens a alert window creating backdrop.
                     */
                Alert.prototype.open = function () {
                    this.isOpen = true;
                };
                /**
                   *  ok method closes the modal and emits modalOutput.
                   */
                Alert.prototype.ok = function () {
                    this.isOpen = false;
                    this.alertOutput.emit(true);
                };
                /**
                   *  cancel method closes the moda.
                   */
                Alert.prototype.cancel = function () {
                    this.isOpen = false;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Alert.prototype, "alertOutput", void 0);
                Alert = __decorate([
                    core_1.Component({
                        selector: 'alert',
                        template: "\n  <div class=\"modal fade\" [open]=\"!isOpen\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" [hidden]=!alertHeader>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)='cancel()' aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title text-center\" id=\"myModalLabel\">{{alertTitle}}</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div [hidden]=!alertMessage>\n          {{message}}\n          </div>\n        </div>\n        <div class=\"modal-footer\" [hidden]=!alertFooter>\n        <span [hidden]=!okButton >\n          <button class=\"btn btn-primary\" (click)=\"ok()\">{{okButtonText}}</button>\n          </span>\n          <span [hidden]=!cancelButton>\n          <button class=\"btn btn-primary\" (click)=\"cancel()\">{{cancelButtonText}}</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
                        providers: [],
                        directives: [open_component_1.Open],
                        encapsulation: core_1.ViewEncapsulation.None,
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader])
                ], Alert);
                return Alert;
            }());
            exports_1("Alert", Alert);
        }
    }
});
//# sourceMappingURL=alert.js.map