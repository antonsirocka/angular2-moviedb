using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieDatabase_NetCoreApp.Models
{
    /// <summary>
    /// The movie vote entity
    /// </summary>
    [Table("MovieVotes")]
    public class MovieVote
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        public Guid Id { get; set; }

        public bool IsUpvote { get; set; }

        public bool IsDownvote { get; set; }

        public Guid MovieRecordId { get; set; }

        public Guid UserId { get; set; }
    }
}
