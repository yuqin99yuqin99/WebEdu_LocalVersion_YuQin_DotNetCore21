using System;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryModelBindingController : Controller
    {
        
       // [HttpPost]
        public ViewResult Index(EDSS.Models.Person person)
        {
            ViewBag.StatusMessage = "欢迎您！" + person.FirstName + person.LastName + "您的编号是" + person.Id + "!";
            return this.View("/views/Samples/TryModelBinding/index.cshtml");
        }

    }
}
