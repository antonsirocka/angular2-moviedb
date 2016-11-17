import {Injectable, Inject} from '@angular/core';
import {MovieRecord} from '../interfaces/movie-record';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AppConfig} from '../interfaces/app-config';
import {APP_CONFIG_TOKEN} from '../app-config';

@Injectable()
export class MovieService {

    appConfig: AppConfig;

    constructor(
        public _http: Http,
        @Inject(APP_CONFIG_TOKEN) config: AppConfig)
    {
        this.appConfig = config;
    }

    getMovieRecords() {
        return this._http
            .get(this.appConfig.movieListUrl)
            .map(res => {
                return res.json();
            })
            .map((movies: Array<any>) => {
                let result: Array<MovieRecord> = [];
                if (movies) {
                    movies.forEach(movie => {
                        var movieRecord: MovieRecord = {
                            id: movie.id,
                            title: movie.title,
                            year_released: movie.yearReleased,
                            rating: movie.rating.name,
                            imdbUrl: movie.imdbUrl,
                            coverUrl: movie.coverUrl,
                            description: movie.description,
                            watched: movie.watched,
                            priority: movie.priority,
                            votes: movie.votes
                        };

                        result.push(movieRecord);
                    });
                }

                return result;
            });
    }

    getMovieRatings() {
        return this._http
            .get(this.appConfig.movieRatingsUrl)
            .map(res => {
                return res.json();
            })
            .map((res: Array<any>) => {
                let result: Array<any> = [];
                if (res) {
                    res.forEach(rating => {
                        var movieRating = {
                            id: rating.id,
                            name: rating.name,
                            description: rating.description
                        };

                        result.push(movieRating);
                    });
                }

                return result;
            });
    }

    saveMovieRecord(movieRecord: MovieRecord) {
        var jsonObject = {
            "Id": movieRecord.id,
            "Title": movieRecord.title,
            "YearReleased": movieRecord.year_released,
            "Description": movieRecord.description,
            "ImdbUrl": movieRecord.imdbUrl,
            "CoverUrl": movieRecord.coverUrl,
            'Rating': {}
        };        

        if (movieRecord.rating) {
            jsonObject.Rating = { name: movieRecord.rating };
        }

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if (movieRecord.id === this.appConfig.emptyGuid) {
            return this._http.post(
                this.appConfig.addMovieRecordUrl,
                JSON.stringify(jsonObject), {
                    headers: headers
                }).map(res => {
                    return res.json();
                });
        }
        else {
            return this._http.put(
                this.appConfig.updateMovieRecordUrl,
                JSON.stringify(jsonObject), {
                    headers: headers
                }).map(res => {
                    return res.json();
                })
        }
    }

    markAsWatched(movieRecordId: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.put(
            this.appConfig.markAsWatchedUrl + '?movieRecordId=' + movieRecordId, null, {
                headers: headers
            }).map(res => {
                return true;
            })
    }

    markAsUnwatched(movieRecordId: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.put(
            this.appConfig.markAsUnwatchedUrl + '?movieRecordId=' + movieRecordId, null, {
                headers: headers
            }).map(res => {
                return true;
            })
    }

    upvoteMovie(movieRecordId: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(
            this.appConfig.upvoteMovieUrl + '?movieRecordId=' + movieRecordId, null, {
                headers: headers
            }).map(res => {
                return res.json();
            })
    }

    downvoteMovie(movieRecordId : any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(
            this.appConfig.downvoteMovieUrl + '?movieRecordId=' + movieRecordId, null, {
                headers: headers
            }).map(res => {
                return res.json();
            })
    }

    deleteMovieRecord(movieRecord: MovieRecord) {
        return this._http.delete(this.appConfig.deleteMovieRecordUrl + '?movieRecordId=' + movieRecord.id).map(res => {
            return true;
        });
    }
}