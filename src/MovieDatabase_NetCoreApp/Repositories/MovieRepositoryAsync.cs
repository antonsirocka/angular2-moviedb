using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieDatabase_NetCoreApp.Models;
using Microsoft.EntityFrameworkCore;

namespace MovieDatabase_NetCoreApp.Repositories
{
    /// <summary>
    /// Async implementation for the movie repository
    /// </summary>
    /// <seealso cref="TechnicalTask.DataAccess.IMovieRepositoryAsync" />
    /// <seealso cref="System.IDisposable" />
    public class MovieRepositoryAsync : IMovieRepositoryAsync, IDisposable
    {
        /// <summary>
        /// The disposed
        /// </summary>
        private bool disposed = false;

        /// <summary>
        /// The _movie context
        /// </summary>
        private IMovieContext _movieContext;

        /// <summary>
        /// Initializes a new instance of the <see cref="MovieRepositoryAsync"/> class.
        /// </summary>
        /// <param name="movieContext">The movie context.</param>
        public MovieRepositoryAsync(IMovieContext movieContext)
        {
            _movieContext = movieContext;
        }

        /// <summary>
        /// Gets all movie records.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<MovieRecord> GetAllMovieRecords()
        {
            return this._movieContext.MovieRecords.Include(b => b.Rating).OrderByDescending(m => m.CreatedDate).ToList();
        }

        /// <summary>
        /// Gets all movie records with ratings asynchronous.
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<MovieRecord>> GetAllMovieRecordsWithRatingsAsync()
        {
            return await this._movieContext.MovieRecords.Include(b => b.Rating).OrderByDescending(m => m.CreatedDate).ToListAsync();
        }

        /// <summary>
        /// Gets all movie records with ratings and votes asynchronous.
        /// </summary>
        /// <param name="loggedInUserId">The logged in user Id.</param>
        /// <returns></returns>
        public async Task<IEnumerable<MovieRecord>> GetAllMovieRecordsWithRatingsAndVotesAsync(Guid? loggedInUserId)
        {
            if (loggedInUserId.HasValue)
            {
                return await this._movieContext.MovieRecords.Where(mr => mr.AssociatedWithUserId == loggedInUserId.Value).Include(b => b.Rating).Include(b => b.Votes).OrderByDescending(m => m.CreatedDate).ToListAsync();
            }
            else
            {
                return await this._movieContext.MovieRecords.Include(b => b.Rating).Include(b => b.Votes).OrderByDescending(m => m.CreatedDate).ToListAsync();
            }

        }

        /// <summary>
        /// Gets the movie record asynchronous.
        /// </summary>
        /// <param name="movieRecordId">The movie record identifier.</param>
        /// <returns></returns>
        public async Task<MovieRecord> GetMovieRecordAsync(Guid movieRecordId)
        {
            return await this._movieContext.MovieRecords.FirstAsync(m => m.Id == movieRecordId);
        }

        /// <summary>
        /// Inserts the movie record.
        /// </summary>
        /// <param name="movieRecord">The movie record.</param>
        public void InsertMovieRecord(MovieRecord movieRecord)
        {
            this._movieContext.ChangeMovieRatingState(movieRecord.Rating, EntityState.Unchanged);
            this._movieContext.MovieRecords.Add(movieRecord);
        }

        /// <summary>
        /// Deletes the movie record.
        /// </summary>
        /// <param name="movieRecordId">The movie record identifier.</param>
        public void DeleteMovieRecord(Guid movieRecordId)
        {
            MovieRecord movieRecord = this._movieContext.MovieRecords.FirstAsync(m => m.Id == movieRecordId).Result;

            var votes = this._movieContext.MovieVotes.Where(f => f.MovieRecordId == movieRecordId).ToList();

            this._movieContext.MovieVotes.RemoveRange(votes);
            this._movieContext.MovieRecords.Remove(movieRecord);
        }

        /// <summary>
        /// Updates the movie record asynchronous.
        /// </summary>
        /// <param name="movieRecord">The movie record.</param>
        /// <returns></returns>
        public async Task UpdateMovieRecordAsync(MovieRecord movieRecord)
        {
            var originalEntry = await this.GetMovieRecordAsync(movieRecord.Id);

            originalEntry.Title = movieRecord.Title;
            originalEntry.YearReleased = movieRecord.YearReleased;
            originalEntry.Rating = movieRecord.Rating;
            originalEntry.CoverUrl = movieRecord.CoverUrl;
            originalEntry.ImdbUrl = movieRecord.ImdbUrl;
            originalEntry.Priority = movieRecord.Priority;
            originalEntry.Description = movieRecord.Description;

            this._movieContext.ChangeMovieRecordState(originalEntry, EntityState.Modified);
            this._movieContext.ChangeMovieRatingState(originalEntry.Rating, EntityState.Unchanged);
        }

        /// <summary>
        /// Updates the specified record's watched flag to true
        /// </summary>
        /// <param name="movieRecordId"></param>
        /// <returns></returns>
        public async Task MarkAsWatched(Guid movieRecordId)
        {
            var originalEntry = await this.GetMovieRecordAsync(movieRecordId);

            originalEntry.Watched = true;
            this._movieContext.ChangeMovieRecordState(originalEntry, EntityState.Modified);
        }

        /// <summary>
        /// Updates the specified record's watched flag to false
        /// </summary>
        /// <param name="movieRecordId"></param>
        /// <returns></returns>
        public async Task MarkAsUnwatched(Guid movieRecordId)
        {
            var originalEntry = await this.GetMovieRecordAsync(movieRecordId);

            originalEntry.Watched = false;
            this._movieContext.ChangeMovieRecordState(originalEntry, EntityState.Modified);
        }

        /// <summary>
        /// Saves this instance.
        /// </summary>
        public void Save()
        {
            this._movieContext.SaveChanges();
        }

        /// <summary>
        /// Saves the asynchronous.
        /// </summary>
        /// <returns></returns>
        public async Task SaveAsync()
        {
            await Task.FromResult(this._movieContext.SaveChanges());
        }

        /// <summary>
        /// Releases unmanaged and - optionally - managed resources.
        /// </summary>
        /// <param name="disposing"><c>true</c> to release both managed and unmanaged resources; <c>false</c> to release only unmanaged resources.</param>
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _movieContext.Dispose();
                }
            }
            this.disposed = true;
        }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
