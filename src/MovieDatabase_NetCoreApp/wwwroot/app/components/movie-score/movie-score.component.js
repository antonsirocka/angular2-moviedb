System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MovieScoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieScoreComponent = (function () {
                function MovieScoreComponent() {
                    this.upVoteWidth = "0%";
                    this.downVoteWidth = "0%";
                    this.scoringOutput = new core_1.EventEmitter();
                }
                MovieScoreComponent.prototype.upVoteThisRecord = function () {
                    this.scoringOutput.emit('upvote');
                };
                MovieScoreComponent.prototype.downVoteThisRecord = function () {
                    this.scoringOutput.emit('downvote');
                };
                MovieScoreComponent.prototype.recalculateVoteStatusBar = function () {
                    var totalVotes = this.upVotes + this.downVotes;
                    if (this.upVotes > 0) {
                        this.upVoteWidth = ((this.upVotes / totalVotes) * 100) + "%";
                    }
                    if (this.downVotes > 0) {
                        this.downVoteWidth = ((this.downVotes / totalVotes) * 100) + "%";
                    }
                };
                MovieScoreComponent.prototype.ngOnChanges = function (changes) {
                    this.recalculateVoteStatusBar();
                };
                MovieScoreComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MovieScoreComponent.prototype, "upVotes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MovieScoreComponent.prototype, "downVotes", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MovieScoreComponent.prototype, "scoringOutput", void 0);
                MovieScoreComponent = __decorate([
                    core_1.Component({
                        selector: 'movie-score',
                        templateUrl: 'app/components/movie-score/movie-score.component.html',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieScoreComponent);
                return MovieScoreComponent;
            }());
            exports_1("MovieScoreComponent", MovieScoreComponent);
        }
    }
});
//# sourceMappingURL=movie-score.component.js.map