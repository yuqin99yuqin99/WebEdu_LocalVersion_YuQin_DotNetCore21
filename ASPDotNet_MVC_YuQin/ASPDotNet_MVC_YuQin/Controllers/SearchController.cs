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
using Microsoft.AspNetCore.Authorization;


namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    //[Authorize()]
    public class SearchController : Controller
    {
        private IHostingEnvironment _hostingEnvironment { get; }
        //private IFileProvider _fileProvider { get; }//ASP.NET Core 2.0提供了继承自接口IFileProvider的PhysicalFileProvider类型，用于受限地访问本地文件系统，它是对System.IO.File的一个封装。只能读文件系统？


        public SearchController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
            _hostingEnvironment = hostingEnvironment;
        }

        // GET api/value
        // private String CreatedHTML{ get; set; }
        [HttpGet]
        public IActionResult Get()
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
          //  string contentRootPath = _hostingEnvironment.ContentRootPath;
            String sSearchedKeyWords = this.Request.Query["SearchedKeywords"];
            Console.WriteLine("sFolderPathOfTextbookResources" + sSearchedKeyWords);
            String sFolderPathOfTextbookResources = webRootPath + "\\webCourse\\lessons\\content\\book";
            
            //IEnumerable<String> sEnumDirectoriesOfTextbookResources = Directory.EnumerateDirectories(sFolderPathOfTextbookResources);//返回文件夹的绝对路径
             IEnumerable<String> sEnumerateFilesOfTextbookResources = Directory.EnumerateFiles(sFolderPathOfTextbookResources,"",System.IO.SearchOption.AllDirectories);//返回文件夹下所有文件的绝对路径
             // IEnumerable<String> sEnumFilesOfTextbookResources = Directory.EnumerateFiles(sFolderPathOfTextbookResources,System.IO.EnumerationOptions);//返回文件夹的绝对路径
            String sSearedFileNames = "";            
            foreach (String sFileName in sEnumerateFilesOfTextbookResources)
            {
                //sTemp += sDirectory.Substring(sDirectory.LastIndexOf("\\")+1) + sSeperation;
                if (sFileName.Substring(sFileName.LastIndexOf(".")+ 1)=="htm")
                {
                    Boolean isSearched = false;
                    StreamReader streamReader = new StreamReader(sFileName);// 创建文本的读取流(会检查字节码标记确定编码格式)
                    String stringFromFile = streamReader.ReadToEnd(); //读取文本中的所有字符                                                                     
                    if (stringFromFile.IndexOf(sSearchedKeyWords) > 0){ isSearched=true; }
                    streamReader.Close();
                    if (isSearched) {
                        String sTemp = sFileName.Substring(sFileName.LastIndexOf("\\") + 1);
                        sSearedFileNames += sTemp.Substring(0, sTemp.LastIndexOf(".")) + "|";//在此特殊情况，文件名等于文件夹名。以“|”分割以便浏览器端裁切还原。
                       // sSearedFileNames += sTemp + "|";//在此特殊情况，文件名等于文件夹名。以“|”分割以便浏览器端裁切还原。
                    }
                }
            }
            return this.Content(sSearedFileNames);
        }

      
    }

}
