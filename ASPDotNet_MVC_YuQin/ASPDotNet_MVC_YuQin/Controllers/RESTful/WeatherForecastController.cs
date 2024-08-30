using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebAPPMVC_WebAPIMC.Controllers.RESTful
{
    [ApiController]
    [Route("[controller]")]
    [AllowAnonymous]
    public class WeatherForecastController : ControllerBase
    {
        
        //[HttpGet(Name = "GetWeatherForecast")]
        [HttpGet]
        public String Get()
        {
            return "Try WebAPPMVC_WebAPIMC";
        }
    }
}
