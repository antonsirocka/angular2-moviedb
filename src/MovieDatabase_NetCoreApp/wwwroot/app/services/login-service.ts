import {Injectable, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AppConfig} from '../interfaces/app-config';
import {APP_CONFIG_TOKEN} from '../app-config';

export class LoginService {

    appConfig: AppConfig;

    constructor(
        public _http: Http,
        @Inject(APP_CONFIG_TOKEN) config: AppConfig) {
        this.appConfig = config;
    }

    login(username: string, password: string) {
        var jsonObject = {
            Username: username,
            Password: password
        };

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(
            this.appConfig.loginUrl,
            JSON.stringify(jsonObject), {
                headers: headers
            }).map(res => {
                return res.json();
            });
    }

    logout() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(
            this.appConfig.logoutUrl,
            null, {
                headers: headers
            }).map(res => {
                return true;
            });        
    }

    register(username: string, password: string, secretkey: string) {

        var jsonObject = {
            Username: username,
            Password: password,
            SecretKey: secretkey
        };

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(
            this.appConfig.registerUrl,
            JSON.stringify(jsonObject), {
                headers: headers
            }).map(res => {
                return res.json();
            });   
    }

    getLoggedInUsername() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.get(this.appConfig.GetLoggedInUserUrl)
            .map(res => {
                return res.json();
            });
        
    }
}
