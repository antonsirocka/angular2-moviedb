using MovieDatabase_NetCoreApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDatabase_NetCoreApp.Repositories
{
    public interface IVotesRepositoryAsync : IDisposable
    {
        void AddVote(MovieVote vote);

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
