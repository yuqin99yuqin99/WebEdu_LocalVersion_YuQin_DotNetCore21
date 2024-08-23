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
using Microsoft.Office.Interop.PowerPoint;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Common;


namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class CleanController : Controller
    {
        public CleanController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
           _hostingEnvironment = hostingEnvironment;
        }
        private IHostingEnvironment _hostingEnvironment { get; }

        [HttpGet]
        public IActionResult Get()
        {
            if (new LocalVersionOrServerVersion().IsLocalVersion(this.Request.Host.ToUriComponent()))//本机版允许，服务版不允许
            {

                String webRootPath = _hostingEnvironment.WebRootPath;
                String contentRootPath = _hostingEnvironment.ContentRootPath;

                String sRequestFolderCollectionOfTeachingEngineering = this.Request.Query["sTeachingEngineering"];
                String sRequestFolderCollectionOfTextbookResources = this.Request.Query["sTextBookResource"];
                String sRequestFolderCollectionOfTeachingVideo = this.Request.Query["sTeachingVideo"];
                String sRequestFolderCollectionOfTeachingPPT = this.Request.Query["sTeachingPPT"];
                String sRequestFolderCollectionOfHomeworkAndTest = this.Request.Query["sHomeworkAndTest"];

                String sFolderPathOfTeachingEngineering = webRootPath + "\\webCourse\\lessons\\content\\TeachingEngineering";
                String sFolderPathOfTextbookResources = webRootPath + "\\webCourse\\lessons\\content\\book";
                String sFolderPathOfTeachingVideo = webRootPath + "\\webCourse\\lessons\\content\\TeachingEngineering";
                String sFolderPathOfTeachingPPT = webRootPath + "\\webCourse\\lessons\\content\\teachingPlan";
                String sFolderPathOfHomeworkAndTest = webRootPath + "\\webCourse\\lessons\\content\\HomeworkAndTest";

                //String[] sFilesOfTeachingEngineering = Directory.GetFiles(sFolderPathOfTeachingEngineering);
               // String[] sFilesOfTextbookResources = Directory.GetFiles(sFolderPathOfTextbookResources);
               // String[] sFilesOfTeachingVideo = Directory.GetFiles(sFolderPathOfTeachingVideo);
               // String[] sFilesOfTeachingPPT = Directory.GetFiles(sFolderPathOfTeachingPPT);
              //  String[] sFilesOfHomeworkAndTest = Directory.GetFiles(sFolderPathOfHomeworkAndTest);
              String sSeperation = "|";

               IEnumerable<String> sEnumDirectoriesOfTeachingEngineering = Directory.EnumerateDirectories(sFolderPathOfTeachingEngineering);//返回文件夹的绝对路径
                String sCleanedDirectoriesOfTeachingEngineering = "";
                foreach (String sDirectory in sEnumDirectoriesOfTeachingEngineering)
                {
                    if (sRequestFolderCollectionOfTeachingEngineering.IndexOf(sDirectory.Substring(sDirectory.LastIndexOf("\\") + 1)) < 0)
                    {
                       // //Directory.Delete(sDirectory,true);//true表示非空文件夹也删除////会误删，暂时禁用。
                        sCleanedDirectoriesOfTeachingEngineering += sDirectory+ sSeperation;
                    }
                }
                IEnumerable<String> sEnumDirectoriesOfTextbookResources = Directory.EnumerateDirectories(sFolderPathOfTextbookResources);//返回文件夹的绝对路径
                
                String sCleanedDirectoriesOfTextbookResources = "";
                foreach (String sDirectory in sEnumDirectoriesOfTextbookResources)
                {
                    //sTemp += sDirectory.Substring(sDirectory.LastIndexOf("\\")+1) + sSeperation;
                    if (sRequestFolderCollectionOfTextbookResources.IndexOf(sDirectory.Substring(sDirectory.LastIndexOf("\\")+1)) < 0)
                    {
                        Directory.Delete(sDirectory,true);
                        sCleanedDirectoriesOfTextbookResources += sDirectory + sSeperation;
                    }
                }
              IEnumerable<String> sEnumDirectoriesOfTeachingVideo = Directory.EnumerateDirectories(sFolderPathOfTeachingVideo);//返回文件夹的绝对路径
               String sCleanedDirectoriesOfTeachingVideo = "";
                                foreach (String sDirectory in sEnumDirectoriesOfTeachingVideo)
                                {
                                    if (sRequestFolderCollectionOfTeachingVideo.IndexOf(sDirectory.Substring(sDirectory.LastIndexOf("\\") + 1)) < 0)
                                    {
                                        Directory.Delete(sDirectory, true);
                                        sCleanedDirectoriesOfTeachingVideo += sDirectory + sSeperation;
                                    }
                                }

               IEnumerable<String> sEnumDirectoriesOfTeachingPPT = Directory.EnumerateDirectories(sFolderPathOfTeachingPPT);//返回文件夹的绝对路径
                                String sCleanedDirectoriesOfTeachingPPT = "";
                                foreach (String sDirectory in sEnumDirectoriesOfTeachingPPT)
                                {
                                    if (sRequestFolderCollectionOfTeachingPPT.IndexOf(sDirectory.Substring(sDirectory.LastIndexOf("\\") + 1)) < 0)
                                    {
                                        Directory.Delete(sDirectory, true);
                                        sCleanedDirectoriesOfTeachingPPT += sDirectory + sSeperation;
                                    }
                                }

               IEnumerable<String> sEnumDirectoriesOfHomeworkAndTest = Directory.EnumerateDirectories(sFolderPathOfHomeworkAndTest);//返回文件夹的绝对路径
                                String sCleanedDirectoriesOfHomeworkAndTest = "";
                                foreach (String sDirectory in sEnumDirectoriesOfHomeworkAndTest)
                                {
                                    if (sRequestFolderCollectionOfHomeworkAndTest.IndexOf(sDirectory.Substring(sDirectory.LastIndexOf("\\") + 1)) <0)
                                    {
                                       // Directory.Delete(sDirectory, true);//会误删，暂时禁用。
                                        sCleanedDirectoriesOfHomeworkAndTest += sDirectory + sSeperation;
                                    }
                                }
                                GC.Collect();                                 
                               

                return Ok(new { sCleanedDirectoriesOfTeachingEngineering,sCleanedDirectoriesOfTextbookResources, sCleanedDirectoriesOfTeachingVideo, sCleanedDirectoriesOfTeachingPPT , sCleanedDirectoriesOfHomeworkAndTest }); 
            }
            else { return Ok("这是服务器版（或者是本机版发布为了服务器版的方式运行），不允许直接上传！请在本机版制作好后（本机版无需登录）,连接服务器版（课程资源管理员的账号登录连接服务器版），上传本机版中的资源到服务器版!" + this.Request.Host.ToUriComponent()); }
    }
    }

}
