import {Component, ViewChild} from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {Modal} from '../ng2-modal/modal';
import {SpinnerService} from '../../services/spinner-service';
import {LoginService} from '../../services/login-service';
import { ErrorNotification } from '../error-notification/error-notification.component';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.html',
  styleUrls: ['app/components/login/login.css']
})

export class Login {

    errorMessage: string;

    constructor(
        private _modal: Modal,
        private _loginService: LoginService,
        private _spinner: SpinnerService)
    {
    }

    login(username: string, password: string) {

        this._loginService.login(username, password)
            .subscribe(
            data => {
                localStorage.setItem('userId', data.userId);
                this._modal.close(data);
            },
            err => {                
                this.displayError(err);                
            });
    }

    displayError(err: any) {
        if (err._body) {
            this.errorMessage = err._body;
        }
        else if (err.message) {
            this.errorMessage = err.message;
        }
    }
}
