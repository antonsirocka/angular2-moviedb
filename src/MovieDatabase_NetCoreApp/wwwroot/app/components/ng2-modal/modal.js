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
    var Modal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (open_component_1_1) {
                open_component_1 = open_component_1_1;
            }],
        execute: function() {
            Modal = (function () {
                function Modal(dcl) {
                    this.dcl = dcl;
                    /**
                       * Describes if the modal contains Ok Button.
                       * The default Ok button will close the modal and emit the callback.
                       * Defaults to true.
                       */
                    this.okButton = true;
                    /**
                       * Caption for the OK button.
                       * Default: Ok
                       */
                    this.okButtonText = 'Ok';
                    /**
                       * Describes if the modal contains cancel Button.
                       * The default Cancelbutton will close the modal.
                       * Defaults to true.
                       */
                    this.cancelButton = true;
                    /**
                       * Caption for the Cancel button.
                       * Default: Cancel
                       */
                    this.cancelButtonText = 'Cancel';
                    /**
                       * if the modalMessage is true it will show the message inside modal body.
                       */
                    this.modalMessage = true;
                    /**
                      * if the value is true modal footer will be visible or else it will be hidden.
                      */
                    this.modalFooter = true;
                    /**
                      * shows modal header if the value is true.
                      */
                    this.modalHeader = true;
                    /**
                      * if the value is true modal will be visible or else it will be hidden.
                      */
                    this.isOpen = false;
                    /**
                      * Emitted when a ok button was clicked
                      * or when close method is called.
                      */
                    this.modalOutput = new core_1.EventEmitter();
                }
                /**
                     * Opens a modal window creating backdrop.
                     * @param component The angular Component that is to be loaded dynamically(optional).
                     */
                Modal.prototype.open = function (component, model) {
                    this.isOpen = true;
                    if (component) {
                        this.component = this.dcl.loadNextToLocation(component, this.modalMessageContainer);
                    }
                    if (model) {
                        this.modalContentObject = model;
                    }
                };
                /**
                   *  close method dispose the component, closes the modal and optionally emits modalOutput value.
                   */
                Modal.prototype.close = function (data) {
                    this.dispose();
                    if (data) {
                        this.modalOutput.emit(data);
                    }
                };
                /**
                   *  ok method dispose the component, closes the modal and emits true.
                   */
                Modal.prototype.submit = function () {
                    this.dispose();
                    this.modalOutput.emit(true);
                };
                /**
                   *  dispose method dispose the loaded component.
                   */
                Modal.prototype.dispose = function () {
                    this.isOpen = false;
                    if (this.component != undefined) {
                        this.component.then(function (componentRef) {
                            componentRef.destroy();
                            return componentRef;
                        });
                    }
                };
                __decorate([
                    core_1.ViewChild('child', { read: core_1.ViewContainerRef }), 
                    __metadata('design:type', core_1.ViewContainerRef)
                ], Modal.prototype, "modalMessageContainer", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Modal.prototype, "modalOutput", void 0);
                Modal = __decorate([
                    core_1.Component({
                        selector: 'modal',
                        template: "\n  <div class=\"modal fade\" [open]=\"!isOpen\" id=\"myModal\" [attr.data-keyboard]=\"true\" [attr.data-backdrop]=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" [hidden]=!modalHeader>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)='close()' aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title text-center\" id=\"myModalLabel\">{{modalTitle}}</h4>\n        </div>\n        <div class=\"modal-body\">\n        <div [hidden]=!modalMessage>\n            {{message}}\n        </div>\n          <div #child>\n          </div>\n        </div>\n        <div class=\"modal-footer\" [hidden]=!modalFooter>\n        <span [hidden]=!okButton >\n          <button [hidden]=!okButton class=\"btn btn-primary\" (click)=\"submit()\">{{okButtonText}}</button>\n          </span>\n          <span [hidden]=!cancelButton >\n          <button [hidden]=!cancelButton class=\"btn btn-primary\" (click)=\"close()\">{{cancelButtonText}}</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n",
                        providers: [],
                        directives: [open_component_1.Open],
                        encapsulation: core_1.ViewEncapsulation.None,
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader])
                ], Modal);
                return Modal;
            }());
            exports_1("Modal", Modal);
        }
    }
});
//# sourceMappingURL=modal.js.map