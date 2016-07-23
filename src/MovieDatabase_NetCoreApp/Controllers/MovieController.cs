using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieDatabase_NetCoreApp.Repositories;
using MovieDatabase_NetCoreApp.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace MovieDatabase_NetCoreApp.Controllers
{
    [Route("api/Movie")]
    public class MovieController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        private IMovieRepositoryAsync _movieRepository;

        private IMovieRatingRepository _movieRatingRepository;

        private IVotesRepositoryAsync _movieVotesRepository;

        public MovieController(
            UserManager<ApplicationUser> userManager,
            IMovieRepositoryAsync movieRepository,
            IMovieRatingRepository movieRatingRepository,
            IVotesRepositoryAsync movieVotesRepository)
        {
            _userManager = userManager;
            _movieRepository = movieRepository;
            _movieRatingRepository = movieRatingRepository;
            _movieVotesRepository = movieVotesRepository;
        }

        [Route("List")]
        [HttpGet]
        public async Task<IActionResult> GetAllMovieRecordsAsync()
        {
            try
            {
                var movieRecords = await _movieRepository.GetAllMovieRecordsWithRatingsAndVotesAsync(GetSignedInUserId());

                movieRecords = movieRecords.Where(mr => mr.AssociatedWithUserId == GetSignedInUserId());

                return Ok(movieRecords);
            }
            catch (Exception ex)
            {
                //Log.Error(String.Format("Unhandled exception thrown in {0} for request {1}: {2}", Request.Method, Request.RequestUri, ex));

                // TODO: log error to database
                return BadRequest();
            }
        }

        [Route("Get")]
        [HttpGet]
        public async Task<IActionResult> GetMovieRecordAsync(Guid movieRecordId)
        {
            try
            {
                var movieRecord = await _movieRepository.GetMovieRecordAsync(movieRecordId);

                return Ok(movieRecord);
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Authorize]
        [Route("Add")]
        [HttpPost]
        public async Task<IActionResult> InsertMovieRecord([FromBody]MovieRecord movieRecord)
        {
            try
            {
                movieRecord.Id = Guid.NewGuid();

                var movieRatings = await _movieRatingRepository.GetAllMovieRatingsAsync();

                movieRecord.Rating =
                    movieRatings.FirstOrDefault(mr => movieRecord.Rating.Id > 0 ? mr.Id == movieRecord.Rating.Id : mr.Name == movieRecord.Rating.Name);

                movieRecord.CreatedDate = DateTime.Now;

                movieRecord.AssociatedWithUserId = GetSignedInUserId();

                _movieRepository.InsertMovieRecord(movieRecord);

                _movieRepository.Save();

                return Ok(movieRecord);
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Authorize]
        [Route("Update")]
        [HttpPut]
        public async Task<IActionResult> UpdateMovieRecordAsync([FromBody]MovieRecord movieRecord)
        {
            try
            {
                var originalRecord = await this._movieRepository.GetMovieRecordAsync(movieRecord.Id);

                movieRecord.AssociatedWithUserId = originalRecord.AssociatedWithUserId;

                var movieRatings = await _movieRatingRepository.GetAllMovieRatingsAsync();

                movieRecord.Rating =
                    movieRatings.FirstOrDefault(mr => movieRecord.Rating.Id > 0 ? mr.Id == movieRecord.Rating.Id : mr.Name == movieRecord.Rating.Name);

                await _movieRepository.UpdateMovieRecordAsync(movieRecord);

                await _movieRepository.SaveAsync();

                return Ok(movieRecord);
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Authorize]
        [Route("MarkAsWatched")]
        [HttpPut]
        public async Task<IActionResult> MarkAsWatched(Guid movieRecordId)
        {
            try
            {
                await _movieRepository.MarkAsWatched(movieRecordId);

                await _movieRepository.SaveAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Authorize]
        [Route("MarkAsUnwatched")]
        [HttpPut]
        public async Task<IActionResult> MarkAsUnwatched(Guid movieRecordId)
        {
            try
            {
                await _movieRepository.MarkAsUnwatched(movieRecordId);

                await _movieRepository.SaveAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Route("Upvote")]
        [HttpPost]
        public async Task<IActionResult> Upvote(Guid movieRecordId)
        {
            try
            {
                var vote = new MovieVote()
                {
                    Id = Guid.NewGuid(),
                    IsUpvote = true,
                    IsDownvote = false,
                    MovieRecordId = movieRecordId,
                    UserId = GetSignedInUserId()
                };

                _movieVotesRepository.AddVote(vote);

                await _movieVotesRepository.SaveAsync();

                return Ok(vote);
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Route("Downvote")]
        [HttpPost]
        public async Task<IActionResult> Downvote(Guid movieRecordId)
        {
            try
            {
                var vote = new MovieVote()
                {
                    Id = Guid.NewGuid(),
                    IsUpvote = false,
                    IsDownvote = true,
                    MovieRecordId = movieRecordId,
                    UserId = GetSignedInUserId()
                };

                _movieVotesRepository.AddVote(vote);

                await _movieVotesRepository.SaveAsync();

                return Ok(vote);
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Authorize]
        [Route("Delete")]
        [HttpDelete]
        public async Task<IActionResult> DeleteMovieRecordAsync(Guid movieRecordId)
        {
            try
            {
                _movieRepository.DeleteMovieRecord(movieRecordId);

                await _movieRepository.SaveAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        [Route("GetRatings")]
        [HttpGet]
        public async Task<IActionResult> GetAllMovieRatingsAsync()
        {
            try
            {
                var movieRatings = await _movieRatingRepository.GetAllMovieRatingsAsync();

                return Ok(movieRatings);
            }
            catch (Exception ex)
            {
                // TODO: log error to database
                return BadRequest();
            }
        }

        private Guid GetSignedInUserId()
        {
            var signedInUserNameIdentifier = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);

            if (signedInUserNameIdentifier != null)
            {
                return Guid.Parse(signedInUserNameIdentifier.Value);
            }

            return Guid.Empty;
        }
    }
}
