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
using Microsoft.Office.Interop.Word;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class AllCourseTextController : Controller
    {
        public AllCourseTextController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
            _hostingEnvironment = hostingEnvironment;
        }
        private IHostingEnvironment _hostingEnvironment { get; }
        //private IFileProvider _fileProvider { get; }//ASP.NET Core 2.0提供了继承自接口IFileProvider的PhysicalFileProvider类型，用于受限地访问本地文件系统，它是对System.IO.File的一个封装。只能读文件系统？
        // GET api/value
        // private String CreatedHTML{ get; set; }
        [HttpGet]
        public IActionResult Get(String sFileName)
        {
           // sFileName准备用作文件读取；
            return Content("<HTML><HEAD><TITLE>课文</TITLE><BODY><div contenteditable='true' style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>该条目尚没有对应的课文，这是自动创建的文本，请编辑</span></div></BODY ></HTM>", "text/html",System.Text.Encoding.UTF8);
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
        public async Task<IActionResult> Post()//ASP.NET MVC 操作支持使用简单的模型绑定（针对较小文件）或流式处理（针对较大文件）上传一个或多个文件。(在此选择流式处理）)
        {
            // return (Content(Request.Query["FolderAndFileName"]));

            var files = Request.Form.Files;
            long size = files.Sum(f => f.Length);
            string webRootPath = _hostingEnvironment.WebRootPath;
            string contentRootPath = _hostingEnvironment.ContentRootPath;
            String filePathPartTemp = "\\webCourse\\lessons\\content\\book\\";
            String filePathAll = "";

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
                    //将Word另存为.htm;
                    //创建一个名为WordApp的组件对象 
                    try { 
                    Application WordApp = new ApplicationClass();
                    //必须设置为不可见 
                    WordApp.Visible = false;
                    Document document=WordApp.Documents.Open(filePath);
                    document.SaveAs2(FolderPath + "\\" + Request.Query["FolderAndFileName"]+".htm", WdSaveFormat.wdFormatFilteredHTML);
                    document.Close();
                    WordApp.Quit();
                    }
                    catch (Exception Ex)
                    {
                        throw new Exception(Ex.Message);
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

            return Ok(new { count = files.Count, size, filePathAll });
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
