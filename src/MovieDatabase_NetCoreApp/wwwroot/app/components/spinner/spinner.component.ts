import {Component} from '@angular/core';

@Component({
    selector: 'spinner',
    templateUrl: 'app/components/spinner/spinner.component.html'
})
export class SpinnerComponent {
    state = {
        message: 'Please wait...'
    };
}