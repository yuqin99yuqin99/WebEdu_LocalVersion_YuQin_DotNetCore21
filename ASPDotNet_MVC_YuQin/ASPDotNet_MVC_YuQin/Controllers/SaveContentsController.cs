using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using WebEdu_LocalVersion_YuQin_DotNetCore21.Models;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.FileProviders;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Common;
using System.Text;


namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class SaveContentsController : Controller
    {
        public SaveContentsController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
            _hostingEnvironment = hostingEnvironment;
        }
        private IHostingEnvironment _hostingEnvironment { get; }
        //private IFileProvider _fileProvider { get; }//ASP.NET Core 2.0提供了继承自接口IFileProvider的PhysicalFileProvider类型，用于受限地访问本地文件系统，它是对System.IO.File的一个封装。只能读文件系统？
        // GET api/value
        // private String CreatedHTML{ get; set; }
        [HttpGet]
        /**
        public IActionResult Get(String sFileName)
        {
           // sFileName准备用作文件读取；
            return Content("<HTML><HEAD><TITLE>课文</TITLE><BODY><div contenteditable='true' style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>该条目尚没有对应的课文，这是自动创建的文本，请编辑</span></div></BODY ></HTM>", "text/html",System.Text.Encoding.UTF8);//不知为什么，必须""嵌套''，否则提示“字符文本中字符太多”错误
        }
            **/
         public IActionResult Get()
        {
            //FormCollection包含了表单的所有值，其实就是键值对，键就是表单字段中的name
            //<!--浏览器端Form必须给每一个表单域元素取一个唯一的name，服务器端通过name来识别-->
            {
                //String formkeyUsername = formCollection["Username"];
                // String formkeyPassword = formCollection["Password"];
                String querykey1 = Request.Query["key1"];//获取url字符串,等于QueryCollection吗？
                String querykey2 = Request.Query["key2"];//获取url字符串,等于QueryCollection吗？
                String formkey1 = Request.Form["Username"];//获取表单,等于FormCollection吗？
                String formkey2 = Request.Form["Password"];//获取表单,等于FormCollection吗？
                IFormFileCollection files = Request.Form.Files;
                // String sContents = Request.Form["Contents"];//获取表单,等于FormCollection吗？
                String sContents = Request.Query["Contents"];
                // IFormFileCollection files = Request.Form.Files;//获取表单文件
                String key3 = Request.Cookies["key3"];//获取cookie。注:在.net core 2.1中使用cookie需要设置options.CheckConsentNeeded = context => false
                String key4 = Request.Headers["key4"];//获取http头参数
                                                      // String sAll = this.Request.Form.All();
                if (new LocalVersionOrServerVersion().IsLocalVersion(this.Request.Host.ToUriComponent()))
                {
                    String filePathOfContents = _hostingEnvironment.WebRootPath + "\\webCourse\\lessons\\contents.htm";//如果修改为获取当前目录的URL而获取部分路径，更便于维护
                    StreamReader streamReader = new StreamReader(filePathOfContents, new TexFileEncodeType().GetFileEncodeType(filePathOfContents));// 创建文本的读取流(会检查字节码标记确定编码格式)
                    String stringFromFile = streamReader.ReadToEnd(); //读取文本中的所有字符
                                                                      // String stringFromFileProcessedTemp = stringFromFile.Replace("charset=gb2312", "charset=utf-8");//尚无法实现.docx转.htm时utf-8编码
                    streamReader.Close();
                    StreamWriter streamWriter = new StreamWriter(filePathOfContents, false, Encoding.UTF8);

                    // streamWriter.Write(stringFromFileProcessed,,Encoding.UTF8);//出错。
                    streamWriter.Write(sContents);
                    streamWriter.Close();

                    return Ok("已保存！");
                }
                else { return Ok("这是服务器版（或者是本机版发布为了服务器版的方式运行），不允许直接上传！请在本机版制作好后（本机版无需登录）,连接服务器版（课程资源管理员的账号登录连接服务器版），上传本机版中的资源到服务器版!" + this.Request.Host.ToUriComponent()); }

                //return Content("<HTML><HEAD><TITLE>课文</TITLE><BODY><div contenteditable='true' style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>该条目尚没有对应的课文，这是自动创建的文本，请编辑</span></div></BODY ></HTM>", "text/html", System.Text.Encoding.UTF8);//不知为什么，必须""嵌套''，否则提示“字符文本中字符太多”错误
            }
        }
        // GET api/values
        /**
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }
            **/

            // GET api/values/5
            /**
[HttpGet("{id}")]
public ActionResult<string> Get(int id)
{
               return "value";
}
            **/
            // POST api/values
        [HttpPost]
        /**public void Post([FromBody] string value)
{
}**/
        
       // public IActionResult Post(FormCollection formCollection)
       public IActionResult Post()
        {
            //FormCollection包含了表单的所有值，其实就是键值对，键就是表单字段中的name
            //<!--浏览器端Form必须给每一个表单域元素取一个唯一的name，服务器端通过name来识别-->
            {
                //String formkeyUsername = formCollection["Username"];
                // String formkeyPassword = formCollection["Password"];
                // String querykey1 = Request.Query["key1"];//获取url字符串,等于QueryCollection吗？
                // String querykey2 = Request.Query["key2"];//获取url字符串,等于QueryCollection吗？
                // String formkey1 = Request.Form["Username"];//获取表单,等于FormCollection吗？
                // String formkey2 = Request.Form["Password"];//获取表单,等于FormCollection吗？
                // IFormFileCollection files = Request.Form.Files;
                // String sContents = Request.Form["Contents"];//获取表单,等于FormCollection吗？
                
                String sContents = Request.Form["Contents"];
                // IFormFileCollection files = Request.Form.Files;//获取表单文件
               // String key3 = Request.Cookies["key3"];//获取cookie。注:在.net core 2.1中使用cookie需要设置options.CheckConsentNeeded = context => false
              //  String key4 = Request.Headers["key4"];//获取http头参数
                                                      // String sAll = this.Request.Form.All();
                if (new LocalVersionOrServerVersion().IsLocalVersion(this.Request.Host.ToUriComponent()))
                {
                    String filePathOfContents = _hostingEnvironment.WebRootPath + "\\webCourse\\lessons\\contents.htm";//如果修改为获取当前目录的URL而获取部分路径，更便于维护
                    StreamReader streamReader = new StreamReader(filePathOfContents, new TexFileEncodeType().GetFileEncodeType(filePathOfContents));// 创建文本的读取流(会检查字节码标记确定编码格式)
                    String stringFromFile = streamReader.ReadToEnd(); //读取文本中的所有字符
                                                                      // String stringFromFileProcessedTemp = stringFromFile.Replace("charset=gb2312", "charset=utf-8");//尚无法实现.docx转.htm时utf-8编码
                    streamReader.Close();
                    StreamWriter streamWriter = new StreamWriter(filePathOfContents, false, Encoding.UTF8);

                    // streamWriter.Write(stringFromFileProcessed,,Encoding.UTF8);//出错。
                    streamWriter.Write(sContents);
                    streamWriter.Close();

                    return Ok("已保存！"+ sContents);
                }
                else { return Ok("这是服务器版（或者是本机版发布为了服务器版的方式运行），不允许直接上传！请在本机版制作好后（本机版无需登录）,连接服务器版（课程资源管理员的账号登录连接服务器版），上传本机版中的资源到服务器版!" + this.Request.Host.ToUriComponent()); }

                //return Content("<HTML><HEAD><TITLE>课文</TITLE><BODY><div contenteditable='true' style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>该条目尚没有对应的课文，这是自动创建的文本，请编辑</span></div></BODY ></HTM>", "text/html", System.Text.Encoding.UTF8);//不知为什么，必须""嵌套''，否则提示“字符文本中字符太多”错误
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
public void Put(int id, [FromBody] string value)
{

}

// DELETE api/values/5
[HttpDelete("{id}")]
public void Delete(int id)
{
}

}   
}

