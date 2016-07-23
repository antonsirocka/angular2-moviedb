using MovieDatabase_NetCoreApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDatabase_NetCoreApp.Repositories
{
    public class VotesRepositoryAsync : IVotesRepositoryAsync, IDisposable
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
        /// Initializes a new instance of the <see cref="VotesRepositoryAsync"/> class.
        /// </summary>
        /// <param name="movieContext">The movie context.</param>
        public VotesRepositoryAsync(IMovieContext movieContext)
        {
            _movieContext = movieContext;
        }

        public void AddVote(MovieVote vote)
        {
            this._movieContext.MovieVotes.Add(vote);
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
