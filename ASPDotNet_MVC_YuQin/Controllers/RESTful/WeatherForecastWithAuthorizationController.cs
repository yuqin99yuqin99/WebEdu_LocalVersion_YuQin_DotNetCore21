using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebAPPMVC_WebAPIMC.Controllers.RESTful
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    // [Authorize(Roles = "Administrator")]
    //[Authorize(Roles = "HRManager,Finance")]//only accessible by users who are members of the HRManager role or the Finance role
    public class WeatherForecastWithAuthorizationController : ControllerBase
    {
      

        // [HttpGet(Name = "GetWeatherForecastWithAuthorization")]
        [HttpGet]
        public String Get()
        {
            return "Try WebAPPMVC_WebAPIMC WithAuthorization";
        }
    }
}
