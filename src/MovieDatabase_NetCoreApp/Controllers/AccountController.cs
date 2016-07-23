using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MovieDatabase_NetCoreApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieDatabase_NetCoreApp.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private IOptions<AppSettings> _configuration;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
           IOptions<AppSettings> configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        [Route("api/Account/Login")]
        public async Task<IActionResult> Login([FromBody]LoginModel model, string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            if (ModelState.IsValid)
            {
                try
                {
                    var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, model.RememberMe, lockoutOnFailure: false);

                    if (result.Succeeded)
                    {
                        var appUser = await _userManager.FindByNameAsync(model.Username);

                        return Ok(new { userId = appUser.Id, username = appUser.UserName });
                    }
                }
                catch (Exception ex)
                {
                    return new BadRequestResult();
                }

                return new UnauthorizedResult();
            }

            return new BadRequestResult();
        }

        [HttpPost]
        [Authorize]
        [Route("api/Account/Logout")]
        public async Task<IActionResult> Logout()
        {
            try
            {
                await this._signInManager.SignOutAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return new BadRequestResult();
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("api/Account/GetLoggedInUser")]
        public async Task<IActionResult> GetLoggedInUser()
        {
            try
            {
                if (this._signInManager.IsSignedIn(HttpContext.User))
                {
                    var signedInUser = await this._userManager.GetUserAsync(HttpContext.User);

                    return Ok(signedInUser);
                }
                else
                {
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return new BadRequestResult();
            }
        }

        //
        // POST: /Account/Register
        [HttpPost]
        [Route("api/Account/Register")]
        public async Task<IActionResult> Register([FromBody]RegisterModel model, string returnUrl = null)
        {
            if (ModelState.IsValid && _configuration.Value.SecretKey.Equals(model.SecretKey))
            {
                var user = new ApplicationUser { UserName = model.Username };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);

                    return Ok(user);
                }
            }

            return BadRequest();
        }
    }
}
