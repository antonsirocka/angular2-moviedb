import {Component, Input, OnChanges, SimpleChange, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, ViewChild, ViewContainerRef, OpaqueToken, Inject} from '@angular/core';

import {MovieRecord} from '../../interfaces/movie-record';
import {MovieRecordModel} from '../../models/movie-record-model';

import {MovieMockedService} from '../../services/movie-mocked-service';
import {MovieService} from '../../services/movie-service';
import {SpinnerService} from '../../services/spinner-service';
import {MovieRecordModelFactory} from '../../factories/movie-record-model-factory';

import {MovieFormComponent} from '../movie-form/movie-form.component';
import {MovieDisplayComponent} from '../movie-display/movie-display.component';
import {MovieRatingSelector} from '../movie-rating/movie-rating-selector';
import {Modal} from '../ng2-modal/modal';
import {Alert} from '../ng2-modal/alert';

import {AppConfig} from '../../interfaces/app-config';
import {APP_CONFIG_TOKEN} from '../../app-config';

@Component({
    selector: 'movie-list',
    templateUrl: 'app/components/movie-list/movie-list.component.html'
})

export class MovieListComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, OnChanges {
    movieRecords: Array<MovieRecord> = [];
    appConfig: AppConfig;
    initialLoadCompleted: boolean;
    @ViewChild(Alert) alert : any;
    @ViewChild(Modal) modal : any;
    @Input() loggedInUsername: string;
    constructor(
        private _movieService: MovieService,
        private _spinner: SpinnerService,
        private viewContainerRef: ViewContainerRef,
        private _movieRecordModelFactory: MovieRecordModelFactory,
        @Inject(APP_CONFIG_TOKEN) config: AppConfig)
    {
        this.appConfig = config;
    }

    getModalOutputData(data : any) {
        if (data == "ReloadMovieList") {
            this.getMovieRecords();
        }
    }

    confirmAlertClose(data : any) {
    }

    getMovieRecords(initialLoad: boolean = false) {
        this.movieRecords = [];

        //this._spinner.start(this.viewContainerRef).then((spinnerCompRef: any) => {
            //this._spinner.set(spinnerCompRef);

            this._movieService
                .getMovieRecords()
                .subscribe(
                data => {
                    data.forEach(record => {
                        this.movieRecords.push(record);
                    });

                    if (initialLoad) {
                        this.initialLoadCompleted = true;
                    }
                },
                err => {
                    this.displayError(err);
                    //this._spinner.stop();
                },
                () => {
                    //this._spinner.stop();
                });
        //});
    }

    reloadList() {
        this.getMovieRecords();
    }

    showMovieRecord(movieRecord: MovieRecord) {
        this.modal.modalTitle = movieRecord.title;
        this.modal.modalFooter = false;
        this.modal.open(MovieDisplayComponent, movieRecord);        
    }

    editRecord(movieRecord: MovieRecord) {
        this.modal.modalTitle = "Edit movie record";
        this.modal.modalFooter = false;
        this.modal.open(MovieFormComponent, movieRecord);
    }

    deleteRecord(movieRecord: MovieRecord) {

        if (movieRecord.id !== this.appConfig.emptyGuid) {

            var movieRecordModel = this._movieRecordModelFactory.create(movieRecord);

            movieRecordModel.delete(this._movieService)
                .subscribe(
                data => {
                    this.removeFromArray(movieRecord);
                },
                err => {
                    this.displayError(err);
                },
                () => {
                });
        }
        else {
            this.removeFromArray(movieRecord);
        }
    }

    saveChanges(movieRecord: MovieRecord) {
        var movieRecordModel = this._movieRecordModelFactory.create(movieRecord);

        movieRecordModel.save(this._movieService)
            .subscribe(
            data => {
            },
            err => {
                this.displayError(err);
            },
            () => {
            });
    }

    cancelChanges(movieRecord: MovieRecord) {
        if (movieRecord.id === this.appConfig.emptyGuid) {
            this.removeFromArray(movieRecord);
        }

        this.getMovieRecords();
    }

    removeFromArray(movieRecord: MovieRecord) {
        var index = this.movieRecords.findIndex(m => m.id === movieRecord.id);
        if (index > -1) {
            this.movieRecords.splice(index, 1);
        }        
    }

    addNewEntry() {
        var newMovieRecordModel = this._movieRecordModelFactory.createNew();

        this.modal.modalTitle = "Add new movie record";
        this.modal.modalFooter = false;
        this.modal.open(MovieFormComponent, newMovieRecordModel._movieRecord);
    }

    displayError(err : any) {

        let errorMessage: string;

        if (err.headers && err.headers.toJSON() && err.headers.toJSON()['Content-Type'][0].indexOf('text/html') > -1) {
            errorMessage = "Error " + err.status + " has occurred calling URL " + err.url;
        }
        else if (err._body) {
            errorMessage = err._body;
        }
        else if (err.message) {
            errorMessage = err.message;
        }

        this.alert.alertFooter = true;
        this.alert.cancelButton = true;
        this.alert.okButton = false;
        this.alert.alertHeader = true;
        this.alert.alertTitle = "An error has occurred.";
        this.alert.message = errorMessage;
        this.alert.cancelButtonText = "Close.";
        this.alert.open();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getMovieRecords(true);    
    }

    ngAfterViewChecked() {
    }

    ngAfterContentInit() {
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        if (this.initialLoadCompleted === true) {
            this.getMovieRecords();
        }
    }
}