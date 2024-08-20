using System;
//using System.Web.Mvc;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Office.Interop.Word;
using Newtonsoft.Json;

namespace EDSS.Controllers
{
    public class TryAcceptFormDataFromBrowserController : Controller
    {
        #region //Web浏览器端未推送数据Web服务器端的情形
        public ContentResult IndexForRunAsHTMLInBrowser()
        {
            return this.Content("<HTML><HEAD><TITLE>课文</TITLE></HEAD><BODY><div style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>这是Web服务端创建返回给Web浏览器的文本<a href='http://www.jxnu.edu.cn/'>超链接试验</a></span></div></BODY ></HTML>", "text/html", System.Text.Encoding.UTF8);//不知为什么，必须""嵌套''，否则提示“字符文本中字符太多”错误
        }
        public ContentResult IndexForRunAsPlainTextInBrowser()
        {
            return this.Content("<HTML><HEAD><TITLE>课文</TITLE></HEAD><BODY><div style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>这是Web服务端创建返回给Web浏览器的文本<a href='/TryAcceptQueryStringGetMethodFromBrowser/Index?namevalue1=hjb&namevalue2=wsy'>超链接试验</a></span></div></BODY ></HTML>");
        }
        public ActionResult IndexForFileInBrowser()
        {
            return this.Redirect("/TryTemp/New.html");
        }
        public void IndexForFileInBrowserTryResponse()
        {
            Response.Redirect("/TryTemp/New.html");
        }
        public ActionResult IndexForJSONByJSONInBrowser()

        {
            /**
            String parameterTemp1 = "浏览器端发送的第一个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter1) + "；";////.Net内置的System.Web.HttpUtility.HtmlEncode()方法可以防止用户在所发送的字符串中注入恶意的JavaScript代码。
            String parameterTemp2 = "浏览器端发送的第二个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter2);
            String stringData = "{uname: '123',password: '123',code: '321'}";
            // return this.Json(parameterTemp1 + parameterTemp2+"附加的字符串", JsonRequestBehavior.AllowGet);
            // return this.Json(stringData, JsonRequestBehavior.AllowGet);//浏览器端AJAX收到的是空
            var data = new { rows = "hi", columns = "hi2" };
           var jsonstr = JsonConvert.SerializeObject(data);
    **/
            string myString = "[{ \"第一项\": \"build\", \"第二项\":\"http://www.baidu.com\" },{ \"第一项\": \"Brett\", \"第二项\":\"http://www.sohu.com\" },{ \"第一项\": \"openbook\", \"第二项\":\"http://www.163.com\" }]";

            return Json(myString);

        }

        public ActionResult IndexForJSONByContentInBrowser()

        {
            string myString = "[{ \"第一项\": \"build\", \"第二项\":\"http://www.baidu.com\" },{ \"第一项\": \"Brett\", \"第二项\":\"http://www.sohu.com\" },{ \"第一项\": \"openbook\", \"第二项\":\"http://www.163.com\" }]";

            return Content(myString, "application/x-javascript");

        }
        public ActionResult IndexForXMLInBrowser()

        {
            String myString = "<daa>xx<name>yuqin</name></data>";
            return Content(myString, "text/xml");

        }
        public ActionResult IndexForText()

        {
            String myString = "<daa>xx<name>yuqin</name></data>";
            return Content(myString, "text/plain");

        }
        public ActionResult IndexForHTMLInBrowser()

        {
            String myString = "<body>xx<h1>yuqin</h1></body>";
            return Content(myString, "text/html");

        }

        public ActionResult IndexForSVGInBrowser()

        {
            //String myString = "<svg><circle r='100'/></svg>";
            String myString = @"<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>
                            <circle cx='50' cy='50' r='40' stroke='black' stroke-width='2' fill='green' />
                          </svg>";
            //  return Content(myString, "text/svg"); "image/svg+xml"
            return Content(myString, "image/svg+xml"); 

        }

        public ActionResult IndexForX3DInBrowser()

        {
            String myString = @"<?xml version=""1.0"" encoding=""UTF-8""?>
<!DOCTYPE X3D PUBLIC ""ISO//Web3D//DTD X3D 3.0//EN"" 
	""http://www.web3d.org/specifications/x3d-3.0.dtd"">

<X3D version=""3.0"">
  <Scene>
    <Transform>
      	<Shape>
            <Box/><!--生成立体体-->
        </Shape>
     </Transform>
  </Scene>
</X3D>
"
                ;
                 return Content(myString, "image/x3d+xml");

        }
        public ActionResult IndexForBase64InBrowser()

        {
            String myString = "<body>xx<h1>yuqin</h1></body>";
            return Content(myString, "text/Base64");

        }

        public JsonResult JSONReturned()
        {
            return this.Json("window.alert('hi!')");
        }
        public VirtualFileResult TryFile()
        {
            // return this.File(@"c:\NTDETECT.COM", "application/com", "NTDETECT.COM");
            return this.File(@"d:\everyDay.html", "application/com", "everyDay.html");
        }
        public RedirectResult TryRedirectRouted()
        {
            return this.Redirect("TryView");
        }
        public RedirectResult TryRedirectNonRouted()
        {
            return this.Redirect("/tryhtml5/html/index.html");
        }



        public RedirectToRouteResult TryRedirectToRoute()
        {
            return this.RedirectToRoute("default");
        }

        #endregion

        #region //Form:Web浏览器端HTML的<form></form>元素推送数据Web服务器端的情形【此方式，完全可实现Web浏览器端url中?namevalue1=namevalue1&namevalue2=namevalue2...这一QueryString的方式，而且更好的数据安全性等等，所以在此不涉及QueryString方式，虽然可能更为复杂一些。】

        #region //Form NameValues
        public RedirectResult ReturnForm()
        {
            return this.Redirect("/TryTemp/Form.html");
        }
        public ContentResult IndexForFormNameValues()
        {
            //HTML中<form></form>元素中的nameValuae1=namevalue1...部分信号，可被Web服务端的Microsoft.AspNetCore.Http.HttpRequest类型进行计算。
            Microsoft.AspNetCore.Http.HttpRequest httpRequest = this.Request;
            //IFormFileCollection iFormFileCollection = httpRequest.Form.Files;
            String fileName = "";
            foreach (IFormFile iFormFile in httpRequest.Form.Files)
            {
                fileName = iFormFile.FileName;
                using (FileStream fileStream = new FileStream(@"d:\Temp\" + iFormFile.FileName, FileMode.OpenOrCreate))
                {
                    if (iFormFile != null)
                    {
                        iFormFile.CopyTo(fileStream);
                    }
                    else
                    {
                        Request.Body.CopyTo(fileStream);
                    }
                    fileStream.Close();
                }
            }
            //return this.Content(System.Web.HttpUtility.HtmlEncode("浏览器端HTML中<form></form>元素发送的名值对是:" + httpRequest.Form.Keys.ToString() + ";" + "浏览器端HTML中<form></form>元素发送的第一个名值对的值是:" + httpRequest.Form["nameValue1_InputTextFormField"] + ";" + "浏览器端HTML中<form></form>元素发送的第二个名值对的值是:" + httpRequest.Form["nameValue2_InputPasswordFormField"]) + ";" + "浏览器端HTML中<form></form>元素发送的第三个名值对的值是:" + httpRequest.Form["nameValue3_InputFileFormField"]+ @"d:\Temp\" + httpRequest.Form.Files[0].FileName, "text/html", System.Text.Encoding.UTF8);
            return this.Content(System.Web.HttpUtility.HtmlEncode("浏览器端HTML中<form></form>元素发送的名值对是:" + httpRequest.Form.Keys.ToString() + ";" + "浏览器端HTML中<form></form>元素发送的第一个名值对的值是:" + httpRequest.Form["nameValue1_InputTextFormField"] + ";" + "浏览器端HTML中<form></form>元素发送的第二个名值对的值是:" + httpRequest.Form["nameValue2_InputPasswordFormField"] + ";" + "浏览器端HTML中<form></form>元素发送的第三个名值对的值是:") + fileName, "text/html", System.Text.Encoding.UTF8);
        }
        #endregion
        #region //Form Files

        #endregion
        #endregion
    }
}
