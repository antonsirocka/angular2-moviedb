import {Injectable, DynamicComponentLoader, ElementRef, ComponentRef, ViewContainerRef} from '@angular/core';
import {SpinnerComponent} from '../components/spinner/spinner.component';

@Injectable()
export class SpinnerService {
    spinnerComp: ComponentRef<SpinnerComponent>;
    _appElementRef: ElementRef;
    _viewContainerRef: ViewContainerRef;

    constructor(private componentLoader: DynamicComponentLoader) {
    }

    public setViewcontainerRef(viewContainerRef: ViewContainerRef) {
        this._viewContainerRef = viewContainerRef;   
    }

    public set(compRef: ComponentRef<SpinnerComponent>) {
        this.spinnerComp = compRef;
    }

    public start(viewContainerRef: ViewContainerRef) {           
        let spinnerRef;

        if (viewContainerRef) {
            spinnerRef = this.componentLoader.loadNextToLocation(SpinnerComponent, viewContainerRef);
        }
        else {
            spinnerRef = this.componentLoader.loadNextToLocation(SpinnerComponent, this._viewContainerRef);
        }

        return spinnerRef;
    }

    public stop() {
        if (this.spinnerComp) {
            this.spinnerComp.destroy();
        }
    }
}