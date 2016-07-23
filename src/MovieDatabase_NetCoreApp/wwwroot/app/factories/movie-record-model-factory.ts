import {MovieRecord} from '../interfaces/movie-record';
import {MovieRecordModel} from '../models/movie-record-model';
import {Injectable} from '@angular/core';
import {MovieMockedService} from '../services/movie-mocked-service';
import {MovieService} from '../services/movie-service';
import {Inject} from '@angular/core';
import {APP_CONFIG_TOKEN} from '../app-config';
import {AppConfig} from '../interfaces/app-config';

@Injectable()
export class MovieRecordModelFactory {

    _appConfig: AppConfig;

    constructor(@Inject(APP_CONFIG_TOKEN) config: AppConfig) {
        this._appConfig = config;
    }

    create(movieRecord: MovieRecord) {

        return new MovieRecordModel(movieRecord);
    }

    createNew() {
        var movieRecord: MovieRecord = {
            id: this._appConfig.emptyGuid,
            title: '',
            year_released: '',
            rating: '',
            imdbUrl: '',
            coverUrl: '',
            description: '',
            watched: false,
            priority: 0,
            votes: []
        };        

        return this.create(movieRecord);
    }
}