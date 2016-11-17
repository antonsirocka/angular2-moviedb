import {Injectable} from '@angular/core';
import {MovieRecord} from '../interfaces/movie-record';
import {Observable} from 'rxjs/Observable';
import {MovieService} from '../services/movie-service';

@Injectable()
export class MovieMockedService extends MovieService {

    getMovieRecords() {
        var MOVIERECORDS: MovieRecord[] = [
            { "id": '1', "title": "Revenant", 'year_released': '2016', 'rating': 'R', 'imdbUrl': '', 'coverUrl': '', 'description': 'some description', 'watched': false, 'priority': 0, 'votes': [] },
            { "id": '2', "title": "Spotlight", 'year_released': '2016', 'rating': 'R', 'imdbUrl': '', 'coverUrl': '', 'description': 'some description', 'watched': false, 'priority': 0, 'votes': [] }
        ];

        var result = Observable.create((observer: any) => {
            observer.next(MOVIERECORDS);
            observer.complete();
        });

        return result;
    }

    getMovieRatings() {
        var MOVIERATINGS = [
            { "Name": "G" },
            { "Name": "PG" },
            { "Name": "M" },
            { "Name": "MA" },
            { "Name": "R" }
        ];

        return Observable.create((observer: any) => {
            observer.next(MOVIERATINGS);
            observer.complete();
        });
    }

    saveMovieRecord(movieRecord: MovieRecord) {

        let savedMovieRecord = movieRecord;

        return Observable.create((observer: any) => {
            observer.next(savedMovieRecord);
            observer.complete();
        });
    }

    deleteMovieRecord(movieRecord: MovieRecord) {
        return Observable.create((observer: any) => {
            observer.complete();
        });
    }

    markAsWatched(movieRecordId: any) {
        return Observable.create((observer: any) => {
            observer.complete();
        });
    }

    markAsUnwatched(movieRecordId: any) {
        return Observable.create((observer: any) => {
            observer.complete();
        });
    }

    upvoteMovie(movieRecordId: any) {
        return Observable.create((observer: any) => {
            observer.complete();
        });
    }

    downvoteMovie(movieRecordId: any) {
        return Observable.create((observer: any) => {
            observer.complete();
        });
    }
}