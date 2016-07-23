import {Component} from '@angular/core';
import {MovieRecord} from '../interfaces/movie-record';
import {MovieService} from '../services/movie-service';

export class MovieRecordModel {
    _movieRecord: MovieRecord;

    constructor(movieRecord: MovieRecord) {
        this._movieRecord = movieRecord;
    }

    save(movieService: MovieService) {
        return movieService.saveMovieRecord(this._movieRecord);
    }

    delete(movieService: MovieService) {
        return movieService.deleteMovieRecord(this._movieRecord);
    }
}