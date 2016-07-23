using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MovieDatabase_NetCoreApp.Models;

namespace MovieDatabase_NetCoreApp.Repositories
{
    /// <summary>
    /// Interface for movie rating repository
    /// </summary>
    /// <seealso cref="System.IDisposable" />
    public interface IMovieRatingRepository : IDisposable
    {
        /// <summary>
        /// Gets all movie ratings asynchronous.
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<MovieRating>> GetAllMovieRatingsAsync();

        /// <summary>
        /// Saves the asynchronous.
        /// </summary>
        /// <returns></returns>
        Task SaveAsync();
    }
}
