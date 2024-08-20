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
using System.Text;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.Examples
{
    public class TryStreamController : Controller
    {
        public TryStreamController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
            _hostingEnvironment = hostingEnvironment;
        }
        private IHostingEnvironment _hostingEnvironment { get; }
        public IActionResult Index1()
        {
            String filePathSource = _hostingEnvironment.WebRootPath + "/source.txt";
            Stream streamSource = new FileStream(filePathSource, FileMode.Open, FileAccess.Read);
            Byte[] byteArray = new Byte[streamSource.Length];
            Int32 bytesRead = streamSource.Read(byteArray, 0, (Int32)streamSource.Length);
            streamSource.Dispose();
            String sTemp = "";
            for (Int32 i = 0; i < byteArray.Length; i++)
            {
                sTemp += byteArray[i];
            }
//好像Byte能还原为Char，不过还未完全实现。
            UnicodeEncoding unicodeEncoding = new UnicodeEncoding();
            char[] charArray = new char[unicodeEncoding.GetCharCount(byteArray, 0, (Int32)streamSource.Length)];
            unicodeEncoding.GetDecoder().GetChars(byteArray, 0, (Int32)streamSource.Length, charArray, 0);
            return Content(bytesRead.ToString()+";"+ sTemp+";"+ charArray);
        }
        public IActionResult Index2()
        {
            String filePathSource = _hostingEnvironment.WebRootPath + "/source.txt";
            string filePathDest = _hostingEnvironment.WebRootPath + "/dest.txt";
            Stream streamSource = new FileStream(filePathSource, FileMode.Open, FileAccess.Read);
            Stream StreamDest = new FileStream(filePathDest, FileMode.Create, FileAccess.Write);

            Int32 byteArraySize = 10;
            Byte[] byteArray = new Byte[byteArraySize];
            Int32 bytesRead =0;
            
            while ((bytesRead-streamSource.Read(byteArray, 0, byteArraySize) > 0))
            {
                bytesRead = streamSource.Read(byteArray, 0, (Int32)streamSource.Length);
                StreamDest.Write(byteArray, 0, bytesRead);
            }
            streamSource.Dispose();
            StreamDest.Dispose();

            return Content(bytesRead.ToString());
        }
    }
}