"use strict";
var MovieRecordModel = (function () {
    function MovieRecordModel(movieRecord) {
        this._movieRecord = movieRecord;
    }
    MovieRecordModel.prototype.save = function (movieService) {
        return movieService.saveMovieRecord(this._movieRecord);
    };
    MovieRecordModel.prototype.delete = function (movieService) {
        return movieService.deleteMovieRecord(this._movieRecord);
    };
    return MovieRecordModel;
}());
exports.MovieRecordModel = MovieRecordModel;
//# sourceMappingURL=movie-record-model.js.map