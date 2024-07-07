using System;
using System.Web.Mvc;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace EDSS.Controllers
{
    public class TryAcceptNameValueController : Controller
    {
        // REST属于一种设计风格，REST 中的 POST（新增数据），GET（取得数据），PUT（更新数据），DELETE（删除数据）来进行数据库的增删改查，而如果开发人员的应用程式符合REST原则，则它的服务为“REST风格Web服务“也称的RESRful Web API”。只注册到了controller，没有到action，因为api的action名称是有约定的。另外我们可以注意到在Post Put的方法参数有一个关键字[ FromBody ]，而Get、Delete则没有。，事实上没有加[ FromBody ]就默认为[ FromUri ].        [FromBody] 表示由请求文件本体中取得资料，就像一般表单Post Submit一样，取得资料的来源是由请求本体中取得，而[FromUri] 则表示由URI中取得资料，就像在网址列中的所夹带的参数
        // GET：生到数据列表（默认），或者得到一条实体数据. 。可重载               
        //PUT：修改服务端的一条记录，记录实体的Form对象，记录主键以GET方式进行传输。 可重载
        //POST：添加服务端添加一条记录，记录实体为Form对象。 可重载
        //DELETE：删除服务端的一条记录。 可重载

        public void Get(String value)
        {
            //HttpContextBase context = (HttpContextBase)Request.Properties["MS_HttpContext"];//获取传统context
            // HttpRequestBase request = context.Request;//定义传统request对象
            string name = Request.QueryString["name"];

        }
        public void Put(String value)
        {
            //HttpContextBase context = (HttpContextBase)Request.Properties["MS_HttpContext"];//获取传统context
            // HttpRequestBase request = context.Request;//定义传统request对象
            string name = Request.Form["name"];

        }
        public void Post(String value)
        {
            //HttpContextBase context = (HttpContextBase)Request.Properties["MS_HttpContext"];//获取传统context
            // HttpRequestBase request = context.Request;//定义传统request对象
            string name = Request.Form["name"];

        }
        public void Delete(String value)
        {
            //HttpContextBase context = (HttpContextBase)Request.Properties["MS_HttpContext"];//获取传统context
            // HttpRequestBase request = context.Request;//定义传统request对象
            string name = Request.Form["name"];

        }
        [HttpGet]       
        public ViewResult Index(String parameter1, String parameter2)

        {

            this.ViewBag.parameter1 = "浏览器端发送的第一个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter1) + "；";////.Net内置的System.Web.HttpUtility.HtmlEncode()方法可以防止用户在所发送的字符串中注入恶意的JavaScript代码。
            this.ViewBag.parameter2 ="浏览器端发送的第二个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter2); 
            return this.View("/Views/Samples/TrySendNameValue/index.cshtml"); 
        }
        [HttpGet]
        public ActionResult IndexForJSONByJSON(String parameter1, String parameter2)

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

            return Json(myString, JsonRequestBehavior.AllowGet);       

        }

        public ActionResult IndexForJSONByContent(String parameter1, String parameter2)

        {
            string myString = "[{ \"第一项\": \"build\", \"第二项\":\"http://www.baidu.com\" },{ \"第一项\": \"Brett\", \"第二项\":\"http://www.sohu.com\" },{ \"第一项\": \"openbook\", \"第二项\":\"http://www.163.com\" }]";

            return Content(myString, "application/x-javascript");

        }
        public ActionResult IndexForXML(String parameter1, String parameter2)

        {
            String myString = "<daa>xx<name>yuqin</name></data>";
            return Content(myString,"text/xml");

        }
        public ActionResult IndexForText(String parameter1, String parameter2)

        {
            String myString = "<daa>xx<name>yuqin</name></data>";
            return Content(myString, "text/plain");

        }
        public ActionResult IndexForHTML(String parameter1, String parameter2)

        {
            String myString = "<body>xx<h1>yuqin</h1></body>";
            return Content(myString, "text/html");

        }

        public ActionResult IndexForSVG(String parameter1, String parameter2)

        {
            String myString = "<svg><circle r='100'/></svg>";
            return Content(myString, "text/svg");

        }
        public ActionResult IndexForBase64(String parameter1, String parameter2)

        {
            String myString = "<body>xx<h1>yuqin</h1></body>";
            return Content(myString, "text/Base64");

        }
    }
}
