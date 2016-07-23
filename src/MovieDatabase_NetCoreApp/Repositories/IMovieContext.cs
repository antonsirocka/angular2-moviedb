using MovieDatabase_NetCoreApp.Models;
using Microsoft.EntityFrameworkCore;

namespace MovieDatabase_NetCoreApp.Repositories
{
    public interface IMovieContext
    {
        /// <summary>
        /// Gets or sets the movie ratings.
        /// </summary>
        /// <value>
        /// The movie ratings.
        /// </value>
        DbSet<MovieRating> MovieRatings { get; set; }

        /// <summary>
        /// Gets or sets the movie records.
        /// </summary>
        /// <value>
        /// The movie records.
        /// </value>
        DbSet<MovieRecord> MovieRecords { get; set; }

        /// <summary>
        /// Gets or sets the movie votes.
        /// </summary>
        DbSet<MovieVote> MovieVotes { get; set; }

        /// <summary>
        /// Saves the changes.
        /// </summary>
        /// <returns></returns>
        int SaveChanges();

        /////// <summary>
        /////// Saves the changes asynchronous.
        /////// </summary>
        /////// <returns></returns>
        ////Task<int> SaveChangesAsync();

        /// <summary>
        /// Releases unmanaged and - optionally - managed resources.
        /// </summary>
        void Dispose();

        /// <summary>
        /// Changes the state of the movie record.
        /// </summary>
        /// <param name="movieRecord">The movie record.</param>
        /// <param name="entityState">State of the entity.</param>
        void ChangeMovieRecordState(MovieRecord movieRecord, EntityState entityState);

        /// <summary>
        /// Changes the state of the movie rating.
        /// </summary>
        /// <param name="movieRating">The movie rating.</param>
        /// <param name="entityState">State of the entity.</param>
        void ChangeMovieRatingState(MovieRating movieRating, EntityState entityState);
    }
}
