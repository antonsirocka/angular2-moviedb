using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MovieDatabase_NetCoreApp.Controllers
{
    //[Authorize]
    [Route("api/Values")]
    public class ValuesController : Controller
    {
        // GET: api/values
        [Route("List")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
    }
}
