import {Component, Output, Input, EventEmitter} from '@angular/core';
import {MovieService} from '../../services/movie-service';

@Component({
    selector: 'movie-rating-selector',
    template: `
        <select #sel (change)="select.emit(sel.value)">
            <option *ngFor="let rating of ratings" [selected]="rating.selected == true">{{rating.name}}</option>
        </select>`
})

export class MovieRatingSelector {
    @Input() selectedValue: string;
    @Output() select = new EventEmitter();
    ratings: Array<any> = [];

    constructor(private _movieService: MovieService) {
    }

    emitValue() {

        let selectedRating = this.ratings.find(f => f.selected == true);

        if (selectedRating) {
            this.select.emit(selectedRating.name);
        }
        else if (this.ratings.length > 0) {
            this.select.emit(this.ratings[0].name);
        }
    }

    ngOnInit() {

        let self = this;
        if (!this.ratings || this.ratings.length == 0) {
            this._movieService
                .getMovieRatings()
                .subscribe(data => {
                    data.forEach(rating => this.ratings.push({
                        name: rating.name,
                        selected: rating.name == this.selectedValue
                    }));

                    self.emitValue();
                });

        }
        else {
            self.emitValue();
        }
    }
}