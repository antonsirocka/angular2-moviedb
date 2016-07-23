using System;
using System.Collections.Generic;
using MovieDatabase_NetCoreApp.Models;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MovieDatabase_NetCoreApp.Repositories
{
    /// <summary>
    /// Movie rating repository
    /// </summary>
    /// <seealso cref="TechnicalTask.DataAccess.IMovieRatingRepository" />
    /// <seealso cref="System.IDisposable" />
    public class MovieRatingRepository : IMovieRatingRepository, IDisposable
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
        /// Initializes a new instance of the <see cref="MovieRatingRepository"/> class.
        /// </summary>
        /// <param name="movieContext">The movie context.</param>
        public MovieRatingRepository(IMovieContext movieContext)
        {
            _movieContext = movieContext;
        }

        /// <summary>
        /// Gets all movie ratings asynchronous.
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<MovieRating>> GetAllMovieRatingsAsync()
        {
            return await this._movieContext.MovieRatings.OrderBy(r => r.Id).ToListAsync();
        }

        /// <summary>
        /// Saves the asynchronous.
        /// </summary>
        /// <returns></returns>
        public async Task SaveAsync()
        {
            await Task.FromResult(_movieContext.SaveChanges());
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
