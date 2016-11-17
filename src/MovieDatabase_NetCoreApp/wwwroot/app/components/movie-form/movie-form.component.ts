import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
//import { NgForm }    from '@angular/common';
import { MovieRecord } from '../../interfaces/movie-record';
import { MovieService } from '../../services/movie-service';
import { MovieRecordModelFactory } from '../../factories/movie-record-model-factory';
import { MovieRatingSelector } from '../movie-rating/movie-rating-selector';
import { Modal } from '../ng2-modal/modal';
import { YearReleasedValidator } from '../../validators/year-released-validator';
import { ErrorNotification } from '../error-notification/error-notification.component';
import { AppConfig } from '../../interfaces/app-config';
import { APP_CONFIG_TOKEN } from '../../app-config';

@Component({
    selector: 'movie-form',
    templateUrl: 'app/components/movie-form/movie-form.component.html'
})

export class MovieFormComponent implements OnInit, AfterViewInit {

    appConfig: AppConfig;
    submitted: boolean = false;
    isnew: boolean = false;
    movieRecord: MovieRecord;
    errorMessage: string;

    constructor(
        private _movieService: MovieService,
        private _movieRecordModelFactory: MovieRecordModelFactory,
        private _modal: Modal,
        @Inject(APP_CONFIG_TOKEN) config: AppConfig)
    {
        this.appConfig = config;
    }  

    close() {
        this._modal.close();
    }

    onSubmit() {
        this.submitted = true;

        this._movieService
            .saveMovieRecord(this.movieRecord)
            .subscribe(
            (data: MovieRecord) => {
                this.movieRecord = data;
                this.close();
                this.submitted = false;
                this._modal.modalOutput.emit("ReloadMovieList");
            },
            err => {
                this.submitted = false;
                this.displayError(err);                
            },
            () => {
            });
    }

    displayError(err : any) {
        if (err._body) {
            this.errorMessage = err._body;
        }
        else if (err.message) {                        
            this.errorMessage = err.message;
        }
    }

    ngOnInit() {
        if (this._modal.modalContentObject) {
            this.movieRecord = this._modal.modalContentObject;
        }
        else {
            this.movieRecord = this._movieRecordModelFactory.createNew()._movieRecord;
        }

        this.isnew = this.movieRecord.id == this.appConfig.emptyGuid;
    }

    ngAfterViewInit() {
    }
}
