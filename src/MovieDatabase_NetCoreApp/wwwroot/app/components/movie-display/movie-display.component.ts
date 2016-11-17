import { Component, OnInit, Inject } from '@angular/core';
import { MovieRecord } from '../../interfaces/movie-record';
import { MovieVote } from '../../interfaces/movie-vote';
import { MovieService } from '../../services/movie-service';
import { Modal } from '../ng2-modal/modal';
import {AppConfig} from '../../interfaces/app-config';
import {APP_CONFIG_TOKEN} from '../../app-config';
import {MovieScoreComponent} from '../movie-score/movie-score.component';
import { ErrorNotification } from '../error-notification/error-notification.component';

@Component({
    selector: 'movie-record-display',
    templateUrl: 'app/components/movie-display/movie-display.component.html'
})

export class MovieDisplayComponent implements OnInit {

    movieRecord: MovieRecord;
    upVoteCount: number = 0;
    downVoteCount: number = 0;
    errorMessage: string;

    constructor(
        private _movieService: MovieService,
        private _modal: Modal,
        @Inject(APP_CONFIG_TOKEN) config: AppConfig)
    {
    }

    markAsWatched() {
        this._movieService
            .markAsWatched(this.movieRecord.id)
            .subscribe(
            (data) => {
                this._modal.close();
                this._modal.modalOutput.emit("ReloadMovieList");
            },
            err => {
                this.displayError(err);
            },
            () => {
            });
    }

    markAsUnwatched() {
        this._movieService
            .markAsUnwatched(this.movieRecord.id)
            .subscribe(
            (data) => {
                this._modal.close();
                this._modal.modalOutput.emit("ReloadMovieList");
            },
            err => {
                this.displayError(err);
            },
            () => {
            });
    }

    processVote(vote: string) {
        if (vote == "upvote") {
            this._movieService
                .upvoteMovie(this.movieRecord.id)
                .subscribe(
                (data: MovieVote) => {
                    this.upVoteCount++;
                    this.movieRecord.votes.push(data);
                },
                err => {
                },
                () => {
                });
        }
        else if (vote == "downvote") {
            this._movieService
                .downvoteMovie(this.movieRecord.id)
                .subscribe(
                (data: MovieVote) => {
                    this.downVoteCount++;
                    this.movieRecord.votes.push(data);
                },
                err => {
                    this.displayError(err);
                },
                () => {
                });            
        }
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

            this.downVoteCount = this.movieRecord.votes.filter(function (x) {
                return x.isDownvote === true;
            }).length;

            this.upVoteCount = this.movieRecord.votes.filter(function (x) {
                return x.isUpvote === true;
            }).length;
        }
    }
}