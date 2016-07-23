using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieDatabase_NetCoreApp.Models
{
    /// <summary>
    /// Movie record entity
    /// </summary>
    [Table("MovieRecords")]
    public class MovieRecord
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        //[Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets the title.
        /// </summary>
        /// <value>
        /// The title.
        /// </value>
        public string Title { get; set; }

        /// <summary>
        /// Gets or sets the year released.
        /// </summary>
        /// <value>
        /// The year released.
        /// </value>
        public string YearReleased { get; set; }

        /// <summary>
        /// Gets or sets the rating.
        /// </summary>
        /// <value>
        /// The rating.
        /// </value>
        //[ForeignKey("Id")]
        public MovieRating Rating { get; set; }

        public string ImdbUrl { get; set; }

        public string CoverUrl { get; set; }

        public string Description { get; set; }

        public bool Watched { get; set; }

        public int Priority { get; set; }

        public List<MovieVote> Votes { get; set; }

        public DateTime? CreatedDate { get; set; }

        public Guid AssociatedWithUserId { get; set; }
    }
}
