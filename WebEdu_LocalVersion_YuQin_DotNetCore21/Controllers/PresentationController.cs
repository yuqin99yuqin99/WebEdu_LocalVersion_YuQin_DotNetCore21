using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Models;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.FileProviders;
using Microsoft.Office.Core;
using Microsoft.Office.Interop.PowerPoint;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Common;


namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class PresentationController : Controller
    {
        public PresentationController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
           _hostingEnvironment = hostingEnvironment;
        }
        private IHostingEnvironment _hostingEnvironment { get; }

        // GET api/value
        // private String CreatedHTML{ get; set; }
        [HttpGet]
        public IActionResult Get(String sFileName)
        {
           // sFileName准备用作文件读取；
            return this.Content("hi!");
        }

        [HttpGet]
        //注意：好像this.Request.QueryString方式（更不面向对象），比方法参数方式更稳定（更面向对象），影响稳定的因素可能是文本的编码。
        public IActionResult TryAcceptURLNameValue_QueryString_Get1(String parameter1, String parameter2)

        {

            String parameter1Temp = "浏览器端发送的第一个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter1.ToString() + ":" + parameter1);////.Net内置的System.Web.HttpUtility.HtmlEncode()方法可以防止用户在所发送的字符串中注入恶意的JavaScript代码。
            String parameter2Temp = "浏览器端发送的第二个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter2.ToString() + ":" + parameter2);
            return this.Content(parameter1Temp + ";" + parameter2Temp);
        }
        [HttpGet]
        public IActionResult TryAcceptURLNameValue_QueryString_Get2()//已测试。任意多个参数都方便，建议使用。
        {

            String parameter1Temp = "浏览器端发送的第一个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(Request.QueryString.Value[0] + ";" + Request.QueryString.Value[0]);////.Net内置的System.Web.HttpUtility.HtmlEncode()方法可以防止用户在所发送的字符串中注入恶意的JavaScript代码。
            String parameter2Temp = "浏览器端发送的第二个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(Request.QueryString.Value[1] + ";" + Request.QueryString.Value[1]);
            return Content(parameter1Temp + ";" + parameter2Temp);
        }
         [HttpPost]
        //public async Task<IActionResult> Post()//PPT另存为mp4不知是不是线程非安全的，还未转完就可以杀死线程！！！。ASP.NET MVC 操作支持使用简单的模型绑定（针对较小文件）或流式处理（针对较大文件）上传一个或多个文件。(在此选择流式处理）)
        public async Task<IActionResult> Post()//PPT另存为mp4不知是不是线程非安全的，还未转完就可以杀死线程！！！。ASP.NET MVC 操作支持使用简单的模型绑定（针对较小文件）或流式处理（针对较大文件）上传一个或多个文件。(在此选择流式处理）)

        {
            if (new LocalVersionOrServerVersion().IsLocalVersion(this.Request.Host.ToUriComponent()))
            {
                IFormFileCollection files = Request.Form.Files;
                long size = files.Sum(f => f.Length);
                string webRootPath = _hostingEnvironment.WebRootPath;
                string contentRootPath = _hostingEnvironment.ContentRootPath;
                String filePathPartTemp = "\\webCourse\\lessons\\content\\teachingPlan\\";
                String filePathAll = "";
                String mp4PathAll="";
                String sTemp = Request.Form["IsSaveAsMP4"];

                foreach (var formFile in files)
                {
                    if (formFile.Length > 0)
                    {
                        string fileExt = formFile.FileName.Substring(formFile.FileName.IndexOf("."), formFile.FileName.Length - formFile.FileName.IndexOf(".")); //文件扩展名，含“.”
                        long fileSize = formFile.Length; //获得文件大小，以字节为单位
                        String FolderPath = webRootPath + filePathPartTemp + Request.Query["FolderAndFileName"];
                        Directory.CreateDirectory(FolderPath);
                        String filePath = FolderPath + "\\" + Request.Query["FolderAndFileName"] + fileExt;
                        using (var stream = new FileStream(filePath, FileMode.Create))
                        {
                            await formFile.CopyToAsync(stream);
                        }
                        filePathAll += filePath;
                        //将PPT另存为.mp4;
                        //创建一个名为PPTApp的组件对象                       

                        //if (Request.Form["IsSaveAsMP4"]=="on")
                        if (Request.Form["IsSaveAsMP4"]!= "on")
                       
                        {
                            try
                            {

                                Application PPTApp = new Application();
                                //必须设置为不可见 
                                //PPTApp.Visible = MsoTriState.msoFalse;
                                Presentation presentation = PPTApp.Presentations.Open(filePath, MsoTriState.msoTrue, MsoTriState.msoFalse, MsoTriState.msoFalse);
                                //presentation.Export(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".mp4", WdSaveFormat.wdFormatFilteredHTML);
                                presentation.SaveAs(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".mp4", PpSaveAsFileType.ppSaveAsMP4, MsoTriState.msoFalse);
                                mp4PathAll += FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".mp4";
                                //PPTApp.ActivePresentation.Saved = MsoTriState.msoTrue;//会出错，不过，出错时转mp4成功了！！！。不出错反而没转不成功，可能是还没转成就被退出了。
                                //PPTApp.ActivePresentation.Close();
                                presentation.Saved = MsoTriState.msoTrue;
                                // presentation.Close();////会出错，不过，出错时转mp4成功了！！！。不出错反而没转不成功，可能是还没转成就被退出了。如果判断是否已转换完了呢？
                                // PPTApp.Quit();
                                // PPTApp = null;
                                GC.Collect();
                                //杀死打开的PPT进程//没达到预期。好像也没必要杀死。

                                Process myProcess = new Process();
                                Process[] PPTProcess = Process.GetProcessesByName("powerpoint");
                                try
                                {
                                    foreach (Process pro in PPTProcess) //这里是找到那些没有界面的Word进程
                                    {
                                        IntPtr ip = pro.MainWindowHandle;

                                        string str = pro.MainWindowTitle; //发现程序中打开跟用户自己打开的区别就在这个属性。用户打开的str 是文件的名称，程序中打开的就是空字符串。
                                        if (string.IsNullOrEmpty(str))
                                        {
                                            pro.Kill();
                                        }
                                    }
                                }
                                catch (Exception ex)
                                {
                                    ex.ToString();
                                }

                            }


                            catch (Exception Ex)
                            {
                                throw new Exception(Ex.Message);
                            }
                        }
                    }
                    else
                    {
                        string fileExt = formFile.FileName.Substring(formFile.FileName.IndexOf("."), formFile.FileName.Length - formFile.FileName.IndexOf(".")); //文件扩展名，含“.”
                        long fileSize = formFile.Length; //获得文件大小，以字节为单位                    
                        String FolderPath = webRootPath + filePathPartTemp + Request.Query["FolderAndFileName"];
                        Directory.CreateDirectory(FolderPath);
                        String filePath = FolderPath + "\\" + Request.Query["FolderAndFileName"] + fileExt;
                        filePathAll += filePath;
                    }
                }

                // process uploaded files
                // Don't rely on or trust the FileName property without validation.

                return Ok(new { count = files.Count, size, filePathAll, mp4PathAll, sTemp });
            }
            else { return Ok("这是服务器版（或者是本机版发布为了服务器版的方式运行），不允许直接上传！请在本机版制作好后（本机版无需登录）,连接服务器版（课程资源管理员的账号登录连接服务器版），上传本机版中的资源到服务器版!" + this.Request.Host.ToUriComponent()); }
    }
    }

}
