using MovieDatabase_NetCoreApp.Models;
using Microsoft.EntityFrameworkCore;

namespace MovieDatabase_NetCoreApp.Repositories
{
    /// <summary>
    /// Movie database context class
    /// </summary>
    /// <seealso cref="System.Data.Entity.DbContext" />
    public class MovieContext : DbContext, IMovieContext
    {
        public MovieContext(DbContextOptions<MovieContext> options)
            : base(options)
        {
        }

        /// <summary>
        /// Gets or sets the movie records.
        /// </summary>
        /// <value>
        /// The movie records.
        /// </value>
        public DbSet<MovieRecord> MovieRecords { get; set; }

        /// <summary>
        /// Gets or sets the movie ratings.
        /// </summary>
        /// <value>
        /// The movie ratings.
        /// </value>
        public DbSet<MovieRating> MovieRatings { get; set; }

        /// <summary>
        /// Gets or sets the movie votes.
        /// </summary>
        public DbSet<MovieVote> MovieVotes { get; set; }

        /// <summary>
        /// Changes the state of the movie record.
        /// </summary>
        /// <param name="movieRecord">The movie record.</param>
        /// <param name="entityState">State of the entity.</param>
        public void ChangeMovieRecordState(MovieRecord movieRecord, EntityState entityState)
        {
            Entry(movieRecord).State = entityState;
        }

        /// <summary>
        /// Changes the state of the movie rating.
        /// </summary>
        /// <param name="movieRating">The movie rating.</param>
        /// <param name="entityState">State of the entity.</param>
        public void ChangeMovieRatingState(MovieRating movieRating, EntityState entityState)
        {
            Entry(movieRating).State = entityState;
        }
    }
}
