using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class MyFirstAcceptBrowserController : Controller
    {
        // GET: MyFirstAcceptBrowser
        public ActionResult Index()
        {
            return Content("您好，我接收到您键入的字符串并发送给我了的是："+this.Request.Query["SearchedKeywords"]+"。在此我返回给您了！"+ "<a href=\"/\">单击这里可返回</>", "text/html");
        }

     
    }
}