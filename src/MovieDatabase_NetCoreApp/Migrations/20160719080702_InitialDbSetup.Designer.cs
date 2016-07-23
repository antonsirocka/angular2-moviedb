using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MovieDatabase_NetCoreApp.Repositories;

namespace MovieDatabase_NetCoreApp.Migrations
{
    [DbContext(typeof(MovieContext))]
    [Migration("20160719080702_InitialDbSetup")]
    partial class InitialDbSetup
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MovieDatabase_NetCoreApp.Models.MovieRating", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("MovieRatings");
                });

            modelBuilder.Entity("MovieDatabase_NetCoreApp.Models.MovieRecord", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("Id");

                    b.Property<Guid>("AssociatedWithUserId");

                    b.Property<string>("CoverUrl");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<string>("ImdbUrl");

                    b.Property<int>("Priority");

                    b.Property<int?>("RatingId");

                    b.Property<string>("Title");

                    b.Property<bool>("Watched");

                    b.Property<string>("YearReleased");

                    b.HasKey("Id");

                    b.HasIndex("RatingId");

                    b.ToTable("MovieRecords");
                });

            modelBuilder.Entity("MovieDatabase_NetCoreApp.Models.MovieVote", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsDownvote");

                    b.Property<bool>("IsUpvote");

                    b.Property<Guid>("MovieRecordId");

                    b.Property<Guid>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("MovieRecordId");

                    b.ToTable("MovieVotes");
                });

            modelBuilder.Entity("MovieDatabase_NetCoreApp.Models.MovieRecord", b =>
                {
                    b.HasOne("MovieDatabase_NetCoreApp.Models.MovieRating", "Rating")
                        .WithMany()
                        .HasForeignKey("RatingId");
                });

            modelBuilder.Entity("MovieDatabase_NetCoreApp.Models.MovieVote", b =>
                {
                    b.HasOne("MovieDatabase_NetCoreApp.Models.MovieRecord")
                        .WithMany("Votes")
                        .HasForeignKey("MovieRecordId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
