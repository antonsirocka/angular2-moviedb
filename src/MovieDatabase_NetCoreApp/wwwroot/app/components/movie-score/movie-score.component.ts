import {Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'movie-score',
    templateUrl: 'app/components/movie-score/movie-score.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MovieScoreComponent implements OnInit, OnChanges {

    upVoteWidth: string = "0%";
    downVoteWidth: string = "0%";

    @Input() upVotes: number;
    @Input() downVotes: number;
    @Output() public scoringOutput: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    upVoteThisRecord() {
        this.scoringOutput.emit('upvote');
    }

    downVoteThisRecord() {
        this.scoringOutput.emit('downvote');
    }

    recalculateVoteStatusBar() {

        let totalVotes = this.upVotes + this.downVotes;

        if (this.upVotes > 0) {
            this.upVoteWidth = ((this.upVotes / totalVotes) * 100) + "%";
        }

        if (this.downVotes > 0) {
            this.downVoteWidth = ((this.downVotes / totalVotes) * 100) + "%";
        }
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        this.recalculateVoteStatusBar();
    }

    ngOnInit() {
    }
}