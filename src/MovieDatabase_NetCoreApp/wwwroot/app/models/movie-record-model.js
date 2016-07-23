System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MovieRecordModel;
    return {
        setters:[],
        execute: function() {
            MovieRecordModel = (function () {
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
            exports_1("MovieRecordModel", MovieRecordModel);
        }
    }
});
//# sourceMappingURL=movie-record-model.js.map