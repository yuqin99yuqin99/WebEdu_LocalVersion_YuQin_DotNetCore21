using System;
using System.Web;
using System.Web.Mvc;
using System.Collections.Generic;
using System.Linq;


namespace EDSS.Controllers
{
    public class TryAJAXController : Controller
    {

          public ViewResult Index()
        {
           return this.View("/Views/Samples/TryAJAX/index.cshtml");
        }
        //public ContentResult IndexAJAX(String parameter)
        //{
           // return this.Content("这是一个超链接发送名值对的示例,所是" + parameter);//for ajax 
       // }   

    }
}
