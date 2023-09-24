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
    public class FileExplorerController : Controller
    {
        public FileExplorerController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
            _hostingEnvironment = hostingEnvironment;
        }
        private IHostingEnvironment _hostingEnvironment { get; }
        //private IFileProvider _fileProvider { get; }//ASP.NET Core 2.0提供了继承自接口IFileProvider的PhysicalFileProvider类型，用于受限地访问本地文件系统，它是对System.IO.File的一个封装。只能读文件系统？
        // GET api/value
        // private String CreatedHTML{ get; set; }
        [HttpGet]
        public IActionResult Get()
        {
            // sFileName准备用作文件读取；
            // return Content("<HTML><HEAD><TITLE>课文</TITLE><BODY><div contenteditable='true' style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>该条目尚没有对应的课文，这是自动创建的文本，请编辑</span></div></BODY ></HTM>", "text/html",System.Text.Encoding.UTF8);//不知为什么，必须""嵌套''，否则提示“字符文本中字符太多”错误
            return Redirect("/WebCourse/Common/NoCourseText.html");
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
            String FolderPath = webRootPath + filePathPartTemp + Request.Query["FolderAndFileName"];
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    string fileExt = formFile.FileName.Substring(formFile.FileName.IndexOf("."), formFile.FileName.Length - formFile.FileName.IndexOf(".")); //文件扩展名，含“.”
                    long fileSize = formFile.Length; //获得文件大小，以字节为单位
                   
                    Directory.CreateDirectory(FolderPath);
                    String filePath = FolderPath + "\\" + Request.Query["FolderAndFileName"] + fileExt;
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                    filePathAll += filePath;
                    //将Word另存为.htm;
                    //创建一个名为WordApp的组件对象 
                    try
                    {

                        Application WordApp = new ApplicationClass();
                        //必须设置为不可见 
                        WordApp.Visible = false;
                        Document document = WordApp.Documents.Open(filePath);
                        //document.SaveEncoding = MsoEncoding.msoEncodingUTF8;//Microsoft.Office.Core.MsoEncoding.msoEncodingUTF8; 
                        //Object encoding = Microsoft.Office.Core.MsoEncoding.msoEncodingUTF8;//加入UTF-8编码暂时未成功
                        document.SaveAs2(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm", WdSaveFormat.wdFormatFilteredHTML);
                       // document.SaveAs2(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm" ,WdSaveFormat.wdFormatFilteredHTML);//加入UTF-8编码暂时未成功
                        document.Close();
                        WordApp.Quit();
                        WordApp = null;
                        //杀死打开的word进程//没达到预期。好像也没必要杀死。
                        Process myProcess = new Process();
                        Process[] wordProcess = Process.GetProcessesByName("winword");
                        try
                        {
                            foreach (Process pro in wordProcess) //这里是找到那些没有界面的Word进程
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
                else
                {
                    string fileExt = formFile.FileName.Substring(formFile.FileName.IndexOf("."), formFile.FileName.Length - formFile.FileName.IndexOf(".")); //文件扩展名，含“.”
                    long fileSize = formFile.Length; //获得文件大小，以字节为单位                    
                    //String FolderPath = webRootPath + filePathPartTemp + Request.Query["FolderAndFileName"];
                    Directory.CreateDirectory(FolderPath);
                    String filePath = FolderPath + "\\" + Request.Query["FolderAndFileName"] + fileExt;
                    filePathAll += filePath;
                }
            }

            //.htm文件中增加想要的代码 //好象Word转.htm如果非UTF-8编码方式，会出乱码。Microsoft.Office.Interop.Word默认又不提供该编程机制。目前只好修改操作系统的默认编码（ANSI中文简体/GB2312/GBK）为UTF-8.Microsoft.Office.Interop.Word转化.htm时默认就是UTF-8了。不乱码。应该也是最好维护，最便于Word与.htm互转。               
            // StreamReader streamReader = new StreamReader(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm", System.Text.Encoding.UTF8);// 创建文本的读取流(会检查字节码标记确定编码格式)//好像调用JS文件出错
            StreamReader streamReader = new StreamReader(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm");// 创建文本的读取流(会检查字节码标记确定编码格式)
            String stringFromFile = streamReader.ReadToEnd(); //读取文本中的所有字符
          // String stringFromFileProcessedTemp = stringFromFile.Replace("charset=gb2312", "charset=utf-8");//尚无法实现.docx转.htm时utf-8编码
            String stringFromFileProcessed = stringFromFile.Replace("</body>", "<!--右键菜单开始 --><div id='popupDiv' onclick='fnPopupClosePopup();' oncontextmenu='fnPopupContextMenu();' style='position:fixed;z-Index:1000;margin: 2px; border: 1px;   overflow:visible;  font-size: 11px; cursor: default;display:none;'><div style='position: relative;' onmouseover='fnPopupMouseOver();' onmouseout='fnPopupMouseOut();'><div title='刷新标题面' onclick='location.reload();'>刷新</div><div title='单击将在是否可以在线编辑课文的之间切换!' onclick='if(document.body.contentEditable==true) { document.body.contentEditable = false; } else { document.body.contentEditable = true;}'>课文编辑切换</div><div>保存</div><div>帮助</div></div></div><!--右键菜单结束--><script id=sIdScriptAutoAddedForDynFunction1 src='../../../../common/script/content.js'></script><script id=sIdScriptAutoAddedForDynFunction2 src='../../../../common/script/Popup.js'></script><script id=sIdScriptAutoAddedForDynFunction3>document.body.onload=fnOnLoad;</script>" + "</body>");
            streamReader.Close();
            StreamWriter streamWriter = new StreamWriter(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm");
            //streamWriter.Write(stringFromFileProcessed, System.Text.Encoding.UTF8);//自动判断为非UTF8出错
            streamWriter.Write(stringFromFileProcessed);
            streamWriter.Close();

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
