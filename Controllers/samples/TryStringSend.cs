using System;
using System.Web.Mvc;
using System.Collections.Generic;
using System.Collections.Specialized;

namespace EDSS.Controllers
{
    public class TryStringSendController : Controller
    {
      
        public ContentResult Index(String parameter1,String parameter2)
        {
            return this.Content(System.Web.HttpUtility.HtmlEncode(parameter1 + ";" + parameter2));
            // .Net内置的System.Web.HttpUtility.HtmlEncode()方法可以防止用户在所发送的字符串中注入恶意的Javascript代码 
            //例如 /Store/Browse?Genre=<script>window.location=’http://hackersite.com’</script>.
            
        }
      /** public ContentResult Index2()准备取消
        {
            String parameter1 = this.Request.QueryString["parameter1"];
            String parameter2 = this.Request.QueryString["parameter2"];
            return this.Content(System.Web.HttpUtility.HtmlEncode(parameter1 + ";" + parameter2));
          }**/
      
    }
}
