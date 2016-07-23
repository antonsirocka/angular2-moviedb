import { Component, ViewChild, OnInit } from '@angular/core';

import {MovieMockedService} from '../services/movie-mocked-service';
import {MovieService} from '../services/movie-service';
import {LoginService} from '../services/login-service';
import {SpinnerService} from '../services/spinner-service';
import {MovieRecordModelFactory} from '../factories/movie-record-model-factory';
import {MovieListComponent} from '../components/movie-list/movie-list.component';

import {MovieDatabaseConfig} from '../app-config';
import {AppConfig} from '../interfaces/app-config';
import {APP_CONFIG_TOKEN} from '../app-config';

import {Modal} from '../components/ng2-modal/modal';
import {Alert} from '../components/ng2-modal/alert';
import {Login} from '../components/login/login';
import {Register} from '../components/register/register.component';

@Component({
    selector: 'main-component',
    templateUrl: 'app/components/main.component.html',
    providers: [
        { provide: MovieService, useClass: MovieService },
        { provide: APP_CONFIG_TOKEN, useValue: MovieDatabaseConfig },
        { provide: SpinnerService, useClass: SpinnerService },
        { provide: MovieRecordModelFactory, useClass: MovieRecordModelFactory },
        { provide: LoginService, useClass: LoginService }
    ],
    directives: [MovieListComponent, Modal, Alert]
})

export class MainComponent implements OnInit {    

    loggedInUsername: string = null;

    @ViewChild(Alert) alert;
    @ViewChild(Modal) modal;
    constructor(private _loginService: LoginService) {        
    }

    getModalOutputData(data) {
        if (data) {
            if (data.username) {
                this.loggedInUsername = data.username;        
            }
            else if (data.userName) {
                this.loggedInUsername = data.userName;        
            }
        }
    }

    confirmAlertClose(data) {
    }

    openLoginDialog() {
        this.modal.modalTitle = "Login";
        this.modal.modalFooter = false;
        this.modal.open(Login);
    }

    logout() {
        this._loginService.logout()
            .subscribe(
            data => {
                localStorage.removeItem('userId');
                this.loggedInUsername = null;
            },
            err => {
            });
    }

    register() {
        this.modal.modalTitle = "Register";
        this.modal.modalFooter = false;
        this.modal.open(Register);        
    }

    ngOnInit() {
        this._loginService.getLoggedInUsername()
            .subscribe(
            data => {
                localStorage.setItem('userId', data.id);
                this.loggedInUsername = data.userName;
            },
            err => {
            });
    }
}