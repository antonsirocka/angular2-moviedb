import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/main.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { Modal } from './components/ng2-modal/modal';
import { Alert } from './components/ng2-modal/alert';
import { Login } from './components/login/login';
import { Register } from './components/register/register.component';
import { Open } from './components/ng2-modal/open.component';
import { MovieRatingSelector } from './components/movie-rating/movie-rating-selector';
import { YearReleasedValidator } from './validators/year-released-validator';
import { ErrorNotification } from './components/error-notification/error-notification.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';
import { MovieScoreComponent } from './components/movie-score/movie-score.component';

import { MovieMockedService } from './services/movie-mocked-service';
import { MovieService } from './services/movie-service';
import { LoginService } from './services/login-service';
import { SpinnerService } from './services/spinner-service';
import { MovieRecordModelFactory } from './factories/movie-record-model-factory';

import { MovieDatabaseConfig } from './app-config';
import { AppConfig } from './interfaces/app-config';
import { APP_CONFIG_TOKEN } from './app-config';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [MainComponent, ErrorNotification, MovieListComponent, Modal, Alert, Login, Register, Open, MovieRatingSelector, YearReleasedValidator, SpinnerComponent, MovieScoreComponent, MovieDisplayComponent, MovieFormComponent],
    entryComponents: [SpinnerComponent, Login, Register, Alert, MovieDisplayComponent, MovieFormComponent],
    bootstrap: [MainComponent],
    providers: [
        { provide: MovieService, useClass: MovieService },
        { provide: APP_CONFIG_TOKEN, useValue: MovieDatabaseConfig },
        { provide: SpinnerService, useClass: SpinnerService },
        { provide: MovieRecordModelFactory, useClass: MovieRecordModelFactory },
        { provide: LoginService, useClass: LoginService }
    ],
    
})

export class AppModule { }
