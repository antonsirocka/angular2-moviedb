import { Injectable, ElementRef, ComponentRef, ViewContainerRef } from '@angular/core';
//import { DynamicComponentLoader } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import {SpinnerComponent} from '../components/spinner/spinner.component';

@Injectable()
export class SpinnerService {
    spinnerComp: ComponentRef<SpinnerComponent>;
    _appElementRef: ElementRef;
    _viewContainerRef: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    public setViewcontainerRef(viewContainerRef: ViewContainerRef) {
        this._viewContainerRef = viewContainerRef;   
    }

    public set(compRef: ComponentRef<SpinnerComponent>) {
        this.spinnerComp = compRef;
    }

    public start(viewContainerRef: ViewContainerRef) {           
        let spinnerRef: any;

        const factory = this.resolver.resolveComponentFactory(SpinnerComponent);

        if (viewContainerRef) {
            spinnerRef = viewContainerRef.createComponent(factory);
            //spinnerRef = this.componentLoader.loadNextToLocation(SpinnerComponent, viewContainerRef);
        }
        else {
            spinnerRef = this._viewContainerRef.createComponent(factory);
            //spinnerRef = this.componentLoader.loadNextToLocation(SpinnerComponent, this._viewContainerRef);
        }

        return spinnerRef;
    }

    public stop() {
        if (this.spinnerComp) {
            this.spinnerComp.destroy();
        }
    }
}