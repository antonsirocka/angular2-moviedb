using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MovieDatabase_NetCoreApp.Models;

namespace MovieDatabase_NetCoreApp.Repositories
{
    /// <summary>
    /// Interface for movie repository
    /// </summary>
    /// <seealso cref="System.IDisposable" />
    public interface IMovieRepositoryAsync : IDisposable
    {
        /// <summary>
        /// Gets all movie records.
        /// </summary>
        /// <returns></returns>
        IEnumerable<MovieRecord> GetAllMovieRecords();

        /// <summary>
        /// Gets all movie records with ratings asynchronous.
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<MovieRecord>> GetAllMovieRecordsWithRatingsAsync();

        /// <summary>
        /// Gets all movie records with ratings and votes asynchronous.
        /// </summary>
        /// <param name="loggedInUserId">The logged in user Id.</param>
        /// <returns></returns>
        Task<IEnumerable<MovieRecord>> GetAllMovieRecordsWithRatingsAndVotesAsync(Guid? loggedInUserId);

        /// <summary>
        /// Gets the movie record asynchronous.
        /// </summary>
        /// <param name="movieRecordId">The movie record identifier.</param>
        /// <returns></returns>
        Task<MovieRecord> GetMovieRecordAsync(Guid movieRecordId);

        /// <summary>
        /// Inserts the movie record.
        /// </summary>
        /// <param name="movieRecord">The movie record.</param>
        void InsertMovieRecord(MovieRecord movieRecord);

        /// <summary>
        /// Deletes the movie record.
        /// </summary>
        /// <param name="movieRecordId">The movie record identifier.</param>
        void DeleteMovieRecord(Guid movieRecordId);

        /// <summary>
        /// Updates the movie record asynchronous.
        /// </summary>
        /// <param name="movieRecord">The movie record.</param>
        /// <returns></returns>
        Task UpdateMovieRecordAsync(MovieRecord movieRecord);

        /// <summary>
        /// Updates the specified record's watched flag to true
        /// </summary>
        /// <param name="movieRecordId"></param>
        /// <returns></returns>
       Task MarkAsWatched(Guid movieRecordId);

        /// <summary>
        /// Updates the specified record's watched flag to false
        /// </summary>
        /// <param name="movieRecordId"></param>
        /// <returns></returns>
        Task MarkAsUnwatched(Guid movieRecordId);

        /// <summary>
        /// Saves this instance.
        /// </summary>
        void Save();

        /// <summary>
        /// Saves the asynchronous.
        /// </summary>
        /// <returns></returns>
        Task SaveAsync();
    }
}
