import { Component, Input } from '@angular/core';

@Component({
    selector: 'error-notification',
    template: `
        <div [hidden]="!errorMessage" class="alert-danger">
            <p>
                An error has occurred.<br />
                {{ errorMessage }}
            </p>
        </div>        
    `
})

export class ErrorNotification {
    @Input() errorMessage: string;

    constructor() {
    }
}
