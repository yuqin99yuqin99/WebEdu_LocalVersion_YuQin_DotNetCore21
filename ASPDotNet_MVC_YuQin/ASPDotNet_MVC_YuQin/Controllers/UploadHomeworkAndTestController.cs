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
using Microsoft.Office.Core;
using Microsoft.Office.Interop.Word;
using System.Xml;
//using Microsoft.Office.Core;//引用不了。本来说可以设置word另存为utf8格式的.htm
using System.Text;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Common;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class UploadHomeworkAndTestController : Controller
    {
        public UploadHomeworkAndTestController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
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
            return Content("<HTML><HEAD><TITLE>课文</TITLE><BODY><div contenteditable='true' style='width:100%;height:100%;text-align:center;vertical-align:middle;'><span style='line-height: 400px;'>该条目尚没有对应的课文，这是自动创建的文本，请编辑</span></div></BODY ></HTM>", "text/html",System.Text.Encoding.UTF8);//不知为什么，必须""嵌套''，否则提示“字符文本中字符太多”错误
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
            //判断是本机版还是服务器版，服务器不允许上传
            
            if (new LocalVersionOrServerVersion().IsLocalVersion(this.Request.Host.ToUriComponent())) 
            {
                IFormFileCollection files = Request.Form.Files;
                long size = files.Sum(f => f.Length);
                string webRootPath = _hostingEnvironment.WebRootPath;
                string contentRootPath = _hostingEnvironment.ContentRootPath;
                String filePathPartTemp = "\\webCourse\\lessons\\content\\HomeworkAndTest\\";
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
                           document.WebOptions.Encoding = MsoEncoding.msoEncodingUTF8;
                            //document.SaveAs2(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm", Encoding.UTF8, WdSaveFormat.wdFormatFilteredHTML);//无法调用.net的编码
                            //document.SaveAs2(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm", WdSaveFormat.wdFormatFilteredHTML, MsoEncoding.msoEncodingUTF8);
                            document.SaveAs2(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm", WdSaveFormat.wdFormatFilteredHTML);

                            // document.SaveAs2(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm" ,WdSaveFormat.wdFormatFilteredHTML, MsoEncoding.msoEncodingUTF8);//加入UTF-8编码暂时未成功//增加了COM形式的依赖，但COM形式的在Web服务器端无法调用？，NUGET形式的可以。
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

                            //删除已转化成为了.htm的.docx文件。
                            System.IO.File.Delete(filePath);
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

             
               //作业与测试不需要右键菜单功能。
                StreamReader streamReader = new StreamReader(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm", new TexFileEncodeType().GetFileEncodeType(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm"));// 创建文本的读取流(会检查字节码标记确定编码格式)
                String stringFromFile = streamReader.ReadToEnd(); //读取文本中的所有字符
                 // String stringFromFileProcessedTemp = stringFromFile.Replace("charset=gb2312", "charset=utf-8");//尚无法实现.docx转.htm时utf-8编码
                                                                  // String stringFromFileProcessed = stringFromFile.Replace("</body>", "<!--右键菜单开始 --><div id='popupDiv' onclick='fnPopupClosePopup();' oncontextmenu='fnPopupContextMenu();' style='position:fixed;z-Index:1000;margin: 2px; border: 1px;   overflow:visible;  font-size: 11px; cursor: default;display:none;'><div style='position: relative;' onmouseover='fnPopupMouseOver();' onmouseout='fnPopupMouseOut();'><div title='刷新标题面' onclick='location.reload();'>刷新</div><div title='单击将在是否可以在线编辑课文的之间切换!' onclick='if(document.body.contentEditable==true) { document.body.contentEditable = false; } else { document.body.contentEditable = true;}'>课文编辑切换</div><div title='编辑后可保存编辑结果' onclick='fnSave();'>保存</div><div>帮助</div></div></div><!--右键菜单结束--><script id=sIdScriptAutoAddedForDynFunction1 src='../../../../common/script/content.js'></script><script id=sIdScriptAutoAddedForDynFunction2 src='../../../../common/script/Popup.js'></script><script id=sIdScriptAutoAddedForHomeworkAndTest src='../../../../common/script/HomeworkAndTest.js'></script><script id=sIdScriptAutoAddedForDynFunction3>document.body.onload=fnOnLoad;;fnHomeworkAndTest();</script>" + "</body>");//比通常word转htm多增加了一个处理为作业与测验的JS文件引用
                String stringFromFileProcessed = stringFromFile.Replace("</body>", "<script id=sIdScriptAutoAddedForHomeworkAndTest src='../../../../common/script/HomeworkAndTest.js'></script><script id=sIdScriptAutoAddedForDynFunction3>fnHomeworkAndTest();</script>" + "</body>");//比通常word转htm多增加了一个处理为作业与测验的JS文件引用
                streamReader.Close();
                StreamWriter streamWriter = new StreamWriter(FolderPath + "\\" + Request.Query["FolderAndFileName"] + ".htm",false,Encoding.UTF8);//修改为了UTF8编码，可以运行。但还未检验。因为windows系统使用了utf8，需要在windows系统没有使用utf8的机器检验。

                // streamWriter.Write(stringFromFileProcessed,,Encoding.UTF8);//出错。
                streamWriter.Write(stringFromFileProcessed);
                streamWriter.Close();
    

                return Ok(new { count = files.Count, size, filePathAll, host=this.Request.Host.ToUriComponent() }) ;
            }
            else { return Ok("这是服务器版（或者是本机版发布为了服务器版的方式运行），不允许直接上传！请在本机版制作好后（本机版无需登录）,连接服务器版（课程资源管理员的账号登录连接服务器版），上传本机版中的资源到服务器版!" + this.Request.Host.ToUriComponent()); }
            
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
class SingleSelectionItembank//本来想XML方式处理为作业与测验。后来还是先试验了浏览器端JS.
        {
            String Process(String filePath) 
            {
                XmlDocument xmlDocument = new XmlDocument();
                xmlDocument.Load(filePath);
                XmlNode XmlNodeOfTable = xmlDocument.GetElementsByTagName("Table").Item(0);
                XmlNodeList XmlNodeListOfTR = XmlNodeOfTable.ChildNodes;
                return ""; 
            }
        }
}   
}
