using System;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryLINQController:Controller
    {
      
        public ContentResult Index()
        {
            String tryString;
            tryString = "try1";
            tryString = "try2";
            return this.Content(tryString);
        }   
    }
}
