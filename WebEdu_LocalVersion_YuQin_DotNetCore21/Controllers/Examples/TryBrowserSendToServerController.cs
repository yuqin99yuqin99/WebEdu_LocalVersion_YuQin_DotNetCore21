using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.Examples
{
    public class TryBrowserSendToServerController : Controller
    {
        // GET: TryBrowserSendToServerController
        public ActionResult Index()
        {
            return Content("这里准备接受浏览器发送来的字符串信息：姓名:"+Request.Query["name"]+";性别："+Request.Query["gendre"]
                +"文本框输入的字符串是："+ Request.Form["textInput"]+"；密码框输入的密码是：" + Request.Form["passwordInput"] + "；密码密码一般不会返回给浏览器端"
                + Request.Form["fileInput"]
                );
        }
    }
}
