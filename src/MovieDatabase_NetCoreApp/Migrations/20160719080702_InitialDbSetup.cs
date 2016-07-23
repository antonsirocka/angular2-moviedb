using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MovieDatabase_NetCoreApp.Migrations
{
    public partial class InitialDbSetup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MovieRatings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieRatings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MovieRecords",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AssociatedWithUserId = table.Column<Guid>(nullable: false),
                    CoverUrl = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    ImdbUrl = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
                    RatingId = table.Column<int>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Watched = table.Column<bool>(nullable: false),
                    YearReleased = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieRecords", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MovieRecords_MovieRatings_RatingId",
                        column: x => x.RatingId,
                        principalTable: "MovieRatings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MovieVotes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    IsDownvote = table.Column<bool>(nullable: false),
                    IsUpvote = table.Column<bool>(nullable: false),
                    MovieRecordId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieVotes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MovieVotes_MovieRecords_MovieRecordId",
                        column: x => x.MovieRecordId,
                        principalTable: "MovieRecords",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MovieRecords_RatingId",
                table: "MovieRecords",
                column: "RatingId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieVotes_MovieRecordId",
                table: "MovieVotes",
                column: "MovieRecordId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MovieVotes");

            migrationBuilder.DropTable(
                name: "MovieRecords");

            migrationBuilder.DropTable(
                name: "MovieRatings");
        }
    }
}
